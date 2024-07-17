import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

export default async function PostCard(props: {
  id: String;
  title: String;
  author: String;
  content: String;
  time: String;
  tagName: String;
  href: Url;
  hrefUser: Url;
}) {
  return (
    <div className="card mb-2">
      <div className="flex flex-col">
        <Link href={props.href}>
          <h1 className="text-[18px] font-medium">{props.title}</h1>
        </Link>
        <p className="flex text-sm text-slate-500">
          By:
          <Link href={props.hrefUser} className="ml-[3px] hover:underline">
            {props.author}
          </Link>
        </p>
        <p className="my-2 overflow-hidden text-ellipsis line-clamp-5">
          {props.content}
        </p>
        <ul className="flex tag">
          <p className="mr-2">#{props.tagName}</p>
        </ul>
        <p className="text-xs text-slate-400">{props.time}</p>
      </div>
    </div>
  );
}
