"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { time } from "@/utils/GetTime";
import { Button } from "@/components/ui/button";
import SidebarLayout from "@/components/sidebar-layout";
import { TypographyH1 } from "@/components/typography";

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
        } else {
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
        }
    };
    return (
        <>
            <SidebarLayout selectedOption={"questions"}>
                <div className="container py-4">
                    <TypographyH1 title={"Ask a public question"} />
                    <div className="mt-5 rounded-sm dark:bg-blue-950 bg-blue-400 px-8 py-4">
                        <h2 className="text-2xl">Writing a good question</h2>
                        <p className="my-2">
                            This form might help you ask a good and relevant
                            question
                        </p>

                        <small>
                            <b>Steps</b>
                            <ul className="list-disc list-inside">
                                <li>
                                    Your title should summarize the problem.
                                </li>
                                <li>
                                    Explain your problem well in the content.
                                    Minimum 40 Characters.
                                </li>
                                <li>
                                    Include tags to describe what your question
                                    is about.
                                </li>
                                <li>
                                    Write text inside Asterisk(*) to make it
                                    bold.
                                </li>
                                <li>
                                    Write code inside tipple back-quote or
                                    backtick( ` ).
                                </li>
                            </ul>
                        </small>
                    </div>
                    <div className="w-full mt-4">
                        <form onSubmit={handlePost} className="inputfld">
                            <div className="bg-[var(--info-bg)] px-4 py-2 rounded-sm mb-2">
                                <label htmlFor="title">Question title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Question title"
                                    className="mt-2"
                                />
                            </div>

                            <div className="bg-[var(--info-bg)] px-4 py-2 rounded-sm mb-2">
                                <label htmlFor="content">
                                    Question Content
                                </label>
                                <textarea
                                    className="min-h-[150px] mt-2"
                                    id="content"
                                    name="content"
                                    placeholder="Explain your question"
                                />
                            </div>
                            <div className="bg-[var(--info-bg)] px-4 py-2 rounded-sm mb-2">
                                <label htmlFor="tag">Add custom tag</label>
                                <input
                                    type="text"
                                    placeholder="#campusOverflow"
                                    id="tag"
                                    name="tag"
                                    className="lg:mr-4 mt-2"
                                />
                            </div>
                            <Button type="submit" size="lg" variant="blue">
                                Ask
                            </Button>
                        </form>
                    </div>
                </div>
            </SidebarLayout>
        </>
    );
};

export default CreatePost;
