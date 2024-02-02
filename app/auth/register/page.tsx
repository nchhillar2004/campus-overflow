"use client";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

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
                const full_name = fname + " " + lname;
                
                const res = await fetch("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                        full_name,
                        username,
                        email,
                        password
                    })
                })
                if (res.status === 400){
                    toast.error("Username already registered");
                }
                if (res.status === 200){
                    toast.success("Signed up");
                    router.push('/auth/login');
                }
            } catch (error) {
                console.log("Error in sign up");
                
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First name"
                        id="firstname"
                        name="given-name"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        id="lastname"
                        name="last-name"
                    />
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        id="username"
                    />
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        id="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button type="submit">Register</button>
                    <hr />
                    <p>or</p>
                </form>
            </div>
            <Link href="/auth/login">Login</Link>
        </div>
    );
}
