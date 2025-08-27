import Image from "next/image";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Auth layout component
 * - Left side: branding image (hidden on small screens)
 * - Right side: renders the auth form (login/register)
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex justify-between items-center">
      {/* Left side image (visible only on large screens) */}
      <div className="hidden lg:flex w-1/2 h-screen items-center bg-black">
        <Image
          src="/twitty.png"
          alt="Brand image"
          width={800}
          height={1200}
          priority
        />
      </div>

      {/* Right side content (auth forms) */}
      <div className="flex items-center w-full mx-auto lg:w-1/2">
        {children}
      </div>
    </div>
  );
}

