import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* اطلاعات فروشگاه */}
        <div>
          <h2 className="text-xl font-bold mb-2">👜 فروشگاه ما</h2>
          <p className="text-sm text-gray-700">
            بهترین فروشگاه اینترنتی کیف و کفش با تضمین کیفیت و ارسال سریع.
          </p>
        </div>

        {/* لینک‌ها */}
        <div className="text-right">
          <h2 className="text-lg font-bold mb-3">لینک‌های مفید</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                سؤالات متداول
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="text-right">
          <h2 className="text-lg font-bold mb-3">ما را دنبال کنید</h2>
          <div className="flex justify-end gap-4 text-xl">
            <a href="#" className="hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} کلیه حقوق برای فروشگاه محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
