import mongoose from "mongoose";

export async function connect() {
    try {
        // Get MongoDB URI from environment variables
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("❌ MONGO_URI is not defined. Please check your environment variables.");
        }

        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        const connection = mongoose.connection

        // MongoDB Connection Event Handlers
        connection.on("connected", () => {
            console.log("MongoDB connected Successfully");
            
        })

        connection.on("error", (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running. ", err);
            process.exit(1);
            
        })
    } catch (error) {
        console.error("Something goes wrong");
        process.exit(1);
        
        
    }
}