import React, { Key, Suspense } from "react";
import { TypographyH1 } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SiteConfig from "@/config/site";

interface Post {
    title: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    tagIDs: String[];
}

export async function ProfileTabs(props: { username: String }) {
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

    return (
        <Tabs defaultValue="questions" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="questions">Questions</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="questions">
                <TypographyH1 title="Questions" />
            </TabsContent>

            <TabsContent value="posts">
                <TypographyH1 title="Posts" />
                <CardContent className="card">
                    <div className="flex">{data.posts}</div>
                </CardContent>
            </TabsContent>
        </Tabs>
    );
}
