/*
Api file that sends requests to Flask server
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

const flask_url = 'http://127.0.0.1:5000';
const insert_url = flask_url+'/insert';

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
    .catch((error) => console.error("Error: ", error))
    
};