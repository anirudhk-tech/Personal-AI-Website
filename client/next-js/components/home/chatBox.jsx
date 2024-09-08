import { Card, CardContent, Typography } from "@mui/material";


export const ChatBox = ({ msg }) => {
    const card_content = (
        <CardContent>
            <Typography sx={{
                color: msg.chat_type === 'bot' ? 'primary.main' : 'primary.contrastText'
            }}>{msg.content}</Typography>
        </CardContent>
    );

    return (
        <Card 
        variant='outlined'
        sx={{
            borderColor: 'primary.main',
            bgcolor: msg.chat_type === 'bot' ? 'background' : 'primary.main',
            borderWidth: 2,
            width: '40%',
            marginBottom: '2%', // Adds space between chats
            alignSelf: msg.chat_type === 'bot' ? 'flex-start' : 'flex-end',
        }}    
        >{card_content}</Card>
    );
};