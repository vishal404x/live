const express = require("express")
const connectToDB = require("./src/db/db")
const noteModel = require("./src/models/note.model")

const app = express()
app.use(express.json())

app.post('/notes',async (req,res)=>{
    const{title,content} =req.body
    console.log(title,content);

    await noteModel.create({
        title,content
    })
    res.json({
        message:"Note Created Successfully"
    })
    
})


// connectToDB()
app.listen(3000,()=>{
    console.log("server is running on port 300");
    
})