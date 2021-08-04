from ..services.db_postgres import get_user_by_email, create_user
from ..services.secure import *
from ..services.validate import all_keys_present


def signup(user_data):
    """
    Signup controller
    :param user_data:
    :return:
    """
    # VALIDATE USER DATA
    if not all_keys_present(user_data, ["fullname", "email", "pswd"]):
        return {
            "status": 400,
            "msg": "Incomplete data."
        }

    # if already signed up
    # ask to login
    res = create_user(user_data["email"], hash_it(user_data["pswd"]), user_data["fullname"])
    if res == "EMAIL_ALREADY_EXISTS":
        return {
            "status": 400,
            "msg": "This email already exists. Please proceed to login."
        }

    return {
        "status": 200,
        "msg": "Signup successful."
    }


def signin(email, pswd):
    """
    Signin controller
    :param email:
    :param pswd:
    :return:
    """
    user = get_user_by_email(email)
    # see if user with this email exists
    if not user:
        return {
            "status": 400,
            "msg": "This email is not registered with us. Please signup first."
        }

    # if user exists
    if not verify_hash(pswd, user[3]):
        return {
            "status": 400,
            "msg": "The email / password combination did not match. Please try again."
        }

    # return
    # del user["hash"]
    user.pop(3)
    return {
        "tok": jwt_encode({
            "email": email
        }),
        "user": user,
        "status": 200,
        "msg": "Signin successful."
    }
