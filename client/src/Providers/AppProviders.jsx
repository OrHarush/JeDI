import LoginProvider from "./LoginProvider"

const AppProviders = ({ children }) =>
        <LoginProvider>
            {children}
        </LoginProvider>

export default AppProviders