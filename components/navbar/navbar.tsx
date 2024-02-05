"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "../typography";
import {
    DropdownMenu,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MobileMenu } from "./mobile-menu";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import Image from "next/image";
import SearchBar from "../common/search-bar";
import { Suspense } from "react";
import { signOut } from "next-auth/react";
import { HelpCircle } from "lucide-react";

export default function Navbar() {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const {
        data: session,
        status: sessionStatus,
        update: sessionUpdate,
    }: any = useSession();
    

    const toggleMobileSearch = () => {
        setShowMobileSearch(!showMobileSearch);
    };

    if (sessionStatus === "loading") {
        return <Loading />;
    }
    return (
        <header className="fixed top-0 w-full z-10">
            <div className="w-full h-[50px] bg-background" id="top">
                <div className="container flex items-center h-full">
                    <div className="flex items-center h-full">
                        <div className="mobile-menu-toggle px-2 cursor-pointer z-10 hover:bg-[var(--custom-grey)] flex items-center h-full">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="h-full" asChild>
                                    <Menu />
                                </DropdownMenuTrigger>
                                <MobileMenu />
                            </DropdownMenu>
                        </div>
                        <SiteLogo />
                    </div>

                    <div className="desktop-menu ">
                        <Button variant="bhfs" size="round">
                            Products
                        </Button>
                    </div>

                    <div className="desktop-menu flex flex-1 w-full">
                        <SearchBar />
                    </div>

                    <div className="mobile-menu flex flex-1 w-full h-full items-center justify-center">
                        <Button
                            variant="bhfs"
                            size="myIcon"
                            onClick={toggleMobileSearch}
                        >
                            <Search />
                        </Button>
                    </div>

                    <div className="h-full">
                        {session ? (
                            <div className="flex items-center h-full">
                                <Suspense fallback={<Loading />}>
                                    <Button
                                        variant="bhfs"
                                        size="myIcon"
                                        asChild
                                    >
                                        <Link href="/u/profile">
                                            <Image
                                                src={session?.user?._doc.image}
                                                width={20}
                                                height={20}
                                                alt={session?.user?._doc.name}
                                            />
                                        </Link>
                                    </Button>

                                    <Button
                                        variant="bhfs"
                                        size="myIcon"
                                        asChild
                                    >
                                        <Link href="/help">
                                            <HelpCircle />
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="bhfs"
                                        size="mySize"
                                        onClick={() => {
                                            signOut();
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Suspense>
                            </div>
                        ) : (
                            <div className="flex items-center h-full">
                                <Button
                                    className="ml-2 z-0"
                                    variant="outline"
                                    asChild
                                >
                                    <Link href="/auth/login">Login</Link>
                                </Button>
                                <Button
                                    className="ml-2 z-0"
                                    variant="blue"
                                    asChild
                                >
                                    <Link href="/auth/register">Signup</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Separator />
        </header>
    );
}
