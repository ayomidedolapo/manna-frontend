import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "./components/providers/smooth-scroll";  

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manna",
  description: "Fresh farm products at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
  <SmoothScroll>{children}</SmoothScroll>
</body>
    </html>
  );
}