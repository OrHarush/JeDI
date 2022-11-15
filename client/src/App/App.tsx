import React from "react";
import { Outlet } from "react-router-dom";
import AppProviders from "../Providers/AppProviders";
import { StyledEngineProvider } from "@mui/material/styles";

const App = () => (
    <StyledEngineProvider injectFirst>
        <AppProviders >
            <Outlet />
        </AppProviders>
    </StyledEngineProvider>
    );

export default App;