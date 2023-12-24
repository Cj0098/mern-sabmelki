import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
import userRouter from "./routes/user.route.js"


mongoose.connect(process.env.MONGO).then(()=>{
  console.log('Connected To MongodDB');
}).catch((err)=> {
  console.log(err);
})


const app = express();


app.listen(3000, ()=>{
    console.log("runninasdasdg");


    
});

app.use('/api/user', userRouter);