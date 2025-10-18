import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkPapers.ai",
  description: "Automate your year-end accounts preparation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${geist.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
