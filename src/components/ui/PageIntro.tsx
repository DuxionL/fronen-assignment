import styles from "./PageIntro.module.css";

type PageIntroProps = {
  title: string;
  description?: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <header className={styles.intro}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
