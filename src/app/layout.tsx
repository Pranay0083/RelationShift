import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RelationShift",
  description: "Automate your DMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${jakarta.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ClerkProvider>
            <ReactQueryProvider>
              {children}
              <Toaster />
            </ReactQueryProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
