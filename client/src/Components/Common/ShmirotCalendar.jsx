import React from 'react'
import { Box, Button, MenuItem, Select } from '@mui/material'
import Row from '../Layout/Row';
import Column from '../Layout/Column';
import Text from './Text';
import { useState } from 'react';
import ShmirotButton from './ShmirotButton';
import { useNavigate } from 'react-router-dom';


const ShmirotCalendar = (props) => {
    const navigate = useNavigate();
    const [placeShmirot, setPlaceShmirot] = useState(false);
    const numOfDaysWeek = 7;
    const numOfCalendarRows = 5;

    const getDayOfWeek = (i) => {
        if (i === 0) {
            return "ראשון";
        }
        if (i === 1) {
            return "שני";
        }
        if (i === 2) {
            return "שלישי";
        }
        if (i === 3) {
            return "רביעי";
        }
        if (i === 4) {
            return "חמישי";
        }
        if (i === 5) {
            return "שישי";
        }
        if (i === 6) {
            return "שבת";
        }
    }

    return (
        <Column sx={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Row
                sx={{
                    width: "100%", height: "100%",
                    flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"
                }}>
                <Button variant="contained" onClick={() => navigate("/home")}
                    sx={{
                        width: "40px", height: "40px",
                        backgroundColor: "gray", marginRight: "20px"
                    }}>
                    <Text text={"שלי"} />
                </Button>
                <Text variant="h3" text="לוח שמירות" />
                <Button variant="contained" sx={{ backgroundColor: "gray", marginBottom: "5px" }}
                    onClick={() => setPlaceShmirot(true)}>
                    <Text text={"שבץ"} />
                </Button>

            </Row>

            <Row width="100%">
                {Array.from(Array(numOfDaysWeek)).map((_, i) =>
                    <Text key={i} sx={{
                        width: "calc(100vw/7)", border: "1px solid black", paddingRight: "5px",
                        display: "flex", justifyContent: "center"
                    }} text={getDayOfWeek(i)} />
                )}
            </Row>
            {Array.from(Array(numOfCalendarRows)).map((_, i) =>
                <Row key={i} witdh="100%">
                    {Array.from(Array(numOfDaysWeek)).map((_, j) =>
                        <ShmirotButton key={`${i},${j}`} row={i} col={j} isClicked={placeShmirot} />
                    )}
                </Row>
            )}
        </Column>
    );
}

export default ShmirotCalendar;