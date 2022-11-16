import { createTheme, ThemeProvider } from "@mui/material"
import React from "react";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0493d0',
        },
        secondary: {
            main: '#ea7f21',
        },
    },
    typography: {
        fontFamily: 'Roboto'
    }
})

const CustomThemeProvider = ({ children }) =>
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider>


export default CustomThemeProvider;