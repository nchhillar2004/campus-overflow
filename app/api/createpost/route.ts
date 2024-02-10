import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";

export const POST = async (request: Request) => {
    const { title, body, authorId, tags, time } = await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findUnique({
            where: { username: authorId },
            select: { id: true, username: true, posts: true },
        });

        let tag = await prisma.tags.findFirst({
            where: { name: tags },
            select: { id: true, name: true },
        });

        if (!tag) {
            tag = await prisma.tags.create({
                data: {
                    name: tags,
                },
            });
        }

        const newPost = await prisma.posts.create({
            data: {
                title,
                body,
                author: { connect: { id: user?.id } },
                tags: { connect: { id: tag?.id, name: tag?.name } },
                time,
            },
        });

        if (user) {
            await prisma.users.update({
                where: { id: user.id },
                data: { posts: { connect: { id: newPost.id } } },
            });
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newPost }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
