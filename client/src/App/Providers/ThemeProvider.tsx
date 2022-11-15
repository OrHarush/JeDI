import { createTheme, ThemeProvider } from "@mui/material"
import { ProviderProps } from "../../types";

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

const CustomThemeProvider = ({ children }: ProviderProps) =>
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider >


export default CustomThemeProvider;