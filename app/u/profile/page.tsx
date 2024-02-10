"use client";
import React from "react";
import UserProfileCard from "@/components/common/profile/UserProfileCard";
import { useSession } from "next-auth/react";
import SidebarLayout from "@/components/sidebar-layout";

export default function LoggedInUserProfile() {
    const { data: session }: any = useSession();
    const data = session?.user || null;

    return (
        <SidebarLayout>
            {" "}
            {session ? (
                <div className="profile">
                    <UserProfileCard
                        fname={data.name}
                        image={data.image || data._doc?.image}
                        time={data.time || data._doc?.time}
                        username={data.username || data._doc?.username}
                        email={data.email}
                        role={data.role || data._doc?.role}
                        verified={data.isVerified || data._doc?.isVerified}
                        isOwner={true}
                    />
                </div>
            ) : (
                <div className="flex">User not found</div>
            )}
        </SidebarLayout>
    );
}
