import React from "react";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

export default function HelpPage() {
    return (
        <SidebarLayout selectedOption="help">
            <div>
                <div className="">
                    <TypographyH1 title="Help & Support" />
                    <br/>
                    <p>Under construction</p>
                </div>
            </div>
        </SidebarLayout>
    );
}
