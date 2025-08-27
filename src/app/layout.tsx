import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { SonnerToaster } from "@/lib/providers/toaster";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata :Metadata  = {
  title: "Twitty | Connect, Share & Explore",
  description:
    "Twitty 🐦 — a creative social hub where you can share your thoughts, connect with others, and explore trending ideas. Join the conversation today!",
  keywords: [
    "Twitty",
    "Twitter Clone",
    "Social Media",
    "Microblogging",
    "Connect",
    "Share",
    "Explore",
  ],
  authors: [{ name: "Twitty Team", url: "https://twitty.com" }],
  openGraph: {
    title: "Twitty | Connect, Share & Explore",
    description:
      "Welcome to Twitty 🐦 — your social hub for ideas, connections, and creativity.",
    url: "https://twitty.com",
    siteName: "Twitty",
   
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitty | Connect, Share & Explore",
    description:
      "Twitty 🐦 — a creative social hub where you can share your thoughts, connect with others, and explore trending ideas.",
    creator: "@twitty",
  },
  icons: {
      icon: "/twitty.png",          // أيقونة أساسية
    shortcut: "/twitty.png",      // للمتصفحات
    apple: "/twitty.png",   
  },
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SonnerToaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
