import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import { Loading } from "@/components/loading";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import FilterButtons from "@/components/common/FilterButtons";
import InfoCard from "@/components/notifications/InfoCard";

interface Question {
    title: String;
    id: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    authorUsername: String;
    tagName: String;
}

export default async function Questions() {
    const res = await fetch(`${SiteConfig.url}/api/getquestions`, {
        cache: "no-store",
    });
    const questions: Question[] = await res.json();
    const questionsLength = questions.length;

    return (
        <SidebarLayout  selectedOption={'questions'}>
                <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
                    <div className="left lg:w-3/4 rounded-md h-full">
                        <div className="flex w-full items-center justify-between">
                            <TypographyH1 title={`${questionsLength} Questions`} />
                            <Button variant="blue" asChild>
                                <Link href="/questions/ask">Ask a question</Link>
                            </Button>
                        </div>
                        <FilterButtons/>
                        <Suspense fallback={<Loading />}>
                            <ul className="flex flex-col-reverse mt-5">
                                {questions.map((question, index) => (
                                    <li
                                        key={index}
                                        className="list-none p-0 m-0"
                                    >
                                        <PostCard
                                            href={`/questions/${question.id}`}
                                            id={question.id}
                                            title={question.title}
                                            author={question.authorUsername}
                                            content={question.body}
                                            time={question.time}
                                            tagName={question.tagName}
                                            hrefUser={`/u/${question.authorUsername}`}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Suspense>
                    </div>
                    <div className="right lg:w-[22%] mb-4">
                        <InfoCard heading="Features" content="Users can ask questions and get answers within 24 hours." />
                    </div>
                </div>
        </SidebarLayout>
    );
}
