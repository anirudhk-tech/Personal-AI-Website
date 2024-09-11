"use client"

/*
Main page that contains all the pages of the website
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/
import { ThemeProvider } from "@mui/material";
import { v4 } from 'uuid';
import { theme } from "./theme";
import HomePage from "../../pages/home_page";
import { IdContext } from "context/idContext";
import { useEffect } from "react";
import { delete_chat } from "api/api";

const uuid = v4(); // Generating random uuid that will be used to save chat history

const handleUnload = async () => {
  const data = {
    uuid: uuid,
  };

  delete_chat(data);
};

export default function App () {

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
}
