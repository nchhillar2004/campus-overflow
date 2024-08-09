import React from "react";
import {
    TypographyH1,
} from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

export default function Contact() {
    return (
        <SidebarLayout selectedOption="contact">
            <div>
                <div className="container">
                    <TypographyH1 title="Contact" />
                </div>
            </div>
        </SidebarLayout>
    );
}
