import prisma from "@/prisma";

export const connectDB = async () => {
    try {
        await prisma.$connect();
        
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR ❌");
        
    }
};
