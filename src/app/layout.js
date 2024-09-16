import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import TransistionProvider from "./components/TransistionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "shadha deepak portfolio",
  description: "the best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <TransistionProvider>{children}</TransistionProvider>
        
        </body>
    </html>
  );
}
