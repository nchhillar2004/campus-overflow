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
            className="text-foreground bg-transparent h-full px-4 flex items-center ml-1 hover:bg-[var(--custom-grey)]"
        >
            <Button variant="icon" size="myIcon">
                {props.icon}
            </Button>
            {props.name}
        </Link>
    );
}
