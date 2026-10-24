import Logo from "@/components/brand/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.stage}>
          <Logo width={260} priority className={styles.logo} />
        </div>

        <h1 className={styles.title}>{site.name}</h1>
        <p className={styles.intro}>{site.intro}</p>

        <Button href="/members">Meet Her</Button>
      </Container>
    </section>
  );
}
