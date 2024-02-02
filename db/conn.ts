import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connect = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(URI ?? "");
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to mongodb");
    }
};

export default connect;
