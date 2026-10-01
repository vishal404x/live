const mongoose = require('mongoose')

async function connectDB() {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
        throw new Error("MONGODB_URL is not set. Add it to backend/.env or backend/src/.env.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
}

module.exports = connectDB;
