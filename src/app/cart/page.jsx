"use client";

import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartCount, setCartCount } = useCart();

  const handleClearCart = () => {
    setCartCount(0);
    localStorage.removeItem("cart-count");
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">🛒 سبد خرید</h1>
      <p className="text-lg mb-6">تعداد محصولات در سبد: {cartCount}</p>
      <button
        onClick={handleClearCart}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        خالی کردن سبد خرید
      </button>
    </div>
  );
};

export default CartPage;
