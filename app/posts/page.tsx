import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import Loading from "./loading";
import SiteConfig from "@/config/site";

interface Post {
    title: String;
    _id: null | undefined | Key | React.Key;
    content: String;
    time: String;
    author: String;
    tag: String;
}

export default async function PostsPage() {
    const res = await fetch(`${SiteConfig.url}/api/getposts`, {
        cache: "no-store",
    });
    const posts: Post[] = await res.json();

    return (
        <div className="flex flex-col-reverse justify-between lg:flex-row h-full py-4">
            <div className="left lg:w-5/6 rounded-md p-4 bg-slate-50 dark:bg-slate-800 h-full">
                <h1 className="font-bold text-2xl mb-2">Latest posts</h1>
                <Suspense fallback={<Loading />}>
                    <div className="flex flex-col-reverse">
                    {posts.map((post) => (
                        <li key={post._id} className="list-none p-0 m-0">
                            <PostCard
                                title={post.title}
                                author={post.author}
                                content={post.content}
                                time={post.time}
                                tag={post.tag}
                            />
                        </li>
                    ))}</div>
                </Suspense>
            </div>
            <div className="right h-full py-[10px]">
                <Link
                    href="/posts/create"
                    className="custom-button text-center"
                >
                    Create a post
                </Link>
            </div>
        </div>
    );
}
