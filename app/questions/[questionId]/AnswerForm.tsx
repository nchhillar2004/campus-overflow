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

export default function AnswerForm({ id }: ParamsProps) {
    const { data: session }: any = useSession();
    const router = useRouter();

    const handlePost = async (e: any) => {
        e.preventDefault();
        const answer = e.target[0].value;

        if (!answer) {
            toast.error("Answer cannot be empty.");
        } else {
            try {
                const authorId = session.user?.id;
                const authorUsername = session.user?.username;
                const questionId = id;

                const res = await fetch("/api/giveanswer", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        answer,
                        authorUsername,
                        authorId,
                        time,
                        questionId,
                    }),
                });
                if (res.status === 200) {
                    toast.success("Posted successfully");
                    router.refresh();
                }
            } catch (error) {
                console.log("Error in posting answer");
            }
        }
    };
    return (
        <section>
            <div className="py-4">
                <TypographyH2 title={"Give your answer"} />
                <div className="mt-5 rounded-sm dark:bg-blue-950 bg-blue-400 px-8 py-4">
                    <h2 className="text-2xl">Writing a good answer</h2>
                    <p className="my-2">
                        This form might help you give a good and relevant answer
                    </p>

                    <small>
                        <b>Steps</b>
                        <ul className="list-disc list-inside">
                            <li>Do NOT spam or give incorrect answer.</li>
                            <li>
                                Explain your answer well so others user can
                                understand and get correct knowledge.
                            </li>
                            <li>
                                Write text inside Asterisk(*) to make it bold.
                            </li>
                            <li>
                                Write code inside tipple back-quote or backtick(
                                ` ).
                            </li>
                        </ul>
                    </small>
                </div>
                <div className="w-full mt-4">
                    <form onSubmit={handlePost} className="inputfld">
                        <div className="bg-[var(--custom-grey)] px-4 py-2 rounded-sm mb-2">
                            <label htmlFor="content">Answer</label>
                            <textarea
                                className="min-h-[250px] mt-2"
                                id="content"
                                name="content"
                                placeholder="Write your answer"
                            />
                        </div>
                        {session ? (
                            <Button type="submit" size="lg" variant="blue">
                                Answer
                            </Button>
                        ) : (
                            <Button type="submit" size="lg" variant="blue" disabled>
                                Login to Answer
                            </Button>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
