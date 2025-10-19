"use client";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <div className="text-center font-bold py-2">{product.title}</div>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        افزودن به سبد خرید 🛒
      </button>
    </div>
  );
};

export default ProductCard;
