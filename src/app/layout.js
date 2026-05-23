import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


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
      </body>
    </html>
  );
}
