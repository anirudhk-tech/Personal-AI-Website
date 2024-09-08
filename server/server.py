'''
Central server file that runs the Flask server
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
'''

from flask import Flask, request, jsonify
from flask_cors import CORS
from database.database import insert_convo 

server = Flask(__name__)
CORS(server)
# Endpoint to insert message into database
@server.route('/insert', methods=['POST'])
def insert():
    data = request.json
    print(data)
    response = insert_convo(data)

    return jsonify(response)

if __name__ == '__main__':
    server.run(debug=True)