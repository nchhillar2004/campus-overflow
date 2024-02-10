import prisma from "@/prisma";
import { connectDB } from "@/helpers/server-helper";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (request: any) => {
    try {
        await connectDB();

        const { username } = await request.json();

        if (!username) {
            return new NextResponse("Username not provided", {
                status: 400,
            });
        }

        const user = await prisma.users.findUnique({where: { username: username }});

        if (!user) {
            return new NextResponse(JSON.stringify("User not found"), {
                status: 404,
            });
        }

        return new NextResponse(JSON.stringify(user), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`chle: ${error.message}`, {
            status: 500,
        });
    }finally{
        await prisma.$disconnect();
    }
};
