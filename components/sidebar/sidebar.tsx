"use client";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import SidebarButton from "./sidebar-buttons";
import { Code, HelpCircle, Home, Info, LifeBuoy, Newspaper, Users } from "lucide-react";

export default function Sidebar(props: { selectedOption: string }) {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(props.selectedOption);
  }, [props.selectedOption]);

  return (
    <aside className="desktop-menu sticky bg-background z-10 h-[100vh] w-fit top-0 flex">
      <div className="flex flex-col w-fit max-w-[200px] py-4 pl-8 sticky">
        <nav>
          <SidebarButton
            name="Home"
            href="/top"
            selected={selectedOption === "home"}
            icon={<Home/>}
          />
          <SidebarButton
            name="Questions"
            href="/questions"
            selected={selectedOption === "questions"}
            icon={<HelpCircle/>}
          />
          <SidebarButton
            name="Users"
            href="/u"
            selected={selectedOption === "users"}
            icon={<Users/>}
          />
          <SidebarButton
            name="Posts"
            href="/posts"
            selected={selectedOption === "posts"}
            icon={<Newspaper/>}
          />
        </nav>
        <Separator orientation="horizontal" className="my-5" />
        <nav>
        <SidebarButton
            name="About"
            href="/about"
            selected={selectedOption === "about"}
            icon={<Info/>}
          />
          <SidebarButton
            name="Help & Support"
            href="/help"
            selected={selectedOption === "help"}
            icon={<LifeBuoy/>}
          />
          <SidebarButton
            name="Developer"
            href="/developer"
            selected={selectedOption === "developer"}
            icon={<Code/>}
          />
        </nav>
      </div>
      <Separator orientation="vertical" />
    </aside>
  );
}
