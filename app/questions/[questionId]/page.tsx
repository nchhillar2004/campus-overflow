import { TypographyH1 } from "@/components/typography";
import React from "react";
import SidebarLayout from "@/components/sidebar-layout";
import SiteConfig from "@/config/site";
import { getQuestionById } from "@/data/question";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: `Questions - ${SiteConfig.title}`,
};

interface QuestionIdPageProps {
    params: {
        questionId: string;
    };
}

export default async function QuestionId({ params }: QuestionIdPageProps) {
    const question = await getQuestionById(params.questionId);

    const parseContent = (text: any) => {
        return text
            .replace(
                /```([\s\S]*?)```/g,
                "<pre class='rounded-md px-4 py-2 dark:bg-zinc-900 bg-zinc-100 lg:text-wrap lg:overflow-hidden overflow-scroll' style='margin: 16px 0px;'><code class='text-zinc-600 dark:text-zinc-400'>$1</code></pre>"
            )
            .replace(/\*(.*?)\*/g, "<b>$1</b>");
    };

    return (
        <SidebarLayout selectedOption={"questions"}>
            <div className="container">
                <div>
                    <TypographyH1 title={`Q - ${question?.title}`} />

                    <hr className="my-5" />
                    <div className="box py-2 px-4 rounded-md">
                        <pre
                            className="mb-4 text-lg text-wrap"
                            dangerouslySetInnerHTML={{
                                __html: parseContent(question?.body),
                            }}
                        />
                        <time className="text-sm dark:text-zinc-400 text-zinc-600 select-none">
                            Asked: {question?.time}
                        </time>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="answers min-h-[10vh]">
                    <div className="flex">
                        <TypographyH1 title={`0 Answers`} />
                        <Button variant="blue" asChild>
                            Answer
                        </Button>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    );
}
