import Users from "@/models/UserSchema";
import connect from "@/db/conn";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    const { name, username, email, password, time, image } = await request.json();

    await connect();

    const existingUser = await Users.findOne({ username });

    if (existingUser) {
        return new NextResponse("Username already in us", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 6);
    const newUser = new Users({
        name,
        username,
        email,
        time,
        image,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("User is registered", { status: 200 });
    } catch (err: any) {
        return new NextResponse("error yaha h"+err, {
            status: 500,
        });
    }
};
