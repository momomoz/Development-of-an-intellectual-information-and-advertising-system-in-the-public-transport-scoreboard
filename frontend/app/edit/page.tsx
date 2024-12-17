"use client"
import { useState, useEffect } from "react";

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
}

export default function Edit() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [user, setUser] = useState<User>({
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        role: "Admin",
    });

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        role: user.role,
    });

    useEffect(() => {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add logic to submit form data (e.g., via API call)
        alert("User data saved!");
    };

    return (
        <div
            className={`min-h-screen p-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
        >
            <h1
                className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-green-400" : "text-green-600"}`}
            >
                Edit User
            </h1>

            <form
                onSubmit={handleSubmit}
                className={`space-y-4 max-w-lg mx-auto ${isDarkMode ? "bg-gray-800 p-6 rounded-lg" : "bg-gray-100 p-6 rounded-lg"
                    }`}
            >
                <div>
                    <label
                        htmlFor="username"
                        className={`block text-sm font-medium ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-lg border ${isDarkMode
                            ? "border-green-600 bg-gray-700 text-white placeholder-gray-400"
                            : "border-green-400 bg-white text-black placeholder-gray-600"
                            }`}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className={`block text-sm font-medium ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-lg border ${isDarkMode
                            ? "border-green-600 bg-gray-700 text-white placeholder-gray-400"
                            : "border-green-400 bg-white text-black placeholder-gray-600"
                            }`} />
                </div>

                <div>
                    <label
                        htmlFor="role"
                        className={`block text-sm font-medium ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                    >
                        Role
                    </label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className={`w-full p-3 rounded-lg border ${isDarkMode
                            ? "border-green-600 bg-gray-700 text-white placeholder-gray-400"
                            : "border-green-400 bg-white text-black placeholder-gray-600"
                            }`} />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 mt-4 rounded-md text-white font-semibold transition duration-300 ${isDarkMode ? "bg-green-700 hover:bg-green-600" : "bg-green-500 hover:bg-green-400"
                        }`}
                >
                    Save
                </button>
            </form>
        </div>
    );
}
