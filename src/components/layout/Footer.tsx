import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.name}>{site.name}</p>
        <p>© {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
