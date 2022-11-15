import Row from "./Row";

const FullRow = ({ sx = [], ...props }) =>
    <Row sx={[{ width: '100%' }, ...sx]} {...props} />

export default FullRow;