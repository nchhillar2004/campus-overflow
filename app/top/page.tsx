"use client"
import React, { useEffect } from "react";
import SidebarLayout from "@/components/sidebar-layout";

export default function TopQuestions() {

    useEffect(() => {
        const selectedOption = "home";
        localStorage.setItem("selectedOption", selectedOption);
    });

    return (
        <SidebarLayout>
            <div>Home</div>
        </SidebarLayout>
    );
}
