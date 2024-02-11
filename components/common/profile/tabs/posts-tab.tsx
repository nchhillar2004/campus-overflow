import React, { Key } from "react";
import PostCard from "../../PostCard";
import SiteConfig from "@/config/site";
import { CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TypographyH1 } from "@/components/typography";

interface Post {
    id: String;
    title: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    tagIDs: String[];
    likes: Number;
}
export default async function PostsTab(props: { username: String }) {
    const username = props.username;

    const user = await fetch(`${SiteConfig.url}/api/getoneuser`, {
        cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    });
    if (!user.ok) {
        console.log("Failed to fetch data");
    }
    const data = await user.json();
    const posts: Post[] = data?.posts;
    const mappedPosts = posts.map((post: Post) => {
        const { id, title, body, authorId, tagIDs, time, likes } = post;
        return { id, title, body, authorId, tagIDs, time, likes };
    });
    const postCount = mappedPosts.length;
    return (
        <TabsContent value="posts">
            <TypographyH1 title={`${postCount} Posts`} />
            <CardContent className="mt-4">
                {mappedPosts.map((post, index) => (
                    <li key={index} className="list-none">
                        <PostCard
                            id={post.id}
                            href={`/posts/${post.id}`}
                            title={post.title}
                            content={post.body}
                            author={post.authorId}
                            tags={post.tagIDs}
                            time={post.time}
                        />
                    </li>
                ))}
            </CardContent>
        </TabsContent>
    );
}
