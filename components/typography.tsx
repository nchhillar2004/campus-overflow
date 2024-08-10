import Link from "next/link";
import React from "react";
import { Code2 } from "lucide-react";

function TypographyH1(props: { title: string | undefined }) {
    return (
        <h1 className="scroll-m-20 text-[24px] dark:text-zinc-200 text-zinc-800 leading-none lg:text-[28px] tracking-tight">
            {props.title}
        </h1>
    );
}

function TypographyH2(props: { title: string | undefined }) {
    return (
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {props.title}
        </h1>
    );
}

function TypographyH3(props: { title: string | number }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {props.title}
        </h3>
    );
}

function TypographyP(props: { title: string | number }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{props.title}</p>
    );
}

function TypographyList(props: {
    point1: string | number;
    point2: string | number;
    point3: string | number;
}) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>{props.point1}</li>
            <li>{props.point2}</li>
            <li>{props.point3}</li>
        </ul>
    );
}

function TypographyCode(props: { code: string | number }) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {props.code}
        </code>
    );
}

function SiteLogo() {
    return(
        <Link href='/' className="h-full w-fit text-[18px] lg:text-[20px] px-2 lg:px-5 items-center hover:bg-[var(--custom-grey)] text-foreground flex">
            <Code2 className="mr-1 text-[#e7700d]"/>
            campus<p className="font-bold ml-[2px]">Overflow</p>
        </Link>
    )
}

function LargeSiteLogo() {
    return(
        <Link href='/' className="w-fit text-[26px] lg:text-[32px] items-center text-foreground flex">
            <Code2 className="mr-1 text-[#e7700d]" size={40} />
            campus<p className="font-bold ml-[2px]">Overflow</p>
        </Link>
    )
}

export {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyP,
    TypographyList,
    TypographyCode,
    SiteLogo,
    LargeSiteLogo
};
