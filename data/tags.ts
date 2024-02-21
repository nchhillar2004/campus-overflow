import { connectDB } from "@/helpers/server-helper";
import prisma from "@/prisma";

export const getTagsById = async (id: string | undefined ) => {
    try {
        await connectDB();
        const tags = await prisma.tags.findFirst({
            where: { id },
        });

        return tags;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};