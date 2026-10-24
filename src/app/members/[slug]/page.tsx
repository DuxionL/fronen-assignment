import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Avatar from "@/components/ui/Avatar";
import Container from "@/components/ui/Container";
import { getAdjacentMembers, getAllMembers, getMemberBySlug } from "@/lib/members";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllMembers().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/members/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Member not found" };
  return { title: member.name, description: `${member.name} — ${member.role}. ${member.summary}` };
}

async function MemberPageContent({ params }: PageProps<"/members/[slug]">) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) notFound();

  const { prev, next } = getAdjacentMembers(slug);

  return (
    <Container size="narrow">
      <Link href="/members" className={styles.back}>
        ← All members
      </Link>

      <article className={styles.article}>
        <header className={styles.header}>
          <Avatar src={member.image} name={member.name} tone={member.tone} size="lg" />
          <div>
            <h1>{member.name}</h1>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.since}>Joined in {member.since}</p>
          </div>
        </header>

        <p className={styles.bio}>{member.bio}</p>
      </article>

      <nav className={styles.pager} aria-label="Other members">
        {prev && (
          <Link href={`/members/${prev.slug}`} rel="prev">
            <span>Previous</span>
            {prev.name}
          </Link>
        )}
        {next && (
          <Link href={`/members/${next.slug}`} rel="next" className={styles.next}>
            <span>Next</span>
            {next.name}
          </Link>
        )}
      </nav>
    </Container>
  );
}

export default function MemberPage(props: PageProps<"/members/[slug]">) {
  return (
    <Suspense fallback={<div>Loading member…</div>}>
      <MemberPageContent {...props} />
    </Suspense>
  );
}
