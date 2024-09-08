"use client"

/*
Main page that contains all the pages of the website
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/
import { createTheme, ThemeProvider } from "@mui/material";
import { v4 } from 'uuid';
import Home from "../../pages/home";
import { IdContext } from "context/idContext";

const uuid = v4(); // Generating random uuid that will be used to save chat history

const theme = createTheme({
  palette: {
    background: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#DC143C',
    },
    primary: {
      main: '#DC143C',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#FFFFFF',
    },
  },
})

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <IdContext.Provider value={{uuid: uuid}}>
        <Home/>
      </IdContext.Provider>
    </ThemeProvider>   
  );
}
