import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'

dotenv.config()

mongoose.connect(process.env.MONGO_CLOUD_URL)
  .then(() => {
    console.log('coonect to mongoDB')
  }).catch((err) => {
    console.log(err)
  })

const app = express();
app.use(express.json())
app.listen(3000, () => {
  console.log("server is raunning on port 3000 !!!!!!!");
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

