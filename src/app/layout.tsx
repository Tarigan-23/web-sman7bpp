import type { Metadata, Viewport } from "next"; 
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Hakcipta from "../components/Hakcipta";

const inter = Inter({ subsets: ["latin"] });

// 2. Konfigurasi Viewport untuk Mobile
export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

// 3. Konfigurasi SEO Metadata
export const metadata: Metadata = {
  title: "SMA Negeri 7 Balikpapan",
  description: "Website Resmi SMA Negeri 7 Balikpapan",
};

// 4. Root Layout Utama
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Hakcipta />
      </body>
    </html>
  );
}