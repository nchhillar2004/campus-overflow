import Sidebar from "./sidebar/sidebar";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="w-full px-6 py-4 lg:py-5">
            {children}
            </main>
        </div>
    );
}
