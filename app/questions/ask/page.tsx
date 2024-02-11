"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { time } from "@/utils/GetTime";
import { Button } from "@/components/ui/button";

const CreatePost = () => {
    const router = useRouter();
    const { data: session }: any = useSession();

    useEffect(() => {
        if (!session) {
            router.replace("/auth/login");
        }
    }, [session, router]);

    const handlePost = async (e: any) => {
        e.preventDefault();
        const title = e.target[0].value;
        const body = e.target[1].value;
        const tags = e.target[2].value;

        if (!title || !body) {
            toast.error("Fill all fields");
        }
        try {
            const authorId = session.user?.id;
            const authorUsername = session.user?.username;

            const res = await fetch("/api/askquestion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    body,
                    authorUsername,
                    authorId,
                    tags,
                    time,
                }),
            });
            if (res.status === 200) {
                toast.success("Posted successfully");
                router.push("/questions");
            }
        } catch (error) {
            console.log("Error in posting question");
        }
    };
    return (
        <>
            {session ? (
                <div className="flex py-4">
                    <div className="card w-full">
                        <form onSubmit={handlePost} className="inputfld">
                            <label htmlFor="title">Question title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Question title"
                            />
                            <label htmlFor="content">Question Content</label>
                            <textarea
                                className="min-h-[150px]"
                                id="content"
                                name="content"
                                placeholder="Expalain your question"
                            />
                            <label htmlFor="tag">Add custom tag</label>
                                <input
                                    type="text"
                                    placeholder="#bhfs"
                                    id="tag"
                                    name="tag"
                                    className="lg:mr-4"
                                />
                            <Button type="submit" variant="blue">Ask</Button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="main">Loggin to ask a question</div>
            )}
        </>
    );
};

export default CreatePost;