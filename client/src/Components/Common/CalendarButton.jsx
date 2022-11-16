import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Row from '../Layout/Row';
import Column from '../Layout/Column';
import Text from './Text';
import Toranot from './Toranot';
import { shmirot } from './Shmirot';

const CalendarButton = (props) => {
    let shomer = false;
    let shomerMefaked = false;
    let date = (props.row) * 7 + (7 - props.col);
    
    if (date > 31) {
        date = 0;
    }

    if (date === 3 || date === 16 || date === 17) {
        shomer = true;
    }
    if (date === 13 || date === 25) {
        shomerMefaked = true;
    }
    
    return (
        <Button variant="contained" key={`${props.row}, ${props.col}`}
            sx={{
                '&:hover': {
                    backgroundColor: '#c5c5c5',
                    color: '#3c52b2'
                },
                width: 'calc(100vw/7)', justifyContent: "end", alignItems: "start",
                height: "calc((100vh - 60px)/6)", borderRadius: "0", backgroundColor: "white"
            }}>
            {date !== 0 &&
                <Column justifyContent="start" alignItems="end">
                    <Text text={date} />
                    {shomer && <Toranot text="תורנות" backgroundColor="#5ac95a" />}
                    {shomerMefaked && <Toranot text="מפקד שמירה" backgroundColor="#e34c4c" />}
                </Column>}
        </Button>



    );
}

export default CalendarButton;