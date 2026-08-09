import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Training & Upskilling Programs",
  description:
    "Accredian Enterprise partners with organizations to design custom Leadership, Tech & Data, Gen-AI, and Fintech upskilling programs for enterprise teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}