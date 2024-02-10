"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import SidebarButton from "./sidebar-buttons";

export default function Sidebar() {
    const [selectedOption, setSelectedOption] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("selectedOption") || "home";
        } else if (typeof sessionStorage !== "undefined") {
            sessionStorage.getItem("selectedOption");
        }
        return "";
    });

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        localStorage.setItem("selectedOption", selectedOption);
    }, [selectedOption]);

    return (
        <aside className="desktop-menu sticky bg-background z-10 h-[70vh] w-fit top-0 flex">
            <div className="flex flex-col w-[180px] py-4 pl-8 sticky">
                <nav>
                    <SidebarButton
                        name="Home"
                        href="/top"
                        selected={selectedOption === "home"}
                        onClick={() => handleOptionClick("home")}
                    />
                    <SidebarButton
                        name="Questions"
                        href="/questions"
                        selected={selectedOption === "questions"}
                        onClick={() => handleOptionClick("questions")}
                    />
                    <SidebarButton
                        name="Users"
                        href="/u"
                        selected={selectedOption === "users"}
                        onClick={() => handleOptionClick("users")}
                    />
                    <SidebarButton
                        name="Posts"
                        href="/posts"
                        selected={selectedOption === "posts"}
                        onClick={() => handleOptionClick("posts")}
                    />
                </nav>
                <Separator />
                <nav></nav>
                <Separator />
            </div>
            <Separator orientation="vertical" />
        </aside>
    );
}
