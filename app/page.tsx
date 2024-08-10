import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
    return (
        <div className="home-page w-full px-4 py-4 lg:py-5 lg:px-6">
            <div className="container">
                <div className="flex items-center justify-center flex-col min-h-[100vh]">
                    <h1 className="lg:text-[80px] text-[60px] font-bold dark:text-zinc-200 text-zinc-800">
                        Baba Haridas Financial Services
                    </h1>
                    <Button variant="blue" size="lg" asChild className="mt-8">
                        <Link href="/questions">Get Started</Link>
                    </Button>
                </div>
            </div>
            <Separator orientation="horizontal" className="my-10" />
            <section className="container py-4">
                <div className="flex items-center justify-between lg:flex-row flex-col min-h-[60vh]">
                    <h1 className="lg:text-[60px] lg:text-left text-center text-[40px] lg:w-[48%] font-bold dark:text-zinc-200 text-zinc-800">
                        Explore the world of Finance with No.1 Q & A website
                    </h1>
                    <div className="right lg:w-[48%] text-center">
                        <p className="lg:text-[24px] text-[20px] dark:text-zinc-100 text-zinc-900">
                            Explore the world of Finance with
                            question-and-answering. Ask questions, learn,  help others and share financial knowledge.
                        </p>
                        <Button
                            variant="blue"
                            size="lg"
                            asChild
                            className="mt-4"
                        >
                            <Link href="/questions">Explore questions</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Separator orientation="horizontal" className="my-10" />
            <section className="container py-4">
                <div className="flex items-center justify-between lg:flex-row-reverse flex-col min-h-[60vh]">
                    <h1 className="lg:text-[60px] lg:text-left text-center text-[40px] lg:w-[48%] font-bold dark:text-zinc-200 text-zinc-800">
                        Discover new trends and updates on Finance every second
                    </h1>
                    <div className="right lg:w-[48%] text-center">
                        <p className="lg:text-[24px] text-[20px] dark:text-zinc-100 text-zinc-900">
                            Explore new posts and create post to help the community grow. Share your everyday experience and new updates with everyone in the community.
                        </p>
                        <Button
                            variant="blue"
                            size="lg"
                            asChild
                            className="mt-4"
                        >
                            <Link href="/posts">Explore posts</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Separator orientation="horizontal" className="my-10" />
            <section className="container py-4">
                <div className="flex items-center justify-between lg:flex-row flex-col min-h-[60vh]">
                    <h1 className="lg:text-[60px] lg:text-left text-center text-[40px] lg:w-[48%] font-bold dark:text-zinc-200 text-zinc-800">
                        Create an account today and join the community
                    </h1>
                    <div className="right lg:w-[48%] text-center">
                        <p className="lg:text-[24px] text-[20px] dark:text-zinc-100 text-zinc-900">
                            Join our mission by creating an account and empower the world with your knowledge and help others.
                        </p>
                        <Button
                            variant="blue"
                            size="lg"
                            asChild
                            className="mt-4"
                        >
                            <Link href="/auth/register">Create account</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
