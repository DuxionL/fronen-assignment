import type { Metadata } from "next";
import MemberCard from "@/components/members/MemberCard";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { getAllMembers } from "@/lib/members";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Models",
  description: "Clio over the years",
};

export default function MembersPage() {
  const members = getAllMembers();

  return (
    <Container>
      <PageIntro
        title="Clio Aite"
        description="Models and the Fans"
      />
      <ul className={styles.grid}>
        {members.map((member) => (
          <li key={member.slug}>
            <MemberCard member={member} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
