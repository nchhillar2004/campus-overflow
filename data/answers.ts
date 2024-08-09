import { connectDB } from "@/helpers/server-helper";
import prisma from "@/prisma";

export const getAnswersById = async (id: string) => {
    try {
        await connectDB();
        const answer = await prisma.answers.findUnique({
            where: { id: id },
        });

        return answer;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};