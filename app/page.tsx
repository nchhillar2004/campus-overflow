import React from "react";
import { TypographyH1 } from "@/components/typography";
import Link from "next/link";

export default function HomePage() {
    
    return (
        <div className="home-page w-full px-4 py-4 lg:py-5 lg:px-6">
            <div className="container">
                <TypographyH1 title="BH Financial Services" />
            </div>
        </div>
    );
}
