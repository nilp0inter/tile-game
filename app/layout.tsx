import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${inter.className} w-full h-full bg-slate-50 dark:bg-slate-950`}
      >
        {children}
      </body>
    </html>
  )
}
