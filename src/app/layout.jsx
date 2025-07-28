"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const RootLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
