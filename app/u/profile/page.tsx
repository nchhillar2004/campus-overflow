"use client"
import React from "react";
import UserProfileCard from "@/components/common/UserProfileCard";
import { useSession } from "next-auth/react";

export default function LoggedInUserProfile() {
    const { data: session }: any = useSession();
    const data = session?.user || null;
    console.log(data);
    
    return session ? (
        <div className="flex">
            <UserProfileCard
                fname={data.name}
                image={data.image}
                time={data.createdAt}
                username={data.username}
                email={data.email}
                role={data.role}
                banner={data.banner}
                verified={data.isVerified}
                isOwner={true}
            />
        </div>
    ) : (
        <div className="flex">User not found</div>
    );
}
