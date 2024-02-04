import React from "react";
import UserProfileCard from "@/components/common/UserProfileCard";
import SiteConfig from "@/config/site";

interface UserProfilePageProps {
    params: {
        username: string;
    };
}

export default async function UserProfile({ params }: UserProfilePageProps) {
    const username = params.username;

    const response = await fetch(`${SiteConfig.url}/api/getoneuser`, {
        cache: 'no-store',
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    });

    if (!response.ok) {
        return <div>User not found</div>;
    }

    const data = await response.json();
    
    return (
        <div className="profile">
            <UserProfileCard
                fname={data.name}
                image={data.image}
                time={data.time}
                username={data.username}
                email={data.email}
                role={data.role}
                banner={data.banner}
                verified={data.isVerified}
                isOwner={false}
            />
        </div>
    );
}
