import React from "react";
import { TypographyH1 } from "@/components/typography";
import { ModeToggle } from "@/components/theme-toggle-mode";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="home-page">
            <div className="container">
                <ModeToggle/>
                <TypographyH1 title="Welcome to BH Financial Services" />
                <br />
                <Link href='/posts'>Posts</Link>
                <br />
                <Link href='/u'>Users</Link>
                <br />
                <Link href='/u/profile'>Your Profile</Link>
            </div>
        </div>
    );
}
