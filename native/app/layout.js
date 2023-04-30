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
      <body className={`${inter.className} text-justify h-screen w-4/5 flex items-center mx-auto p-0 m-0 bg-black bg-radial-gradient bg-size-50 text-white`}>
        {children}
      </body>
    </html>
  );
}