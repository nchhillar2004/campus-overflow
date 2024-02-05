import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";
import SiteConfig from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import { Loading } from "@/components/loading";

const font = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: {
        default: SiteConfig.title,
        template: `%s - ${SiteConfig.title}`,
    },
    metadataBase: new URL(SiteConfig.url),
    description: SiteConfig.description,
    keywords: [
        "BHFS",
        "Baba haridas finance",
        "Delhi",
        "India",
        "Nishant chhillar",
        "Baba haridas financial services",
        "Financial services",
        "Sumit Lohchab",
        "Finance",
    ],
    authors: [
        {
            name: "Nishant Chhillar",
            url: "https://nishantchhillar.tech",
        },
    ],
    creator: "Nishant Chhillar",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SiteConfig.url,
        title: SiteConfig.title,
        description: SiteConfig.description,
        siteName: SiteConfig.title,
        images: [
            {
                url: SiteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: SiteConfig.title,
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
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
                        <Navbar />
                        <Toaster />
                        <main className="min-h-[50%] pt-[50px] h-fit">
                            <div className="bhfs w-full">
                                <Suspense fallback={<Loading />}>
                                    {children}
                                </Suspense>
                            </div>
                        </main>
                        <Footer />
                    </ThemeProvider>
                    <SpeedInsights />
                    <Analytics />
                </AuthProvider>
            </body>
        </html>
    );
}
