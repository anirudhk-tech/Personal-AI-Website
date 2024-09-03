"use client"

import { createTheme, ThemeProvider } from "@mui/material";
import Home from "../../pages/home";

const theme = createTheme({
  palette: {
    background: '#000000',
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
      <Home/>
    </ThemeProvider>   
  );
}
