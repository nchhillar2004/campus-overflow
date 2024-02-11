import { connectDB } from "@/helpers/server-helper";
import prisma from "@/prisma";

export const getPostsById = async (id: string | undefined) => {
    try {
        await connectDB();
        const posts = await prisma.posts.findFirst({
            where: { authorId: id },
            select: { id: true, title: true, body: true }
        });

        return posts?.title;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};