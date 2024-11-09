const express=require("express");
const mongoose= require("mongoose");
const app=express();
const router = require("./routes/router");

var cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

const url="mongodb+srv://rohit2002:5g:r-gkT:XnB5MT@cluster0.ii1e2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});
app.listen(5000);
