import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FooterTop from "../components/SubFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website",
  description: "Building things that matter, one page at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <FooterTop />
        <Footer />
      </body>
    </html>
  );
}