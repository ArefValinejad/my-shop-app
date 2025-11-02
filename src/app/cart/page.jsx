"use client";

import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();

  const handleCompleteOrder = () => {
    alert("سفارش با موفقیت ثبت شد");
    clearCart();
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">🛒 سبد خرید شما</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">سبد خرید شما خالی است 😢</p>
      ) : (
        <div className="grid gap-6 max-w-3xl mx-auto">
          {cartItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="text-right">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-green-600 font-medium">{item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-4 justify-center mt-6">
            <button
              onClick={handleCompleteOrder}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              تکمیل سفارش
            </button>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              خالی کردن سبد خرید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
