import React from "react";
import { TypographyH1, TypographyP } from "@/components/typography";
import { ModeToggle } from "@/components/theme-toggle-mode";
import SidebarLayout from "@/components/sidebar-layout";

export default function Settings() {
    return (
        <SidebarLayout>
        <div>
            <div className="container">
                <TypographyH1 title="Settings" />
                <ModeToggle />
            </div>
        </div></SidebarLayout>
    );
}
