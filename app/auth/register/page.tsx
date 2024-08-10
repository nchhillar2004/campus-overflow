"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loading } from "@/components/loading";
import { TypographyH1 } from "@/components/typography";
import { RegisterForm } from "@/components/forms/register-form";
import { LargeSiteLogo } from "@/components/typography";
import { MessageCircleQuestion } from "lucide-react";
import { Trophy } from "lucide-react";
import { Newspaper } from "lucide-react";

export default function Register() {
    const router = useRouter();
    const { status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    if (sessionStatus === "loading") {
        return <Loading />;
    }

    return (
        sessionStatus !== "authenticated" && (
            <div className="container py-10">
                <div className="flex flex-row max-md:flex-col-reverse justify-evenly">
                    <div className="left flex flex-col items-center justify-center xl:w-[40%] 2xl:w-[32%] w-[50%] max-md:w-[94%] my-4 mx-auto">
                        <LargeSiteLogo />
                        <div className="flex flex-col my-2">
                            <div className="flex mb-2">
                                <MessageCircleQuestion
                                    size={28}
                                    color="#1b75d0"
                                    strokeWidth={2.5}
                                    className="mr-2"
                                /><p>Get unstuck - ask a question!</p>
                            </div>
                            <div className="flex mb-2">
                                <Trophy
                                    size={28}
                                    color="#1b75d0"
                                    strokeWidth={2.5}
                                    className="mr-2"
                                /><p>Save your favorite posts, tags and filters</p>
                            </div>
                            <div className="flex mb-2">
                                <Newspaper
                                    size={28}
                                    color="#1b75d0"
                                    strokeWidth={2.5}
                                    className="mr-2"
                                /><p>Answer questions and earn reputation</p>
                            </div>
                        </div>
                        <p className="text-[var(--grey-fg)] text-sm text-center">Collaborate and share knowledge with a private group for FREE.</p>
                    </div>
                    <div className="auth-card lg:p-8 p-6 max-md:w-[94%] xl:w-[40%] 2xl:w-[32%] w-[50%] text-center">
                        <b>
                            <TypographyH1 title="Create your account" />
                        </b>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        )
    );
}
