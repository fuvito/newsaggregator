import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";
/*import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS*/
/*
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';
*/

import NavBar from "@/app/NavBar";
import {PrimeReactProvider} from "primereact/api";
import BootstrapClient from "@/app/BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <PrimeReactProvider>
        <BootstrapClient />
        <NavBar></NavBar>
        <main>
          {children}
        </main>
      </PrimeReactProvider>
    </body>
    </html>
  );
}
