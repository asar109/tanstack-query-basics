import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toastProvider";
import TanStackProvider from "@/providers/tanstack-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TanStack query",
  description: "Basics of tanStack query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
        <ToastProvider />
        {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
