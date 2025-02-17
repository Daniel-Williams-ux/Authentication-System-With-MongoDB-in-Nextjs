"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log("Signup clicked!", user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>

      <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block text-lg mb-1" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full p-2 mb-4 rounded-md text-black"
          placeholder="Enter username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <label className="block text-lg mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-2 mb-4 rounded-md text-black"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label className="block text-lg mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full p-2 mb-6 rounded-md text-black"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={onSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
