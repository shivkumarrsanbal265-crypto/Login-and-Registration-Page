import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/",(req, res)=>{
    res.send("hello")
})

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("server running");
})