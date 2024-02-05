"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";

export default function Login() {
    const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

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
                    console.log(res?.error);
                }
            } catch (error) {}
        }
    };

    if (sessionStatus === "loading") {
        return <Loading />;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="container">
                <div className="flex justify-center">
                    <div className="card lg:w-[40%] text-center">
                        <TypographyH1 title="Login" />
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
                            <Button type="submit" variant="blue">
                                Login
                            </Button>
                            <hr />
                            <p className="py-2 font-medium">or</p>
                        </form>

                        <Button variant="blue" asChild>
                            <Link href="/auth/register">Register</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
}
