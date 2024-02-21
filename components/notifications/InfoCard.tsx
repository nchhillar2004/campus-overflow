import Link from "next/link";
import React from "react";
import { getDeployments, getCommits, getLatestVersion} from "@/utils/github";

export default async function InfoCard(props: {
    heading: string;
    content: string;
}) {
    const deployments = await getDeployments();
    const commits = await getCommits();
    const version = await getLatestVersion();
    
    return (
        <div className="info-card border border-[var(--info-border)] h-fit w-full rounded-sm">
            <div className="info-heading py-2 px-4 bg-[var(--info-heading)]">
                <h1 className="text-base font-medium">{props.heading}</h1>
            </div>
            <div className="info-content py-2 px-4 bg-[var(--info-bg)] dark:bg-background">
                <p className="text-sm">{props.content}</p>
            </div>
            <div className="info-heading py-2 px-4 bg-[var(--info-heading)]">
                <h1 className="text-base font-medium">Current Version - {version?.tag_name}</h1>
            </div>
            <div className="info-content py-2 text-sm px-4 bg-[var(--info-bg)] dark:bg-background">
                <div className="flex space-x-1">
                    <strong>Name: </strong>
                    <p>{version?.name}</p>
                </div>
                <div className="flex space-x-1">
                    <strong>About: </strong>
                    <p>{version?.body}</p>
                </div>
                <div className="flex space-x-1">
                    <strong>Release date: </strong>
                    <p>{version?.created_at}</p>
                </div>
                <Link href={version?.html_url} target="_blank">
                    Learn more &rarr;
                </Link>
            </div>
            <div className="info-heading py-2 px-4 bg-[var(--info-heading)]">
                <h1 className="text-base font-medium">Latest commits</h1>
            </div>
            <div className="info-content py-2 text-sm px-4 bg-[var(--info-bg)] dark:bg-background">
                <ul className="list-outside space-y-2">
                    <li>
                        <Link href={commits[0]?.html_url} target="_blank">
                            {commits[0]?.commit?.message} -{" "}
                            {commits[0]?.commit?.author?.date}
                        </Link>
                    </li>
                    <li>
                        <Link href={commits[1]?.html_url} target="_blank">
                            {commits[1]?.commit?.message} -{" "}
                            {commits[1]?.commit?.author?.date}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="info-heading py-2 px-4 bg-[var(--info-heading)]  max-md:hidden">
                <h1 className="text-base font-medium">Current Deployment</h1>
            </div>
            <div className="info-content py-2 text-sm px-4 bg-[var(--info-bg)] dark:bg-background max-md:hidden">
                <div className="flex space-x-1">
                    <strong>Creator: </strong>
                    <p>{deployments[0]?.creator?.login}</p>
                </div>
                <div className="flex space-x-1">
                    <strong>Environment: </strong>
                    <p>{deployments[0]?.environment}</p>
                </div>
                <div className="flex space-x-1">
                    <strong>Date: </strong>
                    <p>{deployments[0]?.created_at}</p>
                </div>
                <Link href={deployments[0]?.creator?.html_url} target="_blank">
                    Learn more &rarr;
                </Link>
            </div>
        </div>
    );
}
