import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

// Create express application
const app = express();

app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hello World !")
});

const PORT = process.env.PORT || 5000;

// Server is running on port 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})