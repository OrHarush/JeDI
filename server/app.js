import 'dotenv/config'
import app from './src/config/express';
import connectMongoose from './src/config/mongoose';

connectMongoose()
    .then(app)