/*
Home page, which is also the page where user can chat with the AI
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { Box } from "@mui/material";
import { DrawerComponent } from "../components/common/drawer";
import { InputComponent } from "../components/home/input";
import { HeaderComponent } from "../components/common/header";
import { Chat } from "components/home/chat";
import { insert_chat } from "../api/api";
import { useContext } from "react";
import { IdContext } from "context/idContext";


export default function Home () {
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
                alignItems: 'center'
            }}
            >
                <Chat/>
                <InputComponent/>
            </Box>
        </Box>
    );
};