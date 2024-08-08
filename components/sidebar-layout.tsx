import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Loading } from "./loading";
import Sidebar from "./sidebar/sidebar";
import { Suspense } from "react";
import { ScrollBar } from "./ui/scroll-area";

export default function SidebarLayout({
    children,
    selectedOption,
}: {
    children: React.ReactNode;
    selectedOption: string;
}) {
    return (
        <div className="flex">
            <Sidebar selectedOption={selectedOption} />

            <main className="w-full px-4 py-4 lg:py-5 lg:px-6">
                <ScrollArea>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                    <ScrollBar />
                </ScrollArea>
            </main>
        </div>
    );
}
