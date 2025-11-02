"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 p-4 shadow-md gap-4 z-50">
      <div className="flex items-center justify-between gap-4">
        {/* سمت چپ: لوگو */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer order-1"
        >
          <span className="text-2xl">🛍️</span>
          <span className="text-lg font-bold text-gray-800">
            فروشگاه کیف و کفش لوکس
          </span>
        </Link>

        {/* وسط: دکمه‌ها */}
        <div className="flex gap-6 justify-start flex-grow order-2">
          <Link
            href="/"
            className="bg-black text-white p-2 rounded-lg w-28 text-center cursor-pointer hover:bg-gray-800 transition"
          >
            صفحه اصلی
          </Link>
          <Link
            href="/category/کیف"
            className="bg-black text-white p-2 rounded-lg w-28 text-center cursor-pointer hover:bg-gray-800 transition"
          >
            کیف
          </Link>
          <Link
            href="/category/کفش"
            className="bg-black text-white p-2 rounded-lg w-28 text-center cursor-pointer hover:bg-gray-800 transition"
          >
            کفش
          </Link>
        </div>

        {/* سمت راست: سرچ و آیکون‌ها */}
        <div className="flex items-center gap-4 order-3">
          {/* باکس جستجو */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white flex-row-reverse">
            <button className="bg-black p-2" onClick={handleSearch}>
              <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            </button>
            <input
              type="text"
              placeholder="جستجو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="flex-grow px-4 py-2 outline-none text-sm text-right"
            />
          </div>

          {/* آیکون ورود به حساب کاربری */}
          <Link href="/login">
            <UserIcon className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
          </Link>

          {/* آیکون سبد خرید */}
          <Link href="/cart" className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-black cursor-pointer hover:text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
