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

  return (
    <SidebarLayout selectedOption={"questions"}>
      <div>
        <div className="container">
          <TypographyH1 title={`Q - ${question?.title}`} />
          <br></br>
          <div className="box bg-[whitesmoke] py-2 px-4 rounded-md">
            <p>{question?.body}</p>
            <br />
            <small>
              <time>Posted: {question?.time}</time>
            </small>
          </div>
        </div>
        <hr className="my-4" />
        <div className="answers min-h-[10vh]">
          <div className="flex">
            <TypographyH1 title={`{0} Answers`} />
            <Button variant="blue" asChild>
              Answer
            </Button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
