import "./globals.css";
import Navbar from "./constants/Navbar";
import Footer from "./constants/Footer";
import ScrollIndicator from "./home/components/ScrollIndicator";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Emmanuel Oguntolu — Software Engineer",
  description: "A portfolio that showcases Emmanuel Oguntolu",
  openGraph: {
    title: "Emmanuel Oguntolu — Software Engineer",
    description: "A Software Engineer help founders and teams ship faster, look better, and grow further — with software solutions",
    url: "https://oguntolu-emmanuel.com",
    images: [{ url: "/images/me-2.jpeg" }],
  },
}

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