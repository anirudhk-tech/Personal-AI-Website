"use client"

import { ThemeProvider } from "@mui/material"
import { theme } from "../theme.js"
import ContactPage from "pages/contact_page.jsx"

/*
Main page for contact info
Date Last Edited: 11 September 2024
Author: Anirudh Kuppili
*/

export default function Contact () {
    return (
        <ThemeProvider theme={theme}>
            <ContactPage/>
        </ThemeProvider>
    )
};