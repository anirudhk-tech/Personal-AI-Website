/*
Input component for the home page
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { Box, TextField } from "@mui/material";
import { useEffect, useRef, useContext, useState } from "react";
import { IdContext } from "context/idContext";
import { ask_bot, insert_chat } from "api/api";
import { InputContext } from "context/inputContext";


export const InputComponent = () => {
    const uuid = useContext(IdContext);
    const { msgSent, setMsgSent } = useContext(InputContext);
    const inputRef = useRef(null);
    const query = useRef("empty");

    /*
    Function that decides whether to autofocus or not based on key pressed
    Input: e (key press event)
    Output: None
    */
    const handleKeyDown = (e) => {
        if (inputRef.current) {
            if (e.key === 'Backspace' && query.current === "") {
                inputRef.current.querySelector('input').blur();
            } else if (e.key === 'Enter') {
                sendMessage();
            } else {
                inputRef.current.querySelector('input').focus();
            };
        };
    }; 

    const handleChange = (e) => {
        query.current = e.target.value;
    };

    /*
    Function that sends the message to the api, which then sends it to the Flask server
    Input: None
    Output: None
    */
    const sendMessage = () => {
        const message = {
            uuid: uuid.uuid,
            chat_type: 'user',
            content: query.current,
        };

        insert_chat(message);
        setMsgSent(prev => !prev); // Refreshing chat once new msg is sent
        query.current = ''; // Resetting query once refreshed
    };


    // Auto focuses text input on key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => removeEventListener('keydown', handleKeyDown)
    }, []);

    return (
        <Box
        sx={{
            bgcolor: 'background',
            width: '95%',
            height: '10%',
            alignItems: 'center',
            display: 'flex',
        }}
        >
            <TextField 
            ref={inputRef}
            key={msgSent}
            onChange={handleChange}
            variant='outlined'
            label="Type your question..."
            color='primary'
            fullWidth
            sx={{
                input: { color: 'primary.main' },
                '& .MuiOutlinedInput-root': { // Setting border color of input based on hover
                    '& fieldset': { borderColor: 'background' },
                    '&:hover fieldset': { borderColor: 'primary.main' },
                }
            }}
            />
        </Box>
    );
};