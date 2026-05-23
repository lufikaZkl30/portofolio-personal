import type { Metadata } from "next";
import { Inter, Press_Start_2P, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart2P = Press_Start_2P({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-press-start" 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "600", "700"]
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323"
});

export const metadata: Metadata = {
  title: "Lufika Ayu Fatimah | Web Developer - Portfolio",
  description: "UI/UX Designer & Front-End Developer & AI Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${pressStart2P.variable} ${spaceGrotesk.variable} ${vt323.variable} font-sans bg-[#FDFBF7] text-[#2C3E50] overflow-x-hidden relative cursor-crosshair`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
