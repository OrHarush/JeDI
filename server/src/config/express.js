import express from 'express';
import path from 'path';

const app = express();

const PORT = '3000'

export default () => {
    app.use(express.json());

    process.env.NODE_ENV === 'production' && app.use(express.static(path.resolve(__dirname, 'dist')))

    app.listen(PORT, () => console.log('Server is listening on port 3000'));
};