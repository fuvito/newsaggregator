import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";
import NavBar from "@/app/NavBar";
import BootstrapClient from "@/app/BootstrapClient";
import {generateDatabase} from "./data/DatabaseGenerator";
import {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Aggregator",
  description: "StateAffairs TakeHome Assignment",
};

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: ReactNode;
}>) {

  await generateDatabase();

  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <BootstrapClient/>
    <NavBar></NavBar>
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}
