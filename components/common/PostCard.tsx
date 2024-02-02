import Link from "next/link";
import React from "react";

export default function PostCard(props: {
    title: String;
    author: String;
    content: String;
    time: String;
}) {
    return (
        <div className="card mb-4 cursor-pointer">
            <div className="flex flex-col">
                <h1 className="text-[18px] font-medium">{props.title}</h1>
                <p className="flex text-sm text-slate-500">
                    By:
                    <Link href="/" className="ml-[3px] hover:underline">
                        {props.author}
                    </Link>
                </p>
                <p className="py-2">{props.content}</p>
                <p className="text-xs text-slate-400">
                    Posted at: {props.time}
                </p>
            </div>
        </div>
    );
}
