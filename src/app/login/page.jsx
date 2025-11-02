"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login();
      setSuccess(true);
      setTimeout(() => router.push("/"), 2000);
    }
  };

  return (
    <div className="pt-20 flex justify-center items-center min-h-screen bg-[#f4f3f2] relative">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md relative">
        {success && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-xl w-[90%] text-center z-50 animate-fade-in">
            ✅ ورود با موفقیت انجام شد!
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          ورود به حساب کاربری
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">ایمیل</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">رمز عبور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-black rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="******"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
