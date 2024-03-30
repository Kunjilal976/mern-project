import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();
// mongoose.connect("mongodb+srv://kunjilal976:meena@976@mern-project.urlr4z2.mongodb.net/?retryWrites=true&w=majority&appName=mern-project")
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    console.log(err);
});

const app=express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter)
