import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";

export const POST = async (request: Request) => {
    const { title, body, authorUsername, authorId, tags, time } =
        await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: authorId },
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

        const newQuestion = await prisma.questions.create({
            data: {
                title,
                body,
                authorUsername,
                author: { connect: { id: user?.id } },
                tags: { connect: { id: tag?.id } },
                time,
                tagName: tags,
            },
        });

        if (user) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { questions: { connect: { id: newQuestion.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO UPDATE USERS POSTS");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newQuestion }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
