import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import type { Member } from "@/data/members";
import { cn } from "@/lib/cn";
import styles from "./MemberCard.module.css";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link href={`/members/${member.slug}`} className={cn(styles.card, styles[member.tone])}>
      <Avatar src={member.image} name={member.name} tone={member.tone} />
      <div className={styles.text}>
        <h3>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.summary}>{member.summary}</p>
      </div>
    </Link>
  );
}
