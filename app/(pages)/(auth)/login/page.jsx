"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === true) {
        // ..............
        // ....... cookie
        // Authorization
        Cookies.set("token", data.data.accessToken, { expires: 7 });
        // document.cookie = `token=${data.data.accessToken}`;
        // console.log("first");
        // console.log("Token from API:", data.data.accessToken);
        console.log("Token from Cookies:", Cookies.get("token"));

        toast.success("Login successful!");
        setTimeout(() => router.push("/"), 500);
      } else {
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300"
          >
            {loading ? (
              <TailSpin height={24} width={24} color="#fff" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </p>

        <ToastContainer position="top-center" autoClose={2500} />
      </div>
    </div>
  );
}
