import express from 'express';

const app = express();

const PORT = process.env.PORT

export default () => {
    app.use(express.json());

    app.listen(PORT, () => console.log('Server is listening on port 3000'));
};