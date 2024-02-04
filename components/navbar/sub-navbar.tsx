"use client";
import React from "react";
import SubNavButton from "../common/SubNavButton";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function SubNavbar() {
    const { data: session }: any = useSession();
    
    return (
        <div className="sub-navbar w-full bg-[#232a35] h-9">
            <div className="sub-navbar-container w-[90%] m-auto h-full flex justify-between">
                <nav className="flex h-full text-nowrap overflow-x-hidden desktop-menu">
                    <SubNavButton href="/" name="Locate us" />
                    <SubNavButton href="/" name="Mail us" />
                    <SubNavButton href="/contact/form" name="Contact form" />
                </nav>
                <nav className="w-full lg:w-fit">
                    {!session ? (
                        <SubNavButton href="/auth/login" name="Login" />
                    ) : (
                        <div className="flex text-white h-full items-center justify-between">
                            <p className="bg-transparent hover:bg-[#12151b] h-full px-3 text-white">
                                <Link
                                    href="/u/profile"
                                    className="flex items-center h-full"
                                >
                                    <Image
                                        src={session.user?.image || 'https://placeholder.co/200x200'}
                                        width={28}
                                        height={28}
                                        className="rounded-[4px] mr-1 border border-white w-[28px] h-[28px]"
                                        alt={session ? (session.user?.name) : (signOut())}
                                    />
                                    <p className="font-medium text-[14px] h-fit">
                                        @{session ? (session.user?.username || <p>...</p>) : (signOut())}
                                    </p>
                                </Link>
                            </p>
                            <button
                                onClick={() => {
                                    signOut();
                                }}
                                className="bg-transparent hover:bg-[#12151b] h-full px-3 text-white"
                            >
                                Signout
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}
