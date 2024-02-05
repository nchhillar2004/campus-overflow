import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "../typography";

export default function Footer() {
    return (
        <footer className="bg-[var(--custom-grey)]">
            <Separator/>
            <div className="footer-container text-[15px]">
                <div className="h-[30px]">
                    <Link href="#top" className="flex items-center h-full w-full justify-center">Back to top</Link>
                </div>
                <div className="container">
                    <div className="footer-top flex h-fit w-full flex-col border-b pb-2">
                        <SiteLogo />

                        <div className="flex flex-wrap w-full items-start justify-between">
                            <nav className="w-fit p-2">
                                <h3>BHFS</h3>
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
                                <h3>About</h3>
                                <ul className="nopad">
                                    <li>
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/">How it works</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Developer</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            Contact us
                                        </Link>
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
                    <div className="footer-bottom py-5 flex items-center justify-between">
                        <div className="fleft">
                            <p>2,19,487</p>
                            <div>
                                <ul>
                                    <li>Clients Connected</li>
                                </ul>
                            </div>
                        </div>
                        <div className="fcenter">
                            <p>1,98,542</p>
                            <div>
                                <ul>
                                    <li>Services Provided</li>
                                </ul>
                            </div>
                        </div>
                        <div className="fright w-2/5">
                            <div className="copyright">
                                <p className="text-neutral-400 text-[11px]">
                                    BHFS ® is a registered Trademark of Baba
                                    Haridas Financial Services Pty Limited &
                                    BHFS Online India Private Limited.
                                    <br></br>
                                    Copyright © 2023 BHFS Pty Limited
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
