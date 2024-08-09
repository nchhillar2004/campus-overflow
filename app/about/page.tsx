import React from "react";
import { TypographyH1 } from "@/components/typography";
import SidebarLayout from "@/components/sidebar-layout";

export default function AboutUs() {
    return (
        <SidebarLayout selectedOption="about">
            <div>
                <div className="space-y-2">
                    <TypographyH1 title="About us" />
                    <p>This is a test Next.js project made for fun.</p>
                    <b>Tech stack:</b>
                    <ul className="list-disc list-inside">
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>MongoDB</li>
                        <li>NextAuth</li>
                        <li>Prisma</li>
                        <li>TailwindCSS</li>
                        <li>Shadcn/ui</li>
                    </ul>
                </div>
            </div>
        </SidebarLayout>
    );
}
