// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
// import Cursor from './components/Cursor'

const inter = Inter({
  variable: "--font-geist-sans", // you can keep your existing CSS variable name
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Askulo | Threejs Developer",
  description: "Generating 3D models and animations with Three.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        {/* <Cursor /> */}
        {children}
      </body>
    </html>
  );
}
