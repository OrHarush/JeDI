import React from "react";
import CustomThemeProvider from "./ThemeProvider";


const AppProviders = ({ children }: any) =>
        <CustomThemeProvider>
            {children}
        </CustomThemeProvider>

export default AppProviders