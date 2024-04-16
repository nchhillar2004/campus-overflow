import { connectDB } from "@/helpers/server-helper";
import prisma from "@/prisma";
import { getPostsById } from "./post";
import { getTagsById } from "./tags";

export const getAccountByUserId = async (id: string | undefined) => {
    try {
        await connectDB();
        const account = await prisma.users.findUnique({
            where: { id: id },
        });

        return account?.username;
    } catch {
        await prisma.$disconnect();
        return null;
    }
};

export const getAccountPostsById = async (id: string) => {
    try {
        await connectDB();
        const user = await prisma.users.findFirst({
            where: { id },
        });
        return getPostsById(user?.id);
    } catch {
        await prisma.$disconnect();
        return null;
    }
};

// export const getAccountTagsById = async (id: string) => {
//     try {
//         await connectDB();
//         const user = await prisma.users.findFirst({
//             where: { id },
//         });

//         return getTagsById(user?.tags);
//     } catch {
//         await prisma.$disconnect();
//         return null;
//     }
// };