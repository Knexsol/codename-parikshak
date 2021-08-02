from pymongo import MongoClient
from .secure import *

client = MongoClient('mongodb+srv://almighty:8961184810@cluster0.nwvop.mongodb.net/codenameparikshak?retryWrites=true&w=majority')


def find_user(email):
    db = client.parikshak_db
    collection = db.user_collection_1
    user = collection.find_one({ "email": email })
    # print(user)
    return user


def signup(user_data):
    # if already signed up
    # ask to login
    if find_user(user_data["email"]):
        return 'This email already exists. Please proceed to login.'
    
    # if email does not exist in db
    db = client.parikshak_db
    collection = db.user_collection_1
    user_data["pswd"] = hash_it(user_data["pswd"])
    user_id = collection.insert_one(user_data).inserted_id
    return str(user_id)


def signin(email, pswd):
    # see if user with this email exists
    user = find_user(email)
    if not user:
        return 'This email is not registered with us. Please signup first.'
    
    # if user exists
    if not verify_hash(pswd, user["pswd"]):
        return 'The email / password combination did not match. Please try again.'

    # return a jwt token
    return { 
        "tok": jwt_encode({ 
            "email": email 
        }) 
    }
