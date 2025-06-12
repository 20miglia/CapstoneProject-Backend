import mongoose from "mongoose";
import "dotenv/config";

async function startDatabase() {
    try {
    await mongoose.connect(process.env.MONGO_URI + process.env.DB_DATABASE)
    console.log("MongoDB connected");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default startDatabase;