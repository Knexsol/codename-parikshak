from passlib.hash import sha256_crypt
import jwt

# This secret should be read from env
# For Now, temporarily hardcoding
SECRET = 'so3&dm=!4Ud9^75Dn(h$g1L0dW*zeN8#2tX'


def hash_it(txt):
    return sha256_crypt.hash(txt)


def verify_hash(txt, hashed_txt):
    return sha256_crypt.verify(txt, hashed_txt)


def jwt_encode(data):
    return jwt.encode(data, SECRET, algorithm="HS256")


def jwt_decode(txt):
    return jwt.decode(txt, SECRET, algorithms=["HS256"])