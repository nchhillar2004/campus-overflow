import { TypographyH1 } from "@/components/typography";
import React from "react";

interface QuestionIdPageProps {
    params: {
        questionId: string;
    };
}

export default function QuestionId({ params }: QuestionIdPageProps) {
    return (
        <div>
            <div className="container">
                <TypographyH1 title={params.questionId} />
            </div>
        </div>
    );
}
