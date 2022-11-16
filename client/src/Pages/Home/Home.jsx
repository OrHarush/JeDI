import { Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../Components/Common/Calendar";
import Text from "../../Components/Common/Text";
import Column from "../../Components/Layout/Column";
import Row from "../../Components/Layout/Row";

const Home = () => {
    const [filterValue, setFilterValue] = useState("פלטר");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setFilterValue(event.target.value);
    };

    useEffect(() => {
        if(filterValue === "שמירות") {
            navigate("/shmirot")
        }
    }, [filterValue])

    return (
        <Column height="100%" width="100%">
            <Row
                sx={{
                    width: "100%", height: "100%",
                    flexDirection: "row", justifyContent: "end", alignItems: "center"
                }}>
                <Select
                    labelId="filter"
                    id="filter"
                    value={filterValue}
                    label="Filter"
                    onChange={handleChange} sx={{ marginRight: "20px" }}>
                    <MenuItem value="שמירות">שמירות</MenuItem>
                    <MenuItem value="תורנויות">תורנויות</MenuItem>
                    <MenuItem value="קבלנים">קבלנים</MenuItem>
                </Select>
                <Button variant="contained"
                    sx={{
                        width: "40px", height: "40px",
                        backgroundColor: "gray", marginRight: "20px"
                    }}>
                    <Text text={"כולם"} />
                </Button>
                <Button variant="contained"
                    sx={{
                        width: "40px", height: "40px",
                        backgroundColor: "gray", marginRight: "20px"
                    }}>
                    <Text text={"שלי"} />
                </Button>
            </Row>

            <Calendar />
        </Column>
    );
}

export default Home;