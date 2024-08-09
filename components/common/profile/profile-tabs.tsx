import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsTab from "./tabs/posts-tab";
import QuestionsTab from "./tabs/questions-tab";
import { Suspense } from "react";
import { Loading } from "@/components/loading";

export function ProfileTabs(props: { username: String }) {
    const username = props.username;

    return (
        <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-2 dark:bg-zinc-700">
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            <Suspense fallback={<Loading />}>
                <QuestionsTab username={username} />
                <PostsTab username={username} />
            </Suspense>
        </Tabs>
    );
}
