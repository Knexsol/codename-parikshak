from pymongo import MongoClient

client = MongoClient('mongodb+srv://almighty:8961184810@cluster0.nwvop.mongodb.net/codenameparikshak?retryWrites=true&w=majority')


def signup(user_data):
    db = client.parikshak_db
    collection = db.user_collection_1
    user_id = collection.insert_one(user_data).inserted_id
    return str(user_id)
