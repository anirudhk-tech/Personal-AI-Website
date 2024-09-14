import { Card, Typography } from "@mui/material";

export const SkillTag = ({ tag }) => {
    return (
        <Card
        sx={{
            height: '5vh',
            maxWidth: '1000px',
            bgcolor: 'background',
            borderColor: 'secondary.main',
            paddingLeft: '3%',
            paddingRight: '3%',
            display: 'flex',
        }}
        >
            <Typography
            sx={{
                fontFamily: 'Oswald',
                fontSize: '1.5vw',
                color: 'primary.main',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >{tag}</Typography>
        </Card>
    );
};