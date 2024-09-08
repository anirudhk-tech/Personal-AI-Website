import { Box } from "@mui/material";
import { ChatBox } from "./chatBox";

const test_chat_data = [
    { type: "bot", content: "Hello! I'm a bot created by Anirudh." },
    { type: "user", content: "That's great to hear!" }, 
];

export const Chat = () => {
    return (
        <Box
        sx={{
            height: '90%',
            width: '78%',
            paddingTop: '10%', // Making sure chats aren't hidden behind header
            display: 'flex',
            flexDirection: 'column',
        }}
        >
            { test_chat_data.map((msg) => (
                <ChatBox key={JSON.stringify(msg)} msg={msg}/>
            ))
            }   
        </Box>
    );
};