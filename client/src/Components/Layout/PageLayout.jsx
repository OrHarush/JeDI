import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Column from "./Column";

const PageLayout = (props) => {
    return (
        <Column height="100vh" width="100vw">
            <NavBar/>
            {props.children}
            <Outlet/>
        </Column>
    );
}

export default PageLayout;