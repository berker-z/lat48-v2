import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Lat48",
  description: "Consulting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-lat-bg text-lat-prim flex flex-col min-h-screen font-ubuntu">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
