import prisma from "@/prisma";
import { connectDB } from "@/helpers/server-helper";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: any) => {
    try {
        await connectDB();

        const users = await prisma.users.findMany({
            include: { posts: true },
        });

        return new NextResponse(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
