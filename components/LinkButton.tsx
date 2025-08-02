import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function LinkButton({ href, children, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`w-full py-2 px-4 bg-blue-600 text-white text-center font-medium 
        rounded-xl shadow-md transition-all duration-300
        hover:bg-blue-700 hover:shadow-lg active:scale-95
        ${className || ""}`}
    >
      {children}
    </Link>
  );
}
