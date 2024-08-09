import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";

export const dynamic = "force-dynamic";

export const POST = async (request: Request) => {
    const { answer, authorUsername, authorId, time, questionId } =
        await request.json();

    await connectDB();

    try {
        const user = await prisma.users.findFirst({
            where: { id: authorId },
            select: { id: true, username: true, answers: true },
        });

        const question = await prisma.questions.findFirst({
            where: { id: authorId },
            select: { id: true, title: true },
        });

        const newAnswer = await prisma.answers.create({
            data: {
                answer,
                authorUsername,
                author: { connect: { id: user?.id } },
                time,
                question: {connect: {id: questionId}},
                
            },
        });

        if (user && question) {
            try {
                await prisma.users.update({
                    where: { id: user.id },
                    data: { questions: { connect: { id: newAnswer.id } } },
                });
                await prisma.questions.update({
                    where: { id: user.id },
                    data: { answers: { connect: { id: newAnswer.id } } },
                });
            } catch (error) {
                console.log("UNABLE TO POST ANSWER");
            }
        }
        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }
        return NextResponse.json({ newAnswer }, { status: 200 });
    } catch (err: any) {
        console.log("chle" + err);

        return new NextResponse("error yaha h " + err, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
};
