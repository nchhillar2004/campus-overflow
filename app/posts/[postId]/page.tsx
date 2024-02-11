import React from "react";
import SiteConfig from "@/config/site";
import SidebarLayout from "@/components/sidebar-layout";

interface PostIdPageProps {
    params: {
        postId: string;
    };
}

export default async function PostIdPage({ params }: PostIdPageProps) {
    const postId = params.postId;

    const response = await fetch(`${SiteConfig.url}/api/getonepost`, {
        cache: "no-store",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
    });

    if (!response.ok) {
        return <div>Post not found</div>;
    }

    const data = await response.json();

    return (
        <SidebarLayout>
            <div className="post">
                {data.title}
            </div>
        </SidebarLayout>
    );
}
