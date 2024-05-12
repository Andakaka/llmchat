import { ChatProvider } from "@/context/chat/provider";
import { FiltersProvider } from "@/context/filters/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ChatProvider>
          <FiltersProvider>
            <div className="w-full h-screen flex flex-row dark:bg-zinc-800">
              {children}
            </div>
          </FiltersProvider>
        </ChatProvider>
      </body>
    </html>
  );
}
