import React from 'react'
import { Typography } from '@mui/material'

const Text = (props) => {
    return (
        <Typography color="black" {...props}>{props.text}</Typography>
    );
}

export default Text;