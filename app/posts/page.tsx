"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React, { Key, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import { Loading } from "@/components/loading";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";

interface Post {
    title: String;
    _id: null | undefined | Key | React.Key;
    content: String;
    time: String;
    author: String;
    tag: String;
}

export default function PostsPage() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${SiteConfig.url}/api/getposts`);
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data: Post[] = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    });

    return (
        <div className="container">
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
                                        author={post.author}
                                        content={post.content}
                                        time={post.time}
                                        tag={post.tag}
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
    );
}
