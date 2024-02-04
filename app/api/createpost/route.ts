import Posts from "@/models/PostSchema";
import connect from "@/db/conn";
import { NextResponse } from "next/server";
import Users from "@/models/UserSchema";

export const POST = async (request: any) => {
    const { title, content, author, tag, time, likes } = await request.json();

    await connect();

    const newPost = new Posts({
        title,
        content,
        author,
        tag,
        time,
        likes,
    });

    try {
        const user = await Users.findOne({ username: author });

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        await newPost.save();

        user.posts.push(newPost.username);
        await user.save();

        return new NextResponse("Posted", { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);
        
        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    }
};
