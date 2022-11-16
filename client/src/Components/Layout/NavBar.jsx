import { Button } from "@mui/material";
import React from "react";
import Row from './Row';
import { useLoginContext } from "../../Providers/LoginProvider";
import { useNavigate } from "react-router-dom";
import Text from "../Common/Text";

const NavBar = () => {
    const { isLogged } = useLoginContext();
    const navigate = useNavigate();

    const navigateToNewChore = () => {
        navigate("/newDuty");
    }   

    return (
        <Row sx={{
            width: "100%", height: "60px", backgroundColor: "#48546c",
            flexDirection: "row", alignItems: "center", justifyContent: "space-between"
        }}>
            <Row>
                {isLogged && <Button sx={{ width: "100px", height: "30px", color: "white" }} 
                onClick={() => navigate("/home")}>בית</Button>}
                {isLogged && <Button sx={{ width: "100px", height: "30px", color: "white" }} >משתמשים</Button>}
                {isLogged && <Button sx={{ width: "100px", height: "30px", color: "white" }}
                    onClick={navigateToNewChore}>צור תורנות</Button>}
            </Row>

            {isLogged && <Text sx={{ marginRight: "15px" }} color="white" text="שלום, אור אביטבול" />}
        </Row>
    );
}

export default NavBar;