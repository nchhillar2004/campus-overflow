import React from "react";
import { TypographyH1, TypographyH2 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { getPostsById } from "@/data/post";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";

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
        <SidebarLayout  selectedOption={'posts'}>
            <div className="container">
                <div>
                    <TypographyH1 title={`${post?.title}`} />
                    <br></br>
                    <div className="box dark:bg-zinc-900 bg-zinc-100 py-2 px-4 rounded-md">
                        <p className="mb-4 text-lg">{post?.body}</p>
                        <time className="text-sm dark:text-zinc-400 text-zinc-600 select-none">
                            Posted: {post?.time}
                        </time>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="comments min-h-[10vh]">
                    <div className="flex">
                        <TypographyH1 title={`0 Comments`} />
                        <Button variant="blue" asChild>
                            Comment
                        </Button>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    );
}
