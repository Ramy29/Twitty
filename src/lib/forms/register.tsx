"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Twitter } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Register } from "../apis/auth";
import { registerSchema, RegisterValues } from "../scheme/auth-scheme";

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
  });

  const onSubmit = async (data: RegisterValues) => {
    const response = await Register(data);
    console.log("Register Response:", response);

    if (response.message === "success" && response.token) {
      localStorage.setItem("token", response.token);
      toast.success("Register successful!");
      router.push("/auth/login");
    } else {
      toast.error("Register failed. Please try again.");
    }
  };

  return (
    <div className="w-[580px] h-[500px] mx-7 flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <Twitter size={40} />
        <div className="text-center">
          <h1 className="text-primary font-bold">Twitter</h1>
          <h3 className="text-muted-foreground">Tech Company</h3>
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 my-5 w-full max-w-md"
        >
          {/* Name */}
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Full name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            name="rePassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Register
          </Button>

          <p className="text-primary text-center cursor-pointer text-sm">
            Have an account?{" "}
            <Link href="/auth/login">
              <span className="text-chart-1">Log In</span>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
