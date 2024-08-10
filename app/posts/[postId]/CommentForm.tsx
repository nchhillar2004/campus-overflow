"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { time } from "@/utils/GetTime";
import { TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";

interface ParamsProps {
    id: string;
}

export default function CommentForm({ id }: ParamsProps) {
    const { data: session }: any = useSession();
    const router = useRouter();

    const handlePost = async (e: any) => {
        e.preventDefault();
        const comment = e.target[0].value;

        if (!comment) {
            toast.error("Comment cannot be empty.");
        } else {
            try {
                const authorId = session.user?.id;
                const authorUsername = session.user?.username;
                const postId = id;

                const res = await fetch("/api/postcomment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        comment,
                        authorUsername,
                        authorId,
                        time,
                        postId,
                    }),
                });
                if (res.status === 200) {
                    toast.success("Commented successfully");
                    router.refresh();
                }
            } catch (error) {
                console.log("Error in posting comment");
            }
        }
    };
    return (
        <section>
            <div className="py-4">
                <TypographyH2 title={"Write a comment"} />
                <div className="mt-5 rounded-sm dark:bg-blue-950 bg-blue-400 px-8 py-4">
                    <h2 className="text-2xl">Writing a good comment</h2>
                    <small>
                        <b>Rules</b>
                        <ul className="list-disc list-inside">
                            <li>
                                Do NOT post abusive words, hate speech, racism
                                or any propaganda.
                            </li>
                        </ul>
                    </small>
                </div>
                <div className="w-full mt-4">
                    <form onSubmit={handlePost} className="inputfld">
                        <div className="bg-[var(--custom-grey)] px-4 py-2 rounded-sm mb-2">
                            <label htmlFor="content">Comment</label>
                            <textarea
                                className="min-h-[100px] mt-2"
                                id="content"
                                name="content"
                                placeholder="Write your comment/ reply"
                            />
                        </div>
                        {session ? (
                            <Button type="submit" size="lg" variant="blue">
                                Comment
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                size="lg"
                                variant="blue"
                                disabled
                            >
                                Login to Comment
                            </Button>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
