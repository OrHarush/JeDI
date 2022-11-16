import { Button } from "@mui/material";
import React from "react";
import Row from './Row';
import { useLoginContext } from "../../Providers/LoginProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const {isLogged} = useLoginContext();
    const navigate = useNavigate();
    console.log('is logged ' + isLogged);

    const navigateToNewChore = () => {
        navigate("/newCalendar");
    }

    return (
        <Row sx={{
            width: "100%", height: "60px", backgroundColor: "#48546c",
            flexDirection: "row", justifyContent: "end", alignItems: "center"
        }}>
            {isLogged && <Button sx={{ width: "100px", height: "30px", color: "white" }} 
            onClick={navigateToNewChore}>צור תורנות</Button>}
            {isLogged && <Button sx={{ width: "100px", height: "30px", color: "white" }} >משתמשים</Button>}
        </Row>
    );
}

export default NavBar;