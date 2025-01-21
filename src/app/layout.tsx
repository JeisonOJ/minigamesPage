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
        className={`${geistSans.variable} ${geistMono.variable} antialiased backgroundImage bg-cover backgroundPosition`}
      >
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                  🎮 Mini Games Collection
                </h1>
                <ul className="flex gap-4 flex-wrap justify-center">
                  <li>
                    <Link
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      href="/pages/coinflip"
                    >
                      Coin Flip Game
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      href="/pages/numberguessing"
                    >
                      Number Guessing Game
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      href="/pages/rockpaperscissors"
                    >
                      Rock Paper Scissors Game
                    </Link>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <div className="mt-8 p-6 rounded-lg shadow-md">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
