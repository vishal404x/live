const express = require("express")
const connectToDB = require("./src/db/db")


const app = express()


connectToDB()
app.listen(3000,()=>{
    console.log("server is running on port 300");
    
})