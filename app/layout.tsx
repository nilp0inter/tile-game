"use client"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full w-full overscroll-none">
      <head>
        <title>ExponenTile</title>
        <link rel="manifest" href="manifest.json" />
        <meta
          name="theme-color"
          content="#020617"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="theme-color" content="#f8fafc" />
      </head>
      <body
        className={`${inter.className} h-full w-full overscroll-none bg-slate-50 dark:bg-slate-950`}
      >
        {children}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ef75d67ce4a04caca98866a9a7198357"}'
        ></script>
      </body>
    </html>
  )
}
