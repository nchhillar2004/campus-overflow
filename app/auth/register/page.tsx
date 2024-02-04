"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { time } from "@/utils/GetTime"
import { image } from "@/utils/GetImage";

export default function Register() {
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);

    const isEmailValid = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };
    const isUsernameValid = (username: string) => {
        const usernameRegex =
            /^[a-z][a-z0-9]*(_?[a-z0-9]+)*(\.[a-z0-9]+(_?[a-z0-9]+)*)*$/;
        return usernameRegex.test(username);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const fname = e.target[0].value;
        const lname = e.target[1].value;
        const username = e.target[2].value;
        const email = e.target[3].value;
        const password = e.target[4].value;
        const validUsername = isUsernameValid(username);
        const validEmail = isEmailValid(email);

        if (!fname || !lname || !username || !email || !password) {
            toast.error("Fill all fields");
        } else if (!validUsername) {
            toast.error("Enter valid username");
        } else if (username.length < 3 || username.length > 15) {
            toast.error("Username must be 3 - 15 characters");
        } else if (!validEmail) {
            toast.error("Invalid email");
        } else if (password.length < 8) {
            toast.error("Password must me 8 characters long");
        } else {
            try {
                const name = fname + " " + lname;
                const res = await fetch("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        username,
                        email,
                        time,
                        image,
                        password,
                    }),
                });
                if (res.status === 400) {
                    toast.error("Username already registered");
                }
                if (res.status === 200) {
                    toast.success("Signed up");
                    router.push("/auth/login");
                }
            } catch (error) {
                console.log("Error in sign up");
            }
        }
    };

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="flex justify-center py-5">
                <div className="card lg:w-[40%] text-center dark:bg-slate-900 dark:border-slate-600">
                    <h1 className="text-2xl font-semibold mb-4">Register</h1>
                    <form onSubmit={handleSubmit} className="inputfld">
                        <div className="flex inputfld justify-between items-center">
                            <input
                                type="text"
                                placeholder="First name"
                                id="firstname"
                                name="given-name"
                                className="mr-2"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                id="lastname"
                                name="last-name"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Create a username"
                            name="username"
                            id="username"
                        />
                        <input
                            type="text"
                            placeholder="Email address"
                            name="email"
                            id="email"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Create Password"
                        />
                        <button type="submit" className="custom-button">
                            {" "}
                            Register
                        </button>
                        <hr />
                        <p className="py-2 font-medium">or</p>
                    </form>
                    <Link
                        href="/auth/login"
                        className="block text-center custom-button"
                    >
                        Login
                    </Link>
                </div>
            </div>
        )
    );
}
