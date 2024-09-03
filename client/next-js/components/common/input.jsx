import { Box, TextField } from "@mui/material";


export const InputComponent = () => {
    return (
        <Box
        sx={{
            bgcolor: 'background',
            width: '60%',
            height: '10%',
            alignItems: 'center',
            display: 'flex',
        }}
        >
            <TextField 
            variant="outlined"
            label="Type your question..."
            color="primary"
            fullWidth
            />
        </Box>
    );
};