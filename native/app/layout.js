import { Jost } from "next/font/google";
import '../global.css'

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "AL Native",
  description: "Albanian Alphabet App 🚀",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} text-justify h-screen w-11/12 flex items-center mx-auto p-0 m-0 bg-black bg-radial-gradient bg-size-50 text-white`}>
        {children}
      </body>
    </html>
  );
}