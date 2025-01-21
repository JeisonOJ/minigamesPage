import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MiniGames",
  description: "Minigames for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased backgroundImage`}
      >
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center background-image">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-950">
                🎮 Mini Games Collection
                </h1>
                <ul>
                  <li>
                    <Link href="/pages/coinflip">Coin Flip Game</Link>
                  </li>
                  <li>
                    <Link href="/pages/numberguessing">
                      Number Guessing Game
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/rockpaperscissors">
                      Rock Paper Scissors Game
                    </Link>
                  </li>
                </ul>
                {children}
              </div>
            </main>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
