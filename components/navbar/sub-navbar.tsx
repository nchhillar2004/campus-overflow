"use client";
import React from "react";
import SubNavButton from "../common/SubNavButton";
import { signOut, useSession } from "next-auth/react";

export default function SubNavbar() {
    const { data: session }: any = useSession();

    return (
        <div className="sub-navbar w-full bg-[#232a35] h-9">
            <div className="sub-navbar-container w-[90%] m-auto h-full flex justify-between">
                <nav className="flex h-full text-nowrap overflow-x-hidden">
                    <SubNavButton href="/" name="Locate us" />
                    <SubNavButton href="/" name="Mail us" />
                    <SubNavButton href="/contact/form" name="Contact form" />
                </nav>
                <nav>
                    {!session ? (
                        <SubNavButton href="/auth/login" name="Login" />
                    ) : (
                        <div className="flex text-white h-full items-center">
                            <p className="mr-4">
                            {session.user?.email}
                            </p>
                            <button
                                onClick={() => {
                                    signOut();
                                }}
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
