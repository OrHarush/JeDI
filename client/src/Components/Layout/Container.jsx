import FullRow from './FullRow';


const Container = ({ sx = [], ...props }) =>
    <FullRow
        sx={[{ height: '100%' }, ...sx]}
        {...props} />

export default Container;