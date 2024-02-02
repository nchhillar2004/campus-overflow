"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.replace("/");
        }
    }, [session, router]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;

        if (!username || !password) {
            toast.error("Fill all fields");
        } else if (password.length < 8) {
            toast.error("Wrong password");
        } else {
            try {
                const res = await signIn("credentials", {
                    redirect: false,
                    username,
                    password,
                });

                if (res?.error) {
                    toast.error("Invalid username or password.");
                    if (res?.url) router.replace("/");
                } else {
                    console.log("");
                }
            } catch (error) {}
        }
    };

    return (
        <div className="flex justify-center">
            <div className="card bg-gray-100 rounded border border-gray-200 p-4 lg:w-[40%] text-center">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="inputfld">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        id="username"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        {" "}
                        Login
                    </button>
                    <hr />
                    <p className="py-2 font-medium">or</p>
                </form>

                <Link
                    href="/auth/register"
                    className="block text-center w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Register
                </Link>
            </div>
        </div>
    );
}
