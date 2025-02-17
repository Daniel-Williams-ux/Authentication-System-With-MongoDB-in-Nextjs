import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI!) //! becos of typescript
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("MongoDB connected Successfully");
            
        })

        connection.on("error", (err) => {
            console.log("MongoDB connection error. Pleasemake sure MongoDB is running. ", err);
            process.exit(1);
            
        })
    } catch (error) {
        console.log("Something goes wrong");
        console.log(error);
        
        
    }
}