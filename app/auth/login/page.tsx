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
        if(session?.status === "authenticated") {
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

                if(res?.error){
                    toast.error("Invalid username or password.");
                    if (res?.url) router.replace("/");
                }else{
                    console.log("");
                    
                }
            } catch (error) {
                
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" id="username" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <button type="submit"> Login</button>
                    <hr />
                    <p>or</p>
                </form>
            </div>
            <Link href="/auth/register">Register</Link>
        </div>
    );
}
