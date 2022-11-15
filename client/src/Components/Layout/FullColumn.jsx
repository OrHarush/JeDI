import Column from "./Column"


export const FullColumn = ({ sx = [], ...props }) =>
    <Column sx={[{ height: '100%' }, ...sx]} {...props} />