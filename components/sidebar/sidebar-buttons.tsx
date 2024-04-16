import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function SidebarButton(props: {
    name: String;
    href: Url;
    selected: any;
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
                <Link href={props.href}>{props.name}</Link>
            </Button>
        </div>
    );
}
