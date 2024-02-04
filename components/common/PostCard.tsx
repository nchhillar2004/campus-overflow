import Link from "next/link";
import React from "react";

export default function PostCard(props: {
    title: String;
    author: String;
    content: String;
    time: String;
    tag: String;
}) {
    return (
        <div className="card mb-4 dark:bg-slate-900 dark:border-slate-600">
            <div className="flex flex-col">
                <h1 className="text-[18px] font-medium">{props.title}</h1>
                <p className="flex text-sm text-slate-500">
                    By:
                    <Link href={`/u/${props.author}`} className="ml-[3px] hover:underline">
                        {props.author}
                    </Link>
                </p>
                <p className="my-2 overflow-hidden text-ellipsis line-clamp-5">{props.content}</p>
                <div className="flex tag dark:text-slate-100 dark:bg-slate-600">
                    <p>#{props.tag}</p>
                </div>
                <p className="text-xs text-slate-400">
                    {props.time}
                </p>
            </div>
        </div>
    );
}
