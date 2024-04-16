"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Loading } from "@/components/loading";
import { TypographyH1 } from "@/components/typography";
import { LoginForm } from "@/components/forms/login-form";

export default function Login() {
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
                <div className="auth-card max-md:w-[94%] w-[50%] xl:w-[35%] 2xl:w-[28%] lg:w-[40%] text-center">
                    <b>
                        <TypographyH1 title="Login" />
                    </b>
                    <LoginForm />
                </div>
            </div>
        )
    );
}
