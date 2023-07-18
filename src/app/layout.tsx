import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']

})

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Find your favorite song',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`bg-zinc-900 text-zinc-50 roboto.className ${roboto.className}`}>{children}</body>
    </html>
  )
}
