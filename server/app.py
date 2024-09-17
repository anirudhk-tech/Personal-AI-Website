'''
Central app file that runs the Flask app
Date Last Edited: 8 September 2024
Author: Anirudh Kuppili
'''

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from database.database import insert_convo, delete_convo, get_convo
from ai_bot.gemini import ask_ai
from dotenv import load_dotenv, dotenv_values
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
# Endpoint to insert message into database
@app.route('/insert', methods=['POST'])
def insert():
    data = request.json
    response = insert_convo(data)

    return jsonify(response)

@app.route('/delete', methods=['POST'])
def delete():
    data = request.json
    response = delete_convo(data['uuid'])

    return jsonify(response)

@app.route('/fetch', methods=['POST'])
def fetch():    
    data = request.json
    response = get_convo(data['uuid'])

    return { 'messages': sorted(response.data, key=lambda chat: chat['created_at']) } # Sorting response so least recent comes first

@app.route('/ask', methods=['POST'])
def ask ():
    data = request.json
    response = ask_ai(data['query'])
    bot_response = {
        'uuid': data['uuid'],
        'chat_type': 'bot',
        'content': response,
    }

    insert_convo(bot_response)

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv("PORT"))