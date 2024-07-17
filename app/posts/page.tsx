import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import { Loading } from "@/components/loading";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { Separator } from "@/components/ui/separator";
import FilterButtons from "@/components/common/FilterButtons";
import InfoCard from "@/components/notifications/InfoCard";

export const metadata = {
    title: `Posts - ${SiteConfig.title}`,
};

interface Post {
    title: String;
    id: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    authorUsername: String;
    tagName: String;
}

export default async function PostsPage() {
    
    const res = await fetch(`${SiteConfig.url}/api/getposts`, {
        cache: "no-store",
    });
    const posts: Post[] = await res.json();
    const postsLength = posts.length;

    return (
        <SidebarLayout  selectedOption={'posts'}>
            <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
                <div className="left lg:w-3/4 rounded-md h-full">
                    <div className="flex  w-full items-center justify-between">
                        <TypographyH1 title={`${postsLength} Posts`} />
                        <Button variant="blue" asChild>
                            <Link href="/posts/create">Create a post</Link>
                        </Button>
                    </div>
                    <FilterButtons />
                    <Suspense fallback={<Loading />}>
                        <ul className="flex flex-col-reverse mt-5">
                            {posts.map((post, index) => (
                                <li
                                    key={index}
                                    className="list-none p-0 m-0"
                                >
                                    <PostCard
                                        href={`/posts/${post.id}`}
                                        id={post.id}
                                        title={post.title}
                                        author={post.authorUsername}
                                        content={post.body}
                                        time={post.time}
                                        tagName={post.tagName}
                                        hrefUser={`/u/${post.authorUsername}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Suspense>
                </div>
                <div className="right lg:w-[22%] mb-4">
                    <InfoCard heading="Features" content="Users can create post. Posts are visible to everyone using this website." />
                </div>
            </div>
        </SidebarLayout>
    );
}
