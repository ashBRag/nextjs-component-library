"use client";
import { Geist, Geist_Mono, Major_Mono_Display } from "next/font/google";
import "./globals.css";
import CircuitZap from "@/components/layout/CircuitZap";
import { Fira_Code } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../components/store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira",
  display: "swap",
});

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400", // only one weight available
  variable: "--font-major",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
            refetchOnWindowFocus: false,
            retry: 3,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },
        },
      })
  );
  return (
    <html lang="en">
      <body className={`${fira.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {/* <CircuitZap /> */}
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
