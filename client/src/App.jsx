import React from "react";
import PageLayout from "./Components/Layout/PageLayout";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import ShmirotCalendar from "./Components/Common/ShmirotCalendar";

const App = () => {
    console.log("here");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />} >
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/shmirot" element={<ShmirotCalendar />} />
                </Route>
            </Routes>
        </BrowserRouter>

        // <PageLayout>
        //     <Home />
        // </PageLayout>
        // <Column>
        //     <h1>hello world</h1>
        //     <h1>hello world</h1>
        //     <h1>hello world</h1>
        // </Column>
        // <JeDIRoutes/>
    );
}

export default App;