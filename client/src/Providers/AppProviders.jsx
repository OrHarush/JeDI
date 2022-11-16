import LoginProvider from "./LoginProvider"
import CustomThemeProvider from "./ThemeProvider";

const AppProviders = ({ children }) =>
    <CustomThemeProvider>
        <LoginProvider>
            {children}
        </LoginProvider>
    </CustomThemeProvider>

export default AppProviders