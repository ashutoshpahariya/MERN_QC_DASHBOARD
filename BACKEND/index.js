//--agar humko package react ki trah node main use krne hai to
//---package.json main "type":"module" likhna hoga
// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

const express=require("express")
const cors=require('cors')
const mongoose=require("mongoose")
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const route=require("./route/route")

app.use("/",route)
mongoose.connect(
  "mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/ashutoshpahariya_db?authSource=admin&replicaSet=atlas-e7145j-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("NO SQL DB connected");
  }
);

app.listen(9002, () => {
  console.log("BE started at port 9002");
});


