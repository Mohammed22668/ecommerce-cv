"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

// export const metadata: Metadata = {
//   title: "Meta Ecommerce",
//   description: "Generated by Metalux.tech",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState<any[]>([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
