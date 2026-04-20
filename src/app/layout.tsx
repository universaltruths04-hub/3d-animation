import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Montserrat, Quicksand, Space_Grotesk, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-rounded",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geometric",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-modern-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heavenly Nuravia | Premium Beauty & Lifestyle",
  description: "Where Heavenly Beauty Meets Everyday Glow. Premium skincare, makeup, and sneakers for every woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        ${montserrat.variable}
        ${quicksand.variable}
        ${spaceGrotesk.variable}
        ${dancingScript.variable}
        ${inter.variable}
        h-full antialiased
      `}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
