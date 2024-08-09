import React from "react";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

export default function Services() {
    return (
        <SidebarLayout selectedOption="users">
            <div>
                <div className="container">
                    <TypographyH1 title="Services" />
                </div>
            </div>
        </SidebarLayout>
    );
}
