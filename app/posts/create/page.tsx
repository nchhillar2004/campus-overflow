"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { time } from "@/utils/GetTime";

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
        const content = e.target[1].value;
        const tag = e.target[2].value || "bhfs";

        if (!title || !content) {
            toast.error("Fill all fields");
        }
        try {
            const author: string = session.user?.username;

            const res = await fetch("/api/createpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content,
                    author,
                    tag,
                    time,
                }),
            });
            if (res.status === 200) {
                toast.success("Posted successfully");
                router.push("/posts");
            }
        } catch (error) {
            console.log("Error in posting");
        }
    };
    return (
        <>
            {session ? (
                <div className="flex py-4">
                    <div className="card dark:bg-slate-900 dark:border-slate-600 w-full">
                        <form onSubmit={handlePost} className="inputfld">
                            <label htmlFor="title">Post title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Post title"
                            />
                            <label htmlFor="content">Post Content</label>
                            <textarea
                                className="min-h-[150px]"
                                id="content"
                                name="content"
                                placeholder="Content..."
                            />
                            <label htmlFor="tag1">Add custom tag</label>
                                <input
                                    type="text"
                                    placeholder="#bhfs"
                                    id="tag"
                                    name="tag"
                                    className="lg:mr-4"
                                />
                            <button type="submit" className="custom-button">
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="main">Loggin to create a post</div>
            )}
        </>
    );
};

export default CreatePost;