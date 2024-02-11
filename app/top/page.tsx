import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import { Loading } from "@/components/loading";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

interface Question {
    title: String;
    id: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    authorUsername: String;
    tagIDs: String[];
}

export default async function Questions() {
    const res = await fetch(`${SiteConfig.url}/api/getquestions`, {
        cache: "no-store",
    });
    const questions: Question[] = await res.json();

    return (
        <SidebarLayout>
            <div className="container relative">
                <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
                    <div className="left lg:w-5/6 rounded-md h-full">
                        <div className="flex  w-full items-center justify-between">
                            <TypographyH1 title="Top Questions" />
                            <Button variant="blue" asChild>
                                <Link href="/questions/ask">Ask a question</Link>
                            </Button>
                        </div>
                        <Suspense fallback={<Loading />}>
                            <ul className="flex flex-col-reverse mt-5">
                                {questions.map((question) => (
                                    <li
                                        key={question._id}
                                        className="list-none p-0 m-0"
                                    >
                                        <PostCard
                                            href={`/questions/${question.id}`}
                                            id={question.id}
                                            title={question.title}
                                            author={question.authorUsername}
                                            content={question.body}
                                            time={question.time}
                                            tags={question.tagIDs}
                                            hrefUser={`/u/${question.authorId}`}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Suspense>
                    </div>
                    <div className="right h-full py-[10px]"></div>
                </div>
            </div>
        </SidebarLayout>
    );
}

