import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface CommentCardProps {
    comment: string;
    authorUsername: string | null;
    time: string;
}

export default function CommentCard({
    comment,
    authorUsername,
    time,
}: CommentCardProps) {
    return (
        <div className="card px-4 py-2 flex mb-4">
            <div className="flex items-center">
                <div className="flex flex-col justify-between">
                    <Button
                        variant="ghost"
                        className="rounded-full"
                        size="icon"
                    >
                        <ArrowBigUp />
                    </Button>
                    <Button
                        variant="ghost"
                        className="rounded-full"
                        size="icon"
                    >
                        <ArrowBigDown />
                    </Button>
                </div>
            </div>
            <div className="right flex flex-col flex-1 text-left ml-4 justify-between">
                <p className="lg:text-base text-sm">{comment}</p>
                <span>
                    By:{" "}
                    <Link href={`/u/${authorUsername}`}>{authorUsername}</Link>
                </span>
                <time className="text-xs dark:text-zinc-400 text-zinc-600">
                    {time}
                </time>
            </div>
        </div>
    );
}
