import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { MouseBubble } from "@/components/mouse-bubble";
import "./globals.css";

export const metadata: Metadata = {
    title: "Alex Chen - Frontend Developer",
    description:
        "Frontend Developer specializing in React, TypeScript, and modern web technologies. Creating exceptional digital experiences.",
    generator: "v0.app",
    keywords: [
        "Frontend Developer",
        "React",
        "TypeScript",
        "Web Development",
        "UI/UX",
    ],
    authors: [{ name: "Alex Chen" }],
    openGraph: {
        title: "Alex Chen - Frontend Developer",
        description:
            "Frontend Developer specializing in React, TypeScript, and modern web technologies.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
            >
                <Suspense fallback={null}>{children}</Suspense>
                <MouseBubble />
                <Analytics />
            </body>
        </html>
    );
}
