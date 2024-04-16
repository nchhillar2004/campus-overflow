"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import SidebarButton from "./sidebar-buttons";

export default function Sidebar(props: { selectedOption: string }) {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(props.selectedOption);
  }, [props.selectedOption]);

  return (
    <aside className="desktop-menu sticky bg-background z-10 h-[100vh] w-fit top-0 flex">
      <div className="flex flex-col w-[180px] py-4 pl-8 sticky">
        <nav>
          <SidebarButton
            name="Home"
            href="/top"
            selected={selectedOption === "home"}
          />
          <SidebarButton
            name="Questions"
            href="/questions"
            selected={selectedOption === "questions"}
          />
          <SidebarButton
            name="Users"
            href="/u"
            selected={selectedOption === "users"}
          />
          <SidebarButton
            name="Posts"
            href="/posts"
            selected={selectedOption === "posts"}
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
