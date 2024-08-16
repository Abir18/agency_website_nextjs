import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Agency | Build Your Dream",
  description: "We discover your digital solution"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
