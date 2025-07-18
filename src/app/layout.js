import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/component/ThemeProvider";
import Navbar from "@/component/Navbar";
import { Outfit } from 'next/font/google';
import Footer from "@/component/Footer";


const outfit = Outfit({
  subsets: ['latin']
});
 

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={outfit.className} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
