import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { comment, authorId, time, postId, authorUsername } = await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: authorId },
            select: { id: true, username: true, comments: true },
        });

        const post = await prisma.posts.findFirst({
            where: { id: authorId },
            select: { id: true },
        });

        const newComment = await prisma.comments.create({
            data: {
                comment,
                authorUsername,
                author: { connect: { id: user?.id } },
                time,
                post: { connect: { id: postId } },
            },
        });

        if (user && post) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { comments: { connect: { id: newComment.id } } },
                });
                await prisma.posts.update({
                    where: { id: user.id },
                    data: { comments: { connect: { id: newComment.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO POST COMMENT");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newComment }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
