import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// setting this here to bypass SSL certificate validation, consider mkcert for local development?
// original error: [Error: self-signed certificate] { code: 'DEPTH_ZERO_SELF_SIGNED_CERT' }
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RecipeShack - Find and share amazing recipes",
  description: "Find and share amazing recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <main className="mx-auto px-96">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          
          <main>{children}</main>       
        </body>
      </main>
    </html>
  );
}
