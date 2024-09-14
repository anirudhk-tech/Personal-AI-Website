/*
Header compoenent that includes my name
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { AppBar, Typography } from "@mui/material";

export const HeaderComponent = () => {
    return (
        <AppBar // Elevation 0 removes border of app bar
        elevation={0}
        sx={{
            bgcolor: 'background',
            height: {xs: '5%', sm: '14%'},
            alignItems: 'flex-end',
            padding: '2%',
        }}
        >
            <Typography
            sx={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: '3vw',
                color: 'primary.main',
            }}>Anirudh Kuppili</Typography>
        </AppBar>
    );
};