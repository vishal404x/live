const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect("mongodb+srv://magnesiamania_db_user:ToYfpAogVHYXuK9T@cluster0.bzktxhn.mongodb.net/cohort")
    
    .then(()=>{
        console.log("Connected to DB");
        
    })

}

module.exports = connectToDB