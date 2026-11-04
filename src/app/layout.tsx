import type { Metadata } from "next";
import { Fira_Code, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/profiles/dev/index.css";
const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
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
    <html
      lang="en"
      data-theme="dark"
      data-profile="dev"
      data-font="sans"
      className={`${fira.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
