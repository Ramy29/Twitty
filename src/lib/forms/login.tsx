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
import { logIn } from "../apis/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { loginSchema, LoginValues } from "../scheme/auth-scheme";

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginValues) => {
    try {
      const response = await logIn(data);

      if (response.message === "success" && response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-[580px] h-[500px] mx-7 flex flex-col justify-center items-center">
      <div className="flex">
        <Twitter size={40} className="-mr-8" />
        <div className="w-48 h-11 text-center">
          <h1 className="text-primary">Twitter</h1>
          <h3 className="text-muted-foreground">Tech Company</h3>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-5">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-96"
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-96"
                    type="password"
                    placeholder="*******"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Link href="/auth/register">
            <p className="text-chart-1 cursor-pointer text-sm mb-3">
              Forget Password?
            </p>
          </Link>

          <Button className="w-full">Log In</Button>

          <p className="text-primary text-center cursor-pointer text-sm">
            Have not account?
            <Link href="/auth/register">
              <span className="text-chart-1"> Register</span>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}

