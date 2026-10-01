const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config();
if (!process.env.MONGODB_URL) {
    dotenv.config({ path: path.join(__dirname, 'src', '.env') });
}

const app = require('./src/app');
const connectDB = require('./src/db/db.js')

async function startServer() {
    await connectDB();

    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
}

startServer().catch((err) => {
    console.error("Failed to start server:", err.message);
    process.exitCode = 1;
});
