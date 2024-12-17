"use client";

import { useState, useEffect } from "react";
import { UserActions } from "../components/UserActions";

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export default function Users() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const users: User[] = [
    { id: 1, username: "john_doe", email: "john@example.com", role: "Admin" },
    { id: 2, username: "jane_smith", email: "jane@example.com", role: "User" },
    { id: 3, username: "alice_brown", email: "alice@example.com", role: "Editor" },
  ];

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-green-400" : "text-green-600"
        }`}
      >
        User List
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead
            className={`${
              isDarkMode ? "bg-gray-800 text-green-400" : "bg-gray-100 text-green-600"
            }`}
          >
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className={`${
                  isDarkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                } transition duration-200`}
              >
                <td className="p-3 border text-center">{user.id}</td>
                <td className="p-3 border">{user.username}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">
                  <UserActions userId={user.id} isDarkMode={isDarkMode} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
