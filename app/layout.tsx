import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import SubNavbar from "@/components/navbar/sub-navbar";
import "animate.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";

const font = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const CompanyName = process.env.COMPANY_NAME;
export const CompanyDescription = process.env.COMPANY_DESCRIPTION;

export const metadata: Metadata = {
    title: `${CompanyName}`,
    description: `${CompanyDescription}`,
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <AuthProvider session={session}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                    >
                        <header>
                            <Navbar />
                            <SubNavbar />
                        </header>
                        <Toaster />
                        <main className="p-5 h-fit">
                            <div className="bhfs w-[90%] h-full m-auto">
                                {children}
                            </div>
                        </main>
                        <Footer />
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
