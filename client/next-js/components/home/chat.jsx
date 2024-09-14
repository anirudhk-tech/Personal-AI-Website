import { Box, Typography } from "@mui/material";
import { ChatBox } from "./chatBox";
import { useContext, useEffect, useRef, useState } from "react";
import { fetch_chat } from "api/api";
import { InputContext } from "context/inputContext";
import { IdContext } from "context/idContext";

export const Chat = () => {
    const { msgSent } = useContext(InputContext);
    const uuid = useContext(IdContext);
    const chatBoxRef = useRef(null);
    const [typing, setTyping] = useState(false);

    const initDialog = {
        chat_type: 'bot',
        convo_id: uuid,
        content: "Hey! I'm Cortex. I am an AI specifically designed to answer questions on Anirudh. It is important to mention that I'm purely experimental and sometimes I may be wrong. Double-check important information either online or with Anirudh himself. For the best use of your time and good responses, try to be specific on what you'd like to know. Ex. 'What is Anirudh's professional background?' instead of 'What is Anirudh's background?'. What would you like to know?"
    };
    const [chatMsgs, setChatMsgs] = useState([]);

    const fetch_messages = async () => {
        const data = {
            uuid: uuid.uuid,
          };
        
        const chat = await fetch_chat(data);
        setChatMsgs(chat ? [initDialog, ...chat.messages] : []); // Checking if chat exists (It doesn't on start up)
    };

    useEffect(() => {
        setTimeout(() => { // Timeout to render user message on screen
            fetch_messages();
        }, 500);

        if (chatBoxRef.current) { // Auto scroll to bottom when entering text
            setTimeout(() => {
                chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
            }, 1000);
        };

        setTimeout(() => {
            setTyping(true); // Indicating that the bot is typing
        }, 1100);

        setTimeout(() => {  // Timeout to render AI message on screen
            fetch_messages();
        }, 4000);

        if (chatBoxRef.current) {  // Auto scroll to bottom when AI responds
            setTimeout(() => {
                chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
                setTyping(false); // Making "typing..." disappear once response is visible
            }, 5000);
        };

    }, [msgSent]);

    return (
        <Box
        sx={{
            height: '90%',
            width: '95%',
            paddingTop: '5%', // Making sure chats aren't hidden behind header
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: '3%',
        }}
        >
            <Typography 
            sx={{
                fontFamily: 'Oswald',
                color: 'secondary.main',
                fontSize: '5vh',
            }}
            >{"Cortex (Experimental)"}</Typography>
            <Typography 
            sx={{
                fontFamily: 'PT Sans',
                color: 'primary.main',
                fontSize: '3vh',
                opacity: typing ? 1.0 : 0.0,
            }}
            >{"typing..."}</Typography>
            
            <Box
            ref={chatBoxRef}
            sx={{
                height: '100%',
                width: '100%',
                paddingLeft: '2%',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                display: 'flex',
                flexDirection: 'column',
                scrollBehavior: 'smooth',
            }}
            >
                { chatMsgs.map((msg) => (
                    <ChatBox key={msg['created_at']} msg={msg}/>
                ))
                }   
            </Box>
        </Box>
    );
};