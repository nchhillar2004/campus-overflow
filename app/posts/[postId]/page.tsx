import React from "react";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";
import { getPostsById } from "@/data/post";
import SiteConfig from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CommentForm from "./CommentForm";
import CommentCard from "@/components/common/CommentCard";
import Image from "next/image";

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
        <SidebarLayout selectedOption={"posts"}>
            <div className="container">
                <div>
                    <div className="flex space-x-2 mb-4">
                        <Image
                            src={`${post?.author?.image}`}
                            alt={`${post?.author?.name}`}
                            height={40}
                            width={40}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <b>
                                <Link href={`/u/${post?.authorUsername}`}>{post?.author?.name}</Link>
                            </b>
                            <small>{post?.author?.username}</small>
                        </div>
                    </div>
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
                <div className="comments">
                    <div className="flex justify-between items-center">
                        <TypographyH1
                            title={
                                post?.comments.length == 1
                                    ? `${post?.comments.length} Comment`
                                    : `${post?.comments.length} Comments`
                            }
                        />
                        <Button size="lg" variant="blue" asChild>
                            <Link href={`#comment`}>Comment</Link>
                        </Button>
                    </div>
                    <div className="comments-content py-4 min-h-[20vh]">
                        {post?.comments.length && post?.comments ? (
                            <ul>
                                {post?.comments.map((comment, index) => (
                                    <li key={index} className="list-none">
                                        <CommentCard
                                            authorUsername={
                                                comment.authorUsername
                                            }
                                            comment={comment.comment}
                                            time={comment.time}
                                        />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Be the first one to comment.</p>
                        )}
                        <div id="answer">
                            <CommentForm id={params.postId} />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    );
}
