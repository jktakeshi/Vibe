import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const font = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotfy Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <SideBar>
            {children}
          </SideBar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
