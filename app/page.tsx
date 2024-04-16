import React from "react";
import { TypographyH1 } from "@/components/typography";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="home-page w-full px-4 py-4 lg:py-5 lg:px-6">
            <div className="container">
                <div className="flex items-center justify-center flex-col h-[80vh]">
                    <h2 className="text-base font-medium">Welcome to</h2>
                    <h1 className="text-4xl font-semibold">BH Financial Services</h1>
                </div>
            </div>
        </div>
    );
}
