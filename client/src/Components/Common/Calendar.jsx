import React from 'react'
import { Box, Button, MenuItem, Select } from '@mui/material'
import Row from '../Layout/Row';
import Column from '../Layout/Column';
import CalendarButton from './CalendarButton';
import Text from './Text';
import { useState } from 'react';


const Calendar = (props) => {
    const numOfDaysWeek = 7;
    const numOfCalendarRows = 5;


    const getDayOfWeek = (i) => {
        if (i === 0) {
            return "שבת";
        }
        if (i === 1) {
            return "שישי";
        }
        if (i === 2) {
            return "חמישי";
        }
        if (i === 3) {
            return "רביעי";
        }
        if (i === 4) {
            return "שלישי";
        }
        if (i === 5) {
            return "שני";
        }
        if (i === 6) {
            return "ראשון";
        }
    }

    return (
        <Column sx={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Row width="100%">
                {Array.from(Array(numOfDaysWeek)).map((_, i) =>
                    <Text key={i} sx={{
                        width: "calc(100vw/7)", border: "1px solid black", paddingRight: "5px",
                        display: "flex", justifyContent: "end"
                    }} text={getDayOfWeek(i)} />
                )}
            </Row>

            {Array.from(Array(numOfCalendarRows)).map((_, i) =>
                <Row key={i} witdh="100%">
                    {Array.from(Array(numOfDaysWeek)).map((_, j) =>
                        <CalendarButton key={`${i},${j}`} row={i} col={j} />
                    )}
                </Row>
            )}
        </Column>
    );
}

export default Calendar;