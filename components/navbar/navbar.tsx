"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "../theme-toggle-mode";
import { Button } from "../ui/button";
import Link from "next/link";
import NavButton from "../common/NavButton";
import { DollarSign, Store, Phone, Newspaper, Info } from "lucide-react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "../typography";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header className="fixed top-0 w-full">
            <div className="w-full h-[50px] z-10 bg-background" id="top">
                <div className="navbar-container flex items-center justify-between h-full w-[90%] m-auto">
                    <div className="nav-left flex items-center h-full">
                        <SiteLogo />
                        <nav
                            className={`desktop-menu ml-2 flex text-nowrap h-full${
                                showMobileMenu ? "hidden" : ""
                            } `}
                        >
                            <NavButton
                                href="/"
                                name="Home"
                                icon={<Home size={20} />}
                            />
                            <NavButton
                                href="/about"
                                name="About us"
                                icon={<Info size={20} />}
                            />
                            <NavButton
                                href="/products"
                                name="Products"
                                icon={<Store size={19} />}
                            />
                            <NavButton
                                href="/services"
                                name="Services"
                                icon={<DollarSign size={20} />}
                            />
                            <NavButton
                                href="/posts"
                                name="Posts"
                                icon={<Newspaper size={20} />}
                            />
                            <NavButton
                                href="/contact"
                                name="Contact"
                                icon={<Phone size={20} />}
                            />
                        </nav>
                        <div
                            className={`sidebar z-10 hidden fixed top-0 right-[-1000px] h-full w-[320px] ${
                                showMobileMenu ? "active" : ""
                            }`}
                        >
                            <div className="sidebar-content p-[20px] flex h-fit justify-around flex-col w-fit">
                                <nav className="flex flex-col justify-between h-[360px]">
                                    <NavButton
                                        href="/about"
                                        name="About us"
                                        icon={<Info size={20} />}
                                    />
                                    <NavButton
                                        href="/products"
                                        name="Products"
                                        icon={<Store size={19} />}
                                    />
                                    <NavButton
                                        href="/services"
                                        name="Services"
                                        icon={<DollarSign size={20} />}
                                    />
                                    <NavButton
                                        href="/posts"
                                        name="Posts"
                                        icon={<Newspaper size={20} />}
                                    />
                                    <NavButton
                                        href="/contact"
                                        name="Contact"
                                        icon={<Phone size={20} />}
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right flex items-center">
                        <ModeToggle />
                        <Button className="ml-2 z-0" variant="blue" asChild>
                            <Link href="/contact">Contact us</Link>
                        </Button>

                        <div
                            className="mobile-menu-toggle ml-2 z-10"
                            onClick={toggleMobileMenu}
                        >
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
        </header>
    );
}
