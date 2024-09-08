'''
Central server file that runs the Flask server
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
'''

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from database.database import insert_convo, delete_convo, get_convo

server = Flask(__name__)
cors = CORS(server, resources={r"/*": {"origins": "*"}})
# Endpoint to insert message into database
@server.route('/insert', methods=['POST'])
def insert():
    data = request.json
    response = insert_convo(data)

    return jsonify(response)

@server.route('/delete', methods=['POST'])
def delete():
    data = request.json
    response = delete_convo(data['uuid'])

    return jsonify(response)

@server.route('/fetch', methods=['POST'])
@cross_origin()
def fetch():    
    data = request.json
    response = get_convo(data['uuid'])

    return { 'messages': response.data }

if __name__ == '__main__':
    server.run(debug=True)