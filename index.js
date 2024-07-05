import express from 'express';
import router from './routes/route.js';
import Connection from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
Connection();
app.use(express.json())
app.use('/', router);


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));