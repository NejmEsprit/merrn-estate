import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

mongoose.connect(process.env.MONGO_CLOUD_URL)
  .then(() => {
    console.log('coonect to mongoDB')
  }).catch((err) => {
    console.log(err)
  })

const app = express();
app.listen(3000, () => {
  console.log("server is raunning on port 3000 !!!!!!!");
});
