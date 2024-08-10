import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "../typography";
import { ModeToggle } from "../theme-toggle-mode";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[var(--custom-grey)]">
            <Separator />
            <div className="footer-container text-[15px]">
                <div className="h-[30px]">
                    <Link
                        href="#top"
                        className="flex items-center h-full w-full justify-center"
                    >
                        Back to top
                    </Link>
                </div>
                <Separator color="grey" />
                <div className="container">
                    <div className="footer-top flex h-fit w-full flex-col border-b pb-2">
                        <SiteLogo />
                        <div className="flex flex-wrap w-full items-start justify-between">
                            <nav className="w-fit p-2">
                                <h3>campusOverflow</h3>
                                <ul className="nopad">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Explore</Link>
                                    </li>
                                    <li>
                                        <Link href="/posts">Posts</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Mail</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact form
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">Locate us</Link>
                                    </li>
                                </ul>
                            </nav>

                            <nav className="w-fit p-2">
                                <h3>Partners</h3>
                                <ul className="nopad">
                                    <li>
                                        <Link href="/">Instagram.com</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Facebook.com</Link>
                                    </li>
                                    <li>
                                        <Link href="/">GitHub.com</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Google.com</Link>
                                    </li>
                                </ul>
                            </nav>

                            <nav className="w-fit p-2">
                                <h3>Social</h3>
                                <ul className="nopad">
                                    <li>
                                        <Link href="/">Instagram</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link href="/">GitHub</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-bottom py-5 flex items-center">
                        <div className="fright w-11/12">
                            <div className="copyright">
                                <p className="text-neutral-400 text-[11px] text-center">
                                    campusOverflow ® is a registered Trademark
                                    of Baba Haridas Financial Services Pty
                                    Limited & campusOverflow Online India
                                    Private Limited.
                                    <br></br>
                                    Copyright © 2023 campusOverflow Pty Limited
                                </p>
                            </div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
