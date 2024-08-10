import prisma from "@/prisma";

export const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("DATABASE CONNECTED 🔫");
        
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR ❌");
        
    }
};
