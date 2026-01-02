"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
// import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  // Regex patterns
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "userName is required";
    if (!emailRegex.test(formData.email))
      newErrors.email = "inValid email format";
    if (!passwordRegex.test(formData.password))
      newErrors.password =
        "Password must have uppercase, lowercase, number & special char";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      // if (res.ok && data?.success==true) {
      if (data.success === true) {
        toast.success("Registration successful!");
        setTimeout(() => router.push("/login"), 1000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Register
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/*.............. Username ..................*/}

            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>

            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              required
              value={formData.username}
              // onChange={handleChange}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            {errors.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
            {/*.............. email ..................*/}
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
            {/*.............. password ..................*/}
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
            {/* confirm passWord  */}
            <label htmlFor="confirmPassword" className="block font-medium mb-1">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-blue-500"
            />

            {errors.confirmPassword && (
              <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {loading ? (
                <TailSpin height={24} width={24} color="#fff" />
              ) : (
                "Register"
              )}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>

          <ToastContainer position="top-center" autoClose={2500} />
        </div>
      </div>
      {/* <ToastContainer position="top-center" autoClose={2500} /> */}
    </div>
  );
}
