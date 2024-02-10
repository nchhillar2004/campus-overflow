import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import { Loading } from "@/components/loading";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

interface Post {
    title: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    tagIDs: String[]; 
}

export default async function PostsPage() {
    const res = await fetch(`${SiteConfig.url}/api/getposts`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const posts: Post[] = await res.json();
    
    return (
        <SidebarLayout>
            <div className="container relative">
                <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
                    <div className="left lg:w-5/6 rounded-md h-full">
                        <TypographyH1 title="Posts" />
                        <Suspense fallback={<Loading />}>
                            <div className="flex flex-col-reverse">
                                {posts.map((post) => (
                                    <li
                                        key={post._id}
                                        className="list-none p-0 m-0"
                                    >
                                        <PostCard
                                            title={post.title}
                                            author={post.authorId}
                                            content={post.body}
                                            time={post.time}
                                            tags={post.tagIDs}
                                        />
                                    </li>
                                ))}
                            </div>
                        </Suspense>
                    </div>
                    <div className="right h-full py-[10px]">
                        <Button variant="blue" asChild>
                            <Link href="/posts/create">Create a post</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    );
}
