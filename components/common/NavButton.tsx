import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import { Button } from "../ui/button";

export default function NavButton(props: {
    href: string | UrlObject;
    name: string;
    icon:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined;
}) {
    return (
        <Link
            href={props.href}
            className={`bg-transparent hover:bg-[#232a35] h-full px-4 text-white flex items-center ml-1`}
        >
            <Button variant="icon" size="myicon">
                {props.icon}
            </Button>
            {props.name}
        </Link>
    );
}
