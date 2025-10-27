"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import products from "../../../Mock/data";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = decodeURIComponent(searchParams.get("q") || "");

  const normalize = (str) => str?.toString().trim().toLowerCase();
  const filtered = products.filter(
    (p) =>
      normalize(p.name).includes(normalize(query)) ||
      normalize(p.category).includes(normalize(query))
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">نتایج جستجو برای: {query}</h1>
      {filtered.length === 0 ? (
        <p className="text-center text-red-500">محصولی یافت نشد.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <div key={product.id} className="p-2 shadow rounded bg-white">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={160}
                className="object-cover rounded w-full h-40"
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
