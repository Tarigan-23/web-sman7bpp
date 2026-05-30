import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// 1. Impor komponen Navbar dan Hakcipta dari foldernya
import Navbar from "../components/Navbar"
import Hakcipta from "../components/Hakcipta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SMA Negeri 7 Balikpapan",
  description: "Website Resmi SMA Negeri 7 Balikpapan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* 1. Pasang Navbar di paling atas */}
        <Navbar />
        
           <main>{children}</main>
        
        {/* 3. Pasang Hakcipta di paling bawah */}
        <Hakcipta />
      </body>
    </html>
  )
}
