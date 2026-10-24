import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Member } from "@/data/members";
import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  name: string;
  tone: Member["tone"];
  size?: "md" | "lg";
};

export default function Avatar({ src, name, tone, size = "md" }: AvatarProps) {
  return (
    <span className={cn(styles.avatar, styles[tone], size === "lg" && styles.lg)}>
      <Image
        src={src}
        alt={`${name} photo`}
        fill
        sizes={size === "lg" ? "(min-width: 40rem) 208px, 144px" : "(min-width: 40rem) 128px, 96px"}
        className={styles.image}
      />
    </span>
  );
}
