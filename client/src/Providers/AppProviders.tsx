import { ProviderProps } from "../../types";
import GameProvider from "./GameProvider";
import CustomThemeProvider from "./ThemeProvider";

const AppProviders = ({ children }: ProviderProps) =>
    <CustomThemeProvider>
        <GameProvider>
            {children}
        </GameProvider>
    </CustomThemeProvider>

export default AppProviders