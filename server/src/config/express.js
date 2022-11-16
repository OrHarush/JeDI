import express from 'express';
import path from 'path';

const app = express();

const PORT = '3000'

export default () => {
    app.use(express.json());

    app.use(express.static('dist'))

    app.listen(PORT, () => console.log('Server is listening on port 3000'));
};