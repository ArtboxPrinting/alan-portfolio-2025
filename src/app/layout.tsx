import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alan Moss - Senior Full-Stack Developer",
  description: "Experienced developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. Building modern web applications with automation expertise.",
  keywords: "Full-Stack Developer, React Developer, Next.js Expert, TypeScript, Node.js, PostgreSQL, Web Automation, Victoria BC",
  authors: [{ name: "Alan Moss", url: "mailto:alan@artboxprinting.com" }],
  creator: "Alan Moss",
  publisher: "Alan Moss",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alanmoss.dev",
    title: "Alan Moss - Senior Full-Stack Developer",
    description: "Experienced developer specializing in modern web technologies and automation.",
    siteName: "Alan Moss Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alan Moss - Senior Full-Stack Developer",
    description: "Experienced developer specializing in modern web technologies and automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}