import express from 'express';
import mongoose from 'mongoose';
import { videosApi } from './routes/videos.routes.js';
import cors from 'cors';

const app = express();

const PORT=5050;

mongoose.connect('mongodb+srv://akshayjosephjimmy05:69Osc0N9POrSaObh@cluster0.ezg4wml.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.use(cors());
app.use(express.json());
videosApi(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//akshayjosephjimmy05
//69Osc0N9POrSaObh
//mongodb+srv://akshayjosephjimmy05:69Osc0N9POrSaObh@cluster0.ezg4wml.mongodb.net/