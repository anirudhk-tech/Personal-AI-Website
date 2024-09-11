import { Box } from "@mui/material";
import { ChatBox } from "./chatBox";
import { useContext, useEffect, useState } from "react";
import { fetch_chat } from "api/api";
import { InputContext } from "context/inputContext";
import { IdContext } from "context/idContext";

export const Chat = () => {
    const { msgSent } = useContext(InputContext);
    const uuid = useContext(IdContext);
    const initDialog = {
        chat_type: 'bot',
        convo_id: uuid,
        content: "Hey! I'm Cortex. Anything specific you'd like to know about Anirudh?"
    };
    const [chatMsgs, setChatMsgs] = useState([]);

    const fetch_messages = async () => {
        const data = {
            uuid: uuid.uuid,
          };
        
        const chat = await fetch_chat(data);
        setChatMsgs(chat ? [initDialog, ...chat.messages] : [initDialog]); // Checking if chat exists (It doesn't on start up)
    };

    useEffect(() => {
          fetch_messages();
    }, [msgSent]);

    return (
        <Box
        sx={{
            height: '90%',
            width: '78%',
            paddingTop: '10%', // Making sure chats aren't hidden behind header
            overflowY: 'scroll',
            scrollbarWidth: 'none',
        }}
        >
            { chatMsgs.map((msg) => (
                <ChatBox key={JSON.stringify(msg)} msg={msg}/>
            ))
            }   
        </Box>
    );
};