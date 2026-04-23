import "./globals.css";
import Navbar from "./constants/Navbar";
import Footer from "./constants/Footer";
import ScrollIndicator from "./home/components/ScrollIndicator";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Portfolio",
  description: "A portfolio that showcases Emmanuel Oguntolu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar/>
        {children}
        <Footer/>
        <Analytics/>
        <ScrollIndicator/>
      </body>
    </html>
  )
}