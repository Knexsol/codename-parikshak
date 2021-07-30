import os.path
from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/exam", methods=["POST"])
def create_exam():
    # return jsonify(myKey="myValue")
    return { "data": request.get_json(), "response": "You got it dude" }


# Serving static files
@app.route('/', defaults={'path': ''})
@app.route('/<string:path>')
@app.route('/<path:path>')
def static_proxy(path):
    FE_BUILD_DIR = 'fe-ng-built-dir'
    if os.path.isfile(FE_BUILD_DIR + '/' + path):
        # If request is made for a file by angular for example main.js
        # condition will be true, file will be served from the public directory
        return send_from_directory(FE_BUILD_DIR, path)
    else:
        # Otherwise index.html will be served,
        # angular router will handle the rest
        # return app.send_static_file("index.html")
        return send_from_directory(FE_BUILD_DIR, "index.html")


# Comment this out while deploying
app.run(port=9099, debug=True)