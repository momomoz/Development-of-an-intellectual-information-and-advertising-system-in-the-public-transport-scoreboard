"use client";

import { useState, useEffect } from "react";

export default function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Проверка текущей темы пользователя
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg ${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      >
        <h1
          className={`text-2xl font-bold mb-6 text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Login
        </h1>
        <form action="/auth/login" method="post" className="space-y-4">
          {/* Поле Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className={`w-full p-3 rounded-lg border ${
              isDarkMode
                ? "border-green-600 bg-gray-700 text-white placeholder-gray-400"
                : "border-green-400 bg-white text-black placeholder-gray-600"
            }`}
          />
          {/* Поле Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={`w-full p-3 rounded-lg border ${
              isDarkMode
                ? "border-green-600 bg-gray-700 text-white placeholder-gray-400"
                : "border-green-400 bg-white text-black placeholder-gray-600"
            }`}
          />
          {/* Кнопка Login */}
          <button
            type="submit"
            className={`w-full p-3 rounded-lg text-white font-semibold ${
              isDarkMode
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-500 hover:bg-green-600"
            } transition duration-300`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
