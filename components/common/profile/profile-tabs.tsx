import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostsTab from "./tabs/posts-tab";
import QuestionsTab from "./tabs/questions-tab";

export function ProfileTabs(props: { username: String }) {
    const username = props.username;

    return (
        <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            <QuestionsTab username={username} />
            <PostsTab username={username} />
        </Tabs>
    );
}
