import { Jost } from "next/font/google";
import '../global.css'

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "🚀 Native Language",
  description: "Native Language App 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-0 m-0 bg-[#30336] bg-radial-gradient bg-size-50`}>
        {children}
      </body>
    </html>
  );
}
