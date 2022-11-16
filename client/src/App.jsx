import React from "react";
import PageLayout from "./Components/Layout/PageLayout";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ShmirotCalendar from "./Components/Common/ShmirotCalendar";
import AppProviders from "./Providers/AppProviders";

const App = () => {
    return (
        <AppProviders>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />} >
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/shmirot" element={<ShmirotCalendar />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppProviders>
    );
}

export default App;