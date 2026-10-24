import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PageIntro from "@/components/ui/PageIntro";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

const details = [
  { label: "Email", value: site.email },
  { label: "Discord", value: site.discord },
  { label: "Address", value: site.address },
];

export default function ContactPage() {
  return (
    <Container>
      <PageIntro title="Get in touch" description="HMU" />
      <dl className={styles.list}>
        {details.map((d) => (
          <div key={d.label} className={styles.row}>
            <dt>{d.label}</dt>
            <dd>{d.value}</dd>
          </div>
        ))}
      </dl>

      <a className={styles.mail} href={`mailto:${site.email}`}>
        Send an email
      </a>
      <Button href="/members" variant="ghost" className={styles.ghost}>
        Meet the Talents
      </Button>
    </Container>
  );
}
