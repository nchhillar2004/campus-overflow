"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import NavButton from "../common/NavButton";
import { DollarSign, Store, Phone, Newspaper, Info } from "lucide-react";
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "../typography";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header className="fixed top-0 w-full z-10">
            <div className="w-full h-[50px] bg-background" id="top">
                <div className="container flex items-center justify-between h-full">
                    <div className="nav-left flex items-center h-full">
                        <div
                            className="mobile-menu-toggle z-10 hover:bg-[var(--custom-grey)]"
                            onClick={toggleMobileMenu}
                        >
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="cursor-pointer"
                                    asChild
                                >
                                    <Menu />
                                </DropdownMenuTrigger>
                                <MobileMenu />
                            </DropdownMenu>
                        </div>
                        <SiteLogo />
                        <nav
                            className={`desktop-menu ml-2 flex text-nowrap h-full${
                                showMobileMenu ? "hidden" : ""
                            } `}
                        >
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
                            <form>
                                <input type="text" placeholder="Search" />
                            </form>
                            <NavButton
                                href="/posts"
                                name="Posts"
                                icon={<Newspaper size={20} />}
                            />
                        </nav>
                    </div>
                    <div className="nav-right flex items-center">
                        <Button className="ml-2 z-0" variant="outline" asChild>
                            <Link href="/auth/login">Login</Link>
                        </Button>
                        <Button className="ml-2 z-0" variant="blue" asChild>
                            <Link href="/auth/register">Signup</Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Separator />
        </header>
    );
}
