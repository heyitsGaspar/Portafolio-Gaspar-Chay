import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Loader from "@/app/components/Loader";
import Cursor from "@/app/components/Cursor";
import SmoothScroll from "@/app/components/SmoothScroll";
import Providers from "@/app/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Gaspar Chay | Full Stack Developer",
  description:
    "Full Stack Developer enfocado en apps web escalables y de alto rendimiento con React, Next.js, Node.js y PostgreSQL.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" suppressHydrationWarning className={`dark ${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
        <Loader />
        <Cursor />
        <SmoothScroll />
        {children}
        </Providers>
      </body>
    </html>
  );
}
