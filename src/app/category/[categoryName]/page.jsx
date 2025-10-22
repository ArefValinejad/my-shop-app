"use client";

import products from "../../../../Mock/data";
import { useCart } from "../../context/CartContext";
import { use } from "react";

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const category = decodeURIComponent(unwrappedParams.categoryName);

  const { addToCart } = useCart();

  const normalize = (str) => str?.toString().trim().toLowerCase();

  const filtered = products.filter((p) =>
    normalize(p.category).includes(normalize(category))
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">محصولات دسته: {category}</h1>

      {filtered.length === 0 ? (
        <p className="text-center text-red-500">محصولی یافت نشد.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="p-2 shadow rounded bg-white flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-medium text-center">{product.name}</h3>
              <p className="text-center text-gray-600">{product.price}</p>

              {/* دکمه افزودن به سبد خرید */}
              <button
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={() => addToCart(product)}
              >
                افزودن به سبد خرید 🛒
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
