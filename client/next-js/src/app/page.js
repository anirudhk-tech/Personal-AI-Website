"use client"

/*
Main page that contains all the pages of the website
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";
import AboutPage from "pages/about_page.jsx";


export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <AboutPage/>
    </ThemeProvider>   
  );
}
