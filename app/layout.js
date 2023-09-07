import { Jost } from "next/font/google";
import '../global.css'

const jost = Jost({ subsets: ["latin"] });

const APP_NAME = "Nativify";
const APP_DESCRIPTION = "Learning the alphabet, made easy.";


export const metadata = {
  applicationName: APP_NAME,

  title: {
    default: APP_NAME,
    template: "%s",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
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