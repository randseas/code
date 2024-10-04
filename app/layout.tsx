"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "auto" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Code</title>
        <meta
          name="description"
          title={`A code editor inspired by "Microsoft Visual Studio Code""`}
        />
      </head>
      <body
        className={`${inter.className} h-screen min-h-screen antialiased dark:bg-dark-background dark:text-dark-text bg-light-background text-light-text`}
      >
        {children}
      </body>
    </html>
  );
}
