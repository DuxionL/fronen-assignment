import { cn } from "@/lib/cn";
import styles from "./Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  size?: "narrow" | "default";
  className?: string;
};

export default function Container({ children, size = "default", className }: ContainerProps) {
  return <div className={cn(styles.container, size === "narrow" && styles.narrow, className)}>{children}</div>;
}
