import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      default: "bg-[#111111] text-white hover:bg-[#2A2A2A] focus-visible:ring-[#111111]",
      outline: "border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-white",
      ghost: "bg-transparent text-[#111111] hover:bg-gray-100",
      link: "text-[#C8980C] underline-offset-4 hover:underline p-0 h-auto",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      accent: "bg-[#C8980C] text-white hover:bg-[#B45309] focus-visible:ring-[#C8980C]",
    };

    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
