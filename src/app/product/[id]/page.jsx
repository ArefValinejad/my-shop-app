"use client";

import products from "../../../../Mock/data";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";

const ProductByIdPage = () => {
  const { cartCount, setCartCount } = useCart();
  const params = useParams();
  const { id } = params;

  const product = products.find((p) => p.id === +id);

  if (!product) {
    return <div className="text-center p-10">محصول مورد نظر پیدا نشد 😢</div>;
  }

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover mx-auto"
      />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-green-600 font-semibold mt-2">{product.price}</p>

      <button
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={handleAddToCart}
      >
        افزودن به سبد خرید 🛒
      </button>
    </div>
  );
};

export default ProductByIdPage;
