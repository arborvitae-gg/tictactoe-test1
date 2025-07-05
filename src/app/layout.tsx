import "./globals.css";

import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "Test 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
