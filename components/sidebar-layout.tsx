import Sidebar from "./sidebar/sidebar";

export default function SidebarLayout({
    children,
    selectedOption,
}: {
    children: React.ReactNode;
    selectedOption: string;
}) {
    return (
        <div className="relative flex">
            <Sidebar selectedOption={selectedOption} />
            <main className="w-full px-4 py-4 lg:py-5 lg:pr-6 lg:pl-[14.5rem] min-h-[100vh]">{children}</main>
        </div>
    );
}
