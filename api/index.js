import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config()

mongoose.connect(process.env.MANGO).then(()=>{
    console.log('database is connected')
}).catch((error)=>{
    console.log(error.message)
})
const app=express();


app.listen(3000,()=>{
    console.log("Server is runing on port 3000!")
});

app.use('/api/user',userRoutes);