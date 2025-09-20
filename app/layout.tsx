import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { MouseBubble } from "@/components/mouse-bubble";
import "./globals.css";

export const metadata: Metadata = {
    title: "Srijan Das - Full Stack Developer",
    description:
        "Full Stack Developer with over 3 years of experience delivering scalable web solutions using the MERN stack. Skilled in cloud infrastructure, CI/CD pipelines, and DevOps tools.",
    generator: "v0.app",
    keywords: [
        "Full Stack Developer",
        "React",
        "Node.js",
        "MERN Stack",
        "Web Development",
        "JavaScript",
        "TypeScript",
        "AWS",
        "Azure",
        "DevOps",
    ],
    authors: [{ name: "Srijan Das" }],
    openGraph: {
        title: "Srijan Das - Full Stack Developer",
        description:
            "Full Stack Developer with over 3 years of experience delivering scalable web solutions using the MERN stack.",
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
