import Posts from "@/models/PostSchema";
import connect from "@/db/conn";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const { title, content, author } = await request.json();

    await connect();

    const newPost = new Posts({
        title,
        content,
        author,
    });

    try {
        await newPost.save();
        return new NextResponse("Posted", { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);
        
        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    }
};
