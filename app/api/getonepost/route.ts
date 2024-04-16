import prisma from "@/prisma";
import { connectDB } from "@/helpers/server-helper";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (request: any) => {
    try {
        await connectDB();

        const { postId } = await request.json();

        if (!postId) {
            return new NextResponse("Username not provided", {
                status: 400,
            });
        }

        const post = await prisma.posts.findUnique({
            where: { id: postId },
            include: { tags: true, author: true },
        });

        if (!post) {
            return new NextResponse(JSON.stringify("post not found"), {
                status: 404,
            });
        }

        return new NextResponse(JSON.stringify(post), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`chle: ${error.message}`, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
