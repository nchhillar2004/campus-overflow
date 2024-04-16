import { connectDB } from "@/helpers/server-helper";
import prisma from "@/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    await connectDB();
    const user = await prisma.users.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectDB();
    const user = await prisma.users.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};