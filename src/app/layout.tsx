import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/profiles/dev/index.css";
const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" data-profile="dev">
      <body className={`${fira.variable} antialiased`}>{children}</body>
    </html>
  );
}
