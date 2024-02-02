"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

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

        if (!title || !content) {
            toast.error("Fill all fields");
        }
        try {
            const author :string = session.user?.email;
            
            const res = await fetch("/api/createpost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content,
                    author,
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
            <div className="flex">
                <div className="card w-full">
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
                        <label htmlFor="tags">Add tags</label>
                        <div className="flex flex-col inputfld lg:flex-row justify-between">
                            <input type="text" placeholder="#tag1" id="tags" name="tags" className="lg:mr-4"/>
                            <input type="text" placeholder="#tag2" className="lg:mr-4"/>
                            <input type="text" placeholder="#tag3"/>
                        </div>
                        <button type="submit" className="custom-button">
                            Post
                        </button>
                    </form>
                </div>
            </div>
            ): (<div className="main">Loggin to create a post</div>)}
        </>
    );
};

export default CreatePost;
