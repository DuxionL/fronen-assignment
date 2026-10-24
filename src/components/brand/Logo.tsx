import Image from "next/image";
import { site } from "@/data/site";

type LogoProps = {
  width: number;
  priority?: boolean;
  className?: string;
};

const RATIO = 558 / 358;

export default function Logo({ width, priority = false, className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={`Logo ${site.name}`}
      width={width}
      height={Math.round(width * RATIO)}
      sizes={`${width}px`}
      priority={priority}
      className={className}
    />
  );
}
