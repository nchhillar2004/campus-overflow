import React from "react";
import { TypographyH1 } from "@/components/typography";
import { ModeToggle } from "@/components/theme-toggle-mode";

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="container">
                <ModeToggle/>
                <TypographyH1 title="Welcome to BH Financial Services" />
            </div>
        </div>
    );
}
