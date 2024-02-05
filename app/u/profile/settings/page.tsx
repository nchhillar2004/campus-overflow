import React from "react";
import { TypographyH1, TypographyP } from "@/components/typography";
import { ModeToggle } from "@/components/theme-toggle-mode";

export default function Settings() {
    return (
        <div>
            <div className="container">
                <TypographyH1 title="Settings" />
                <ModeToggle />
            </div>
        </div>
    );
}
