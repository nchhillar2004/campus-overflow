import PostSchema from "@/models/PostSchema";
import connect from "@/db/conn";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();

        const posts = await PostSchema.find();

        return new NextResponse(JSON.stringify(posts), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, {
            status: 500,
        });
    }
};
