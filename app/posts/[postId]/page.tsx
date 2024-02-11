import React from "react";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { getPostsById } from "@/data/post";
import SiteConfig from "@/config/site";

export const metadata = {
    title: `Posts - ${SiteConfig.title}`,
};

interface PostIdPageProps {
    params: {
        postId: string;
    };
}

export default async function PostIdPage({ params }: PostIdPageProps) {
    const post = await getPostsById(params.postId);

    return (
        <SidebarLayout>
            <div className="post">
                <TypographyH1 title={`${post?.title}`} />
                <br></br>
                <TypographyH2 title={post?.body} />
                <p>Posted: {post?.time}</p>
            </div>
        </SidebarLayout>
    );
}
