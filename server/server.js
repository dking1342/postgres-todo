import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import pool from './config/pg.js';
import todoRouter from './routes/todoRoutes.js';

// dotenv init
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// routes
app.use('/api/pg',todoRouter);

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));