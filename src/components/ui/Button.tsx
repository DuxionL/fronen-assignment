import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn(styles.button, styles[variant], className)}>
      {children}
    </Link>
  );
}
