import {Pool} from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    
})