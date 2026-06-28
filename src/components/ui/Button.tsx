import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "white" | "white-ghost";
  size?: "md" | "lg";
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta focus-visible:ring-offset-2";

  const sizes = {
    md: "px-6 py-3 text-[14px] tracking-wide",
    lg: "px-8 py-4 text-[15px] tracking-wide",
  };

  const variants = {
    primary:
      "text-white bg-magenta hover:bg-magenta-light shadow-sm hover:shadow-lg hover:shadow-magenta/30 active:scale-[0.98]",
    ghost:
      "text-magenta-deep border border-magenta/30 hover:border-magenta hover:bg-magenta/5 active:scale-[0.98]",
    white:
      "text-magenta-deep bg-white hover:bg-white/90 shadow-sm active:scale-[0.98]",
    "white-ghost":
      "text-white border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
