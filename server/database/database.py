'''
File that provides functions to insert, delete, and fetch from the database
Date Last Edited: 8 September 2024
Author: Anirudh Kuppili
'''

import os
from supabase import create_client, Client
from dotenv import load_dotenv, dotenv_values

load_dotenv()

supabase_url = os.getenv("SUPA_URL")
supabase_key = os.getenv("SUPA_KEY")

SB: Client = create_client(supabase_url, supabase_key) # Initializing supabase client for api interaction

'''
Function to insert a new conversation entry into database
Input: uuid (Unique id pretaining to current user. Generated on app start up), chat_type (user or bot), content (message)
Output: None
'''
def insert_convo (msg):
    try:
        response = (
            SB.table('conversations')
            .insert({ 
                'convo_id': msg['uuid'], 
                'chat_type': msg['chat_type'], 
                'content': msg['content'],
            })
            .execute()
        )

        print("Message added! Response: ", response)
    except Exception as e:
        raise RuntimeError("Failed to insert message into database. Error: ", e)

'''
Function to delete existing conversation when user exists out of website
Input: convo_id (UUID assigned to the conversation at start up)
Output: None
'''
def delete_convo (convo_id):
    try:
        response = (
            SB.table('conversations')
            .delete()
            .eq('convo_id', convo_id)
            .execute()
        )

        print("Conversation deleted! Response: ", response)
    except Exception as e:
        raise RuntimeError("Failed to delete conversation. Error: ", e)


'''
Function to fetch existing conversation and refresh everytime new message is sent
Input: convo_id (UUID that represents a specific conversation)
Output: convo_array (Array of all message objects associated with conversation uuid)
'''
def get_convo (convo_id):
    try:
        response = (
            SB.table('conversations')
            .select('*')
            .eq('convo_id', convo_id)
            .execute()
        )

        print("Conversation fetched! Conversation: ", response)
        return response
    except Exception as e:
        raise RuntimeError("Failed to fetch conversation. Error: ", e)