import { TypographyH1, TypographyH2 } from "@/components/typography";
import React from "react";
import SidebarLayout from "@/components/sidebar-layout";
import SiteConfig from "@/config/site";
import { getQuestionById } from "@/data/question";

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

    return (
        <SidebarLayout  selectedOption={'questions'}>
            <div>
                <div className="container">
                    <TypographyH1 title={`Q - ${question?.title}`} />
                    <br></br>
                    <TypographyH2 title={question?.body} />
                    <p>Posted: {question?.time}</p>
                </div>
            </div>
        </SidebarLayout>
    );
}
