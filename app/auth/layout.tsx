export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main className="w-full px-6 py-4 lg:py-5">{children}</main>;
}
