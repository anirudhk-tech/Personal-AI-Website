import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
      background: '#FFFFFF',
      secondary: {
        main: '#000000',
      },
      text: {
        primary: '#DC143C',
        secondary: '#000000',
      },
      primary: {
        main: '#DC143C',
        contrastText: '#FFFFFF'
      },
    },
  });