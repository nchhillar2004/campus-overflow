import SidebarLayout from "@/components/sidebar-layout";
import { TypographyH1 } from "@/components/typography";
import SiteConfig from "@/config/site";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <SidebarLayout selectedOption="developer">
            <div className="space-y-2">
                <TypographyH1 title="Developer - Nishant Chhillar" />
                <p>
                    CS student at{" "}
                    <Link href="https://mdu.ac.in/">
                        Maharshi Dayanand University
                    </Link>
                </p>
                <p>
                    Contact -{" "}
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nchhillar2004@gmail.com">Gmail</Link>
                </p>
                <p>
                    Other projects -{" "}
                    <Link href={SiteConfig.links.github}>Github</Link>
                </p>
            </div>
        </SidebarLayout>
    );
}
