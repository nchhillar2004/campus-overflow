"use client"
import { useEffect } from "react";
import { TypographyH1 } from "@/components/typography";
import React from "react";
import SidebarLayout from "@/components/sidebar-layout";


export default function Questions() {
    useEffect(() => {
        const selectedOption = "questions";
        localStorage.setItem("selectedOption", selectedOption);
    });
    return (
        <SidebarLayout>
            <div>
                <div className="container">
                    <TypographyH1 title="Questions" />
                </div>
            </div>
        </SidebarLayout>
    );
}
