"use client";

import products from "../../../../Mock/data";

export default function CategoryPage({ params }) {
  const category = decodeURIComponent(params.categoryName);

  // نرمال‌سازی برای مقایسه دقیق‌تر
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
            <div key={product.id} className="p-2 shadow rounded bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-2 font-medium text-center">{product.name}</h3>
              <p className="text-center text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
