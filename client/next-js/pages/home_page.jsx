/*
Home page, which is also the page where user can chat with the AI
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { Box } from "@mui/material";
import { DrawerComponent } from "../components/common/drawer.jsx";
import { InputComponent } from "../components/home/input.jsx";
import { HeaderComponent } from "../components/common/header.jsx";
import { Chat } from "components/home/chat.jsx";
import { useState } from "react";
import { InputContext } from "context/inputContext.jsx";

export default function HomePage () {
    const [msgSent, setMsgSent] = useState(false); // State that controls chat refresh on new msg sends

    return ( 
        <Box
        sx={{
            bgcolor: 'background',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row'
        }}
        >
            <HeaderComponent/>
            <DrawerComponent/>
            <Box
            sx={{
                display: 'flex',
                width: '90%',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '1%',
                paddingTop: {md: '2%'}
            }}
            >
                <InputContext.Provider value={{msgSent: msgSent, setMsgSent: setMsgSent}}>
                    <Chat/>
                    <InputComponent/>
                </InputContext.Provider>
            </Box>
        </Box>
    );
};