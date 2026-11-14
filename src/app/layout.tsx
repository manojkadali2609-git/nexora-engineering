import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA Engineering",
  description:
    "Automotive systems, electric mobility and engineering innovation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
