import Users from "@/models/UserSchema";
import connect from "@/db/conn";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
    try {
        await connect();

        const users = await Users.find();

        return new NextResponse(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`Internal Server Error: ${error.message}`, {
            status: 500,
        });
    }
};