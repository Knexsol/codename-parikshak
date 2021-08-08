import psycopg2
# conn = psycopg2.connect("dbname=suppliers user=postgres password=postgres")
conn = psycopg2.connect(
    host="localhost",
    database="parikshak1",
    user="postgres",
    password="Sb@89611")

# # execute a statement
# print('PostgreSQL database version:')
# cur.execute('SELECT version()')

# # display the PostgreSQL database server version
# db_version = cur.fetchone()
# print(db_version)

# # close the communication with the PostgreSQL


def get_user_by_email(email):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cur.fetchone()
    cur.close()
    return list(user) if user else None


def create_user(email, hashed_password, fullname):
    # if already registered
    if get_user_by_email(email):
        return "EMAIL_ALREADY_EXISTS"

    cur = conn.cursor()
    cur.execute("INSERT INTO users (email, hash, fullname) VALUES (%s, %s, %s)", (email, hashed_password, fullname))
    res = conn.commit()
    cur.close()
    return "SUCCESSFUL"


# print(get_user_by_email("barick@gmail.com"))
# print(create_user("barick@email.com", "HGgh76jhg*&^jh678h%$fgh%^&g", "Raja Moshai"))

