import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "destructive" | "outline" | "success";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[#111111] text-white",
    secondary: "bg-gray-100 text-gray-800",
    accent: "bg-[#D97706] text-white",
    destructive: "bg-red-100 text-red-800",
    outline: "border border-[#111111] text-[#111111] bg-transparent",
    success: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
