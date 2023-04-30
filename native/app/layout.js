import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export const metadata = {
  title: '🚀 Native Language',
  description: 'Native Language App 🚀',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-1/2 mx-auto h-screen`}>
        {children}
      </body>
    </html>
  )
}
