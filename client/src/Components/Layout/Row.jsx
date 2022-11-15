import { Box } from "@mui/material";

const Row = ({ sx = [], ...props }) =>
    <Box sx={[{ display: 'flex' }, ...sx]} {...props} />

export default Row;