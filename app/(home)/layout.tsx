import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "../_components/Header";
import Footer from "../_components/Footer";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Meta Ecommerce",
  description: "Generated by Metalux.tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
