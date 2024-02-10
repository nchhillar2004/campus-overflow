import prisma from "@/prisma/index";
import { NextResponse } from "next/server";
import { connectDB } from "@/helpers/server-helper";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export const POST = async (request: Request, res: Response) => {
    const { name, username, email, password, time, image } =
        await request.json();
        
    await connectDB();

    const existingUser = await prisma.users.findUnique({
        where: { username: username },
        select: { username: true }
    })

    if (existingUser) {
        return new NextResponse("Username already in us", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    
    try {
        const newUser = await prisma.users.create({
            data: {
                name,
                username,
                email,
                time,
                image,
                password: hashedPassword,
            },
        });
        return new NextResponse("User created", { status: 200 });
    } catch (error) {
        console.log(error);
        
        return NextResponse.json(
            { error },
            {
                status: 500,
            }
        );
    } finally {
        await prisma.$disconnect();
    }
};
