"use client"

/*
About page hosting all the information that is contained in /about
Date Last Edited: 9 September 2024
Author: Anirudh Kuppili
*/

import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { IdContext } from "context/idContext.jsx";
import HomePage from "pages/home_page.jsx";
import { useEffect } from "react";
import { delete_chat } from "api/api.js";
import { v4 } from 'uuid';


export default function Cortex () {
    const uuid = v4(); // Generating random uuid that will be used to save chat history

    const handleUnload = async () => {
        const data = {
          uuid: uuid,
        };
      
        delete_chat(data);
    };

    useEffect(() => {
        window.addEventListener('beforeunload', handleUnload);
      
        return () => {
          window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <IdContext.Provider value={{uuid: uuid}}>
                <HomePage/>
            </IdContext.Provider>
        </ThemeProvider>
    );
};