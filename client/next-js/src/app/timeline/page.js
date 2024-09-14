"use client"

import { ThemeProvider } from "@mui/material"
import WorkPage from "pages/work_page.jsx"
import { theme } from "../theme"

export default function Work () {
    return (
        <ThemeProvider theme={theme}>
            <WorkPage/>
        </ThemeProvider>
    )
}