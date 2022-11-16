import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Column from "./Column";
import { Typography } from "@mui/material";

const PageLayout = (props) => {
    return (
        <Column height="100vh" width="100vw">
            <NavBar/>
            {props.children}
            <Outlet/>
        </Column>

        // <Column height="100vh">
        //     {/* <NavBar /> */}
        //     {/* <Outlet /> */}
        // </Column>
    );
}

export default PageLayout;