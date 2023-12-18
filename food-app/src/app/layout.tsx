import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotificationComp from "../components/Notification";
import NavbarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Ordering App",
  description: "andry ariadi food ordering app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NotificationComp />
          <NavbarComp />
          {children}
          <FooterComp />
        </div>
      </body>
    </html>
  );
}
