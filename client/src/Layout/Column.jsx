import { Box } from '@mui/material'


const Column = ({ sx = [], ...props }) =>
    <Box sx={[
        {
            display: 'flex',
            flexDirection: 'column'
        },
        ...sx
    ]} {...props} />

export default Column;