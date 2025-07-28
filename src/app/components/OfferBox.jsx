const OfferBox = () => {
  const products = [
    {
      id: 1,
      title: "کفش اسپرت مردانه",
      image: "./N.webp",
      oldPrice: 850000,
      newPrice: 590000,
    },
    {
      id: 2,
      title: "کیف زنانه چرم",
      image: "./Bag1.jpeg",
      oldPrice: 720000,
      newPrice: 525000,
    },
    {
      id: 3,
      title: "کیف پول مردانه",
      image: "./WalletMen.jpg",
      oldPrice: 350000,
      newPrice: 290000,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-right mb-4 text-gray-800">
        😍😍😍محصولات تخفیف‌خورده
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const discountPercent = Math.round(
            ((product.oldPrice - product.newPrice) / product.oldPrice) * 100
          );

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden cursor-pointer group border"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  ٪{discountPercent} تخفیف
                </span>
              </div>
              <div className="p-3 text-right">
                <h3 className="font-bold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice.toLocaleString()} تومان
                  </span>
                  <span className="text-green-600 font-semibold text-lg">
                    {product.newPrice.toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfferBox;
