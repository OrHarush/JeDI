import React from 'react'
import { Stack } from '@mui/material'

const Column = (props) => (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} {...props}>
        {props.children}
    </Stack>
)

export default Column;