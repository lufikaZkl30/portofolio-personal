import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart2P = Press_Start_2P({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-press-start" 
});

export const metadata: Metadata = {
  title: "Lufika Ayu Fatimah | Cyber Portfolio",
  description: "UI/UX Designer & Front-End Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${pressStart2P.variable} font-sans bg-[#050816] text-white overflow-x-hidden relative`} suppressHydrationWarning>
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-[-2] bg-cyber-grid pointer-events-none"></div>
        <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[100px] z-[-1] pointer-events-none"></div>
        <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[100px] z-[-1] pointer-events-none"></div>
        
        {children}
      </body>
    </html>
  );
}
