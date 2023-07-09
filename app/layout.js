import { Jost } from "next/font/google";
import '../global.css'

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Nativify",
  description: "Albanian Alphabet App 🚀",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} h-screen w-5/6 justify-center flex items-center mx-auto bg-black bg-radial-gradient bg-size-50 text-white`}>
        {children}
      </body>
    </html>
  );
}