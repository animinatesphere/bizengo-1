import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

import type { Metadata } from "next";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalBottomNav from "@/components/ConditionalBottomNav";

export const metadata: Metadata = {
    title: "Citymart | Roots & Squares",
    description: "Find products all over the country, find stores, place orders, and receive them quickly",
    icons: {
        icon: "/images/favicon.png",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="flex flex-col min-h-screen ">
                <ErrorBoundary>
                    <ScrollToTop />
                    <main>
                        <ConditionalHeader />
                        <div className="w-full min-h-screen overflow-x-hidden md:pb-16">
                            {children}
                        </div>
                    </main>
                    <ConditionalBottomNav />
                </ErrorBoundary>
            </body>
        </html>
    );
}
