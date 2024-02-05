import Users from "@/models/UserSchema";
import connect from "@/db/conn";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const POST = async (request: any) => {
    try {
        await connect();

        const { username } = await request.json();

        if (!username) {
            return new NextResponse("Username not provided", {
                status: 400,
            });
        }

        const user = await Users.findOne({ username });

        if (!user) {
            return new NextResponse(JSON.stringify("User not found"), {
                status: 404,
            });
        }

        return new NextResponse(JSON.stringify(user), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        console.error("Error:", error);
        return new NextResponse(`chle: ${error.message}`, {
            status: 500,
        });
    }
};
