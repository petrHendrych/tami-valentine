import type { Metadata } from "next";
import { Playwrite_VN } from "next/font/google";
import "./globals.css";


const playwriteVN = Playwrite_VN({
  variable: "--font-playwrite-mono",
});

export const metadata: Metadata = {
  title: "💖 My Valentine - Tamča 💖",
  description: "Webpage with an important question for my girlfriend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playwriteVN.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
