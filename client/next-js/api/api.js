/*
Api file that sends requests to Flask server
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

const flask_url = 'https://24.1.146.224:8000';
const insert_url = flask_url+'/insert';
const delete_url = flask_url+'/delete';
const fetch_url = flask_url+'/fetch';
const ask_url = flask_url+'/ask';

/*
Function that sends a POST request to the insert endpoint in flask server. Adding message to database.
Input: data (The message object to send)
Output: None
*/
export const insert_chat = (data) => {
    fetch(insert_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.error("Error: ", error))  

    const { content, uuid } = data;
    const ask_data = {
        'query': content,
        'uuid': uuid,
    };

    fetch(ask_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ask_data)
    })
    .then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.error("Error: ", error));
};

/*
Function that sends a request to Flask to delete the conversation on the database when user exits the website.
Input: data (The object containing the UUID of the conversation)
Output: None
*/
export const delete_chat = (data) => {
    fetch(delete_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log("Success: ", data))
    .catch(error => console.error("Error: ", error))
};

/*
Function that sends a request to Flask to fetch a conversation
Input: data (The object containing the UUID of the specific conversation)
Output: convoArray (Array of message objects that make up the chat history)
*/
export const fetch_chat = async (data) => {
    const response = await fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => console.error("Error: ", error))

    return response
};