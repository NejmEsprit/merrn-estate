import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
import cookieParser from "cookie-parser";

dotenv.config()

mongoose.connect(process.env.MONGO_CLOUD_URL)
  .then(() => {
    console.log('connect to mongoDB')
  }).catch((err) => {
    console.log(err)
  })

const app = express();
app.use(express.json())
app.use(cookieParser())
app.listen(3000, () => {
  console.log("server is raunning on port 3000 !!!!!!!");
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

