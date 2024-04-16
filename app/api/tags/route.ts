import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";

export const POST = async (request: Request) => {
    const { name } = await request.json();

    await connectDB();

    try {

    } catch (err: any) {
        console.log("ERROR: " + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
