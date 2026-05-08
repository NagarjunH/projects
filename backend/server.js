import express from 'express';

// Create express application
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World !")
});


// Server is running on port 5000
app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})