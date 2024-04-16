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
import { SmallLoading } from "../loading";
import Image from "next/image";
import SearchBar from "../common/search-bar";
import { Suspense } from "react";
import { signOut } from "next-auth/react";
import { HelpCircle } from "lucide-react";
import { LogOut } from "lucide-react";
import { Tooltip } from "@mui/material";

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

  return (
    <header className="fixed top-0 w-full z-20">
      <div className="w-full h-[50px] bg-background" id="top">
        <div className="container flex items-center h-full">
          <div className="flex items-center h-full">
            <div className="mobile-menu-toggle px-1 lg:px2 cursor-pointer z-10 hover:bg-[var(--custom-grey)] flex items-center h-full">
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
            <Button variant="bhfs" size="round" asChild>
              <Link href="/about">About</Link>
            </Button>
          </div>

          <div className="flex max-md:hidden flex-1 w-full">
            <SearchBar />
          </div>

          <div className="flex md:hidden flex-1 w-full h-full items-center justify-center">
            <Button variant="bhfs" size="myIcon" onClick={toggleMobileSearch}>
              <Search size={20} />
            </Button>
          </div>

          {sessionStatus === "loading" ? (
            <div className="min-w-[100px] flex justify-center"><SmallLoading /></div>
          ) : (
            <div className="h-full max-sm:overflow-x-scroll">
              {session ? (
                <div className="flex items-center h-full">
                  <Suspense fallback={<SmallLoading />}>
                    <Button variant="bhfs" size="myIcon" asChild>
                      <Link href="/u/profile">
                        <Image
                          fetchPriority="high"
                          src={
                            session.user?.picture ||
                            session.user?._doc?.image ||
                            session.user?.image
                          }
                          width={20}
                          height={20}
                          alt={session.user?.name}
                          className="rounded-[4px]"
                        />
                      </Link>
                    </Button>

                    <Button
                      variant="bhfs"
                      size="myIcon"
                      asChild
                      className="desktop-menu"
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
                      <LogOut />
                    </Button>
                  </Suspense>
                </div>
              ) : (
                <div className="flex items-center h-full">
                  <Button className="ml-2 z-0" variant="outline" asChild>
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button className="ml-2 z-0" variant="blue" asChild>
                    <Link href="/auth/register">Signup</Link>
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Separator />
    </header>
  );
}
