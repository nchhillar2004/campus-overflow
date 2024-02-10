import { TypographyH1 } from "@/components/typography";
import React from "react";
import SidebarLayout from "@/components/sidebar-layout";
import SiteConfig from "@/config/site";

export const metadata = {
    title: `Questions - ${SiteConfig.title}`,
};

interface QuestionIdPageProps {
    params: {
        questionId: string;
    };
}

export default function QuestionId({ params }: QuestionIdPageProps) {
    return (
        <SidebarLayout>
            <div>
                <div className="container">
                    <TypographyH1 title={params.questionId} />
                </div>
            </div>
        </SidebarLayout>
    );
}
