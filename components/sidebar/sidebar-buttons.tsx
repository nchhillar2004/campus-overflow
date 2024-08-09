import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function SidebarButton(props: {
    name: String;
    href: Url;
    selected: any;
    icon: any;
}) {
    return (
        <div>
            <Button
                variant="sidebar"
                size="sidebar"
                asChild
                className={`sidebar_option ${
                    props.selected && "sidebar_option--active"
                }`}
            >
                <Link href={props.href} className="flex items-center justify-between text-sm">
                    {props.icon}
                    <span className="text-base ml-2 flex-1 text-left overflow-hidden">{props.name}</span>
                </Link>
            </Button>
        </div>
    );
}
