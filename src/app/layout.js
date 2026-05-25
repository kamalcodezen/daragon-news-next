import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"])


import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["devanagari"],
  weight: ["500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Dragon News",
  description: "India best news portal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme=""
      className={`${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>

    </html>
  );
}
