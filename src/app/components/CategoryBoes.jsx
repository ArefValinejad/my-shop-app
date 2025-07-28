import Link from "next/link";

const CategoryBoxes = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {/* کفش مردانه */}
      <Link href="/category/کفش%20مردانه">
        <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
          <img
            src="/Photos/MM.jpg"
            alt="کفش مردانه"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="text-center font-bold py-2 text-gray-800">
            کفش مردانه
          </div>
        </div>
      </Link>

      {/* کفش زنانه */}
      <Link href="/category/کفش%20زنانه">
        <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
          <img
            src="/Photos1/W.jpg"
            alt="کفش زنانه"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="text-center font-bold py-2 text-gray-800">
            کفش زنانه
          </div>
        </div>
      </Link>

      {/* کیف زنانه */}
      <Link href="/category/کیف%20زنانه">
        <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
          <img
            src="/Photos2/K.jpg"
            alt="کیف زنانه"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="text-center font-bold py-2 text-gray-800">
            کیف زنانه
          </div>
        </div>
      </Link>

      {/* کیف پول مردانه */}
      <Link href="/category/کیف%20پول%20مردانه">
        <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
          <img
            src="/Photos3/PPP.webp"
            alt="کیف پول مردانه"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="text-center font-bold py-2 text-gray-800">
            کیف پول مردانه
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryBoxes;
