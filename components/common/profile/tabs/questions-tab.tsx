import React, { Key } from "react";
import PostCard from "../../PostCard";
import SiteConfig from "@/config/site";
import { CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { TypographyH1 } from "@/components/typography";

interface Question {
    title: String;
    id: String;
    _id: null | undefined | Key | React.Key;
    body: String;
    time: String;
    authorId: String;
    tagIDs: String[];
    likes: Number;
}
export default async function QuestionsTab(props: { username: String }) {
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
    const ques: Question[] = data?.questions;
    const mappedquess = ques.map((ques: Question) => {
        const { id, title, body, authorId, tagIDs, time, likes } = ques;
        return { id, title, body, authorId, tagIDs, time, likes };
    });
    const quesCount = mappedquess.length;
    return (
        <TabsContent value="questions">
            <TypographyH1 title={`${quesCount} Questions`} />
            <CardContent className="mt-4">
                {mappedquess.map((ques, index) => (
                    <li key={index} className="list-none">
                        <PostCard
                            id={ques.id}
                            href={`/questions/${ques.id}`}
                            hrefUser={`/u/`}
                            title={ques.title}
                            content={ques.body}
                            author={ques.authorId}
                            tags={ques.tagIDs}
                            time={ques.time}
                        />
                    </li>
                ))}
            </CardContent>
        </TabsContent>
    );
}
