import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

// set up body parser to send requests, 30mb limit for images
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());
// need to have above app.use routes

app.use('/posts', postRoutes);

// greeting route
app.get('/', (req, res) => {
    res.send('Hello, welcome to social media app API')
});

//set the strictQuery option to true globally to suppress the warning
mongoose.set('strictQuery', true);

// DB Connection
const PORT = process.env.PORT|| 4000;
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

