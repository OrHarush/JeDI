import React from 'react'
import { Stack } from '@mui/material'

const Row = (props) => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'row', ...props.sx}} {...props}>
            {props.children}
        </Stack>
    );
}

export default Row;