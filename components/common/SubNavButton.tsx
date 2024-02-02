import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

export default function SubNavButton(props: {
    href: string | UrlObject;
    name: string;
}) {
    return (
        <Link
            href={props.href}
            className={`bg-transparent hover:bg-[#12151b] h-full px-3 text-white flex items-center ml-1`}
        >
            {props.name}
        </Link>
    );
}
