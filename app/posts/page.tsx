"use client";
import Link from "next/link";
import React, { useState, useEffect, Suspense } from "react";
import PostCard from "@/components/common/PostCard";
import Loading from "./loading";

export default function PostsPage() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/getposts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div className="flex flex-col-reverse justify-between lg:flex-row h-full">
            <div className="left lg:w-5/6 rounded-md p-4 bg-slate-50 dark:bg-slate-800 h-full">
                <h1 className="font-bold text-2xl mb-2">Posts</h1>
                <Suspense fallback={<Loading />}>
                    <p>
                        {posts.map((post) => (
                            <li key={post.username} className="list-none p-0 m-0">
                            <PostCard
                                title={post.title}
                                author={post.author}
                                content={post.content}
                                time={post.createdAt}
                            /></li>
                        ))}
                    </p>
                </Suspense>
            </div>
            <div className="right mb-4 h-fit">
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
