import React from 'react'
import { Typography } from '@mui/material'

const Toranot = (props) => {

    return (
        <Typography color="white"
            sx={{ backgroundColor: props.backgroundColor, width: "90px", border: "1px black solid", borderRadius: "5px" }}
            {...props}>{props.text}</Typography>
    );
}

export default Toranot;