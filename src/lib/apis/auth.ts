"use server";

import { cookies } from "next/headers";

// Login
export async function logIn(data: { email: string; password: string }) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await result.json();

    if (payload?.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", payload.token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
        secure: process.env.NODE_ENV === "production",
      });
    }

    return payload;
  } catch (error) {
    throw new Error("Login failed. Please try again.");
  }
}

// Register
export async function Register(data: {
  email: string;
  password: string;
  name?: string;
}) {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = await result.json();
    return payload;
  } catch (error) {
    throw new Error("Registration failed. Please try again.");
  }
}

// Logout
export async function Logout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}


