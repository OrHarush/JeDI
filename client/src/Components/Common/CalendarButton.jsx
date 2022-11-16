import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Column from '../Layout/Column';
import Text from './Text';
import Toranot from './Toranot';

const CalendarButton = (props) => {
    let shomer = false;
    let shomerMefaked = false;
    let mashov = false;
    let date = (props.row) * 7 + (1+props.col);
    
    if (date > 31) {
        date = 0;
    }

    if (date === 3 || date === 16 || date === 17) {
        shomer = true;
    }
    if (date === 13 || date === 25) {
        shomerMefaked = true;
    }
    if (date === 28  || date === 27 || date === 11) {
        mashov = true;
    }
    
    return (
        <Button variant="contained" key={`${props.row}, ${props.col}`}
            sx={{
                '&:hover': {
                    backgroundColor: '#c5c5c5',
                    color: '#3c52b2'
                },
                width: 'calc(100vw/7)', alignItems: "start", justifyContent: "start",
                height: "calc((100vh - 60px)/6)", borderRadius: "0", backgroundColor: "white"
            }}>
            {date !== 0 &&
                <Column sx={{display: "flex", alignItems: "start", justifyContent: "start" }}>
                    <Text text={date} />
                    {shomer && <Toranot text="תורנות ניקיון" backgroundColor="#5ac95a" />}
                    {shomerMefaked && <Toranot text="שמירה" backgroundColor="#e34c4c" />}
                    {mashov && <Toranot text="איוש משוב" backgroundColor="#4f57e9" />}
                </Column>}
        </Button>



    );
}

export default CalendarButton;