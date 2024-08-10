import Sidebar from "./sidebar/sidebar";

export default function SidebarLayout({
    children,
    selectedOption,
}: {
    children: React.ReactNode;
    selectedOption: string;
}) {
    return (
        <div className="flex items-start justify-between">
            <Sidebar selectedOption={selectedOption} />
            <main className="flex-1 w-full px-4 py-4 lg:py-5 lg:px-6 min-h-[100vh]">
                {children}
            </main>
        </div>
    );
}
