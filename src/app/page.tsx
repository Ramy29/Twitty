"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Twitter } from "lucide-react";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/profile");
    }, 3000); // 3 ثواني

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-background px-4 text-center">
      <Twitter className="w-14 h-14 text-chart-2 animate-bounce" />

      <h1 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in">
        Discover <span className="text-chart-2">What’s Happening Now</span>
      </h1>

      <p className="text-muted-foreground text-sm md:text-base max-w-md animate-fade-in delay-100">
        Stay connected with the world. Join conversations, follow people, and explore trending topics.
      </p>

      <div className="mt-6 animate-fade-in delay-200">
        <Loader2 className="h-6 w-6 animate-spin text-chart-2" />
        <p className="text-xs text-muted-foreground mt-2">Redirecting you to your feed...</p>
      </div>
    </div>
  );
}

