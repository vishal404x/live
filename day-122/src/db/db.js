const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

function connectToDB() {
    mongoose.connect("mongodb+srv://magnesiamania_db_user:ToYfpAogVHYXuK9T@cluster0.bzktxhn.mongodb.net/this")
    
    .then(()=>{
        console.log("Connected to DB");
        
    })

}

module.exports = connectToDB