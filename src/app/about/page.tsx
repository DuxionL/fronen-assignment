import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Clio Aite",
  description: "Profile of Clio Aite, VTuber, streamer, and medieval historian.",
};

const values = [
  { title: "Warm presence", text: "Clio is known for being laid-back, welcoming, and thoughtful toward her community.", tone: "gold" },
  { title: "Historical voice", text: "She is a medieval historian who blends scholarship with approachable live-streamed discussions.", tone: "olive" },
  { title: "Open energy", text: "She encourages people to speak freely while keeping things light, moderated, and fun.", tone: "crimson" },
] as const;

const milestones = [
  { year: "2022", text: "Started streaming on Twitch and reached 1,000 followers on October 5." },
  { year: "2023", text: "Joined the Twitch Partner Program, formed the Vershion team, and reached 10,000 followers." },
  { year: "2024", text: "Reached 20,000 followers and later became part of the Phase-Connect roster." },
  { year: "2025", text: "Reached 50,000 subscribers and 50,000 followers, then debuted her first 3D model." },
  { year: "2026", text: "Received a Bleed Purple Statue from Twitch for over 5 million watch hours." },
] as const;

export default function AboutPage() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <h1>Clio Aite</h1>
            <p>Streamer, historian, and VTuber</p>
          </div>

          <div className={styles.story}>
            <p>
              Clio can be described as laid-back and passionate when streaming. She began streaming on Twitch with the
              intention of it starting out as a hobby. She now streams on a day-to-day basis. In the beginning she was
              somewhat shy, though she has never held back from speaking her mind. Today she freely banters and hangs out
              with her viewers.
            </p>
            <p>
              Some people mistake Clio for being mean-hearted when in fact she is quite sweet, pleasant, and thoughtful of
              other people. She remains cool, calm, and collected in moments that require it, while still making room for
              everyone to speak freely and not take topics too seriously. Her moderation style is relaxed but clear,
              allowing viewers to express themselves within healthy boundaries.
            </p>
            <p>
              Clio is a self-admitted parasocial streamer, jokingly saying that she has grown quite attached to her
              community and their company. She has shared that she has become considerably happier than she was before she
              started streaming.
            </p>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/clio-phase-render.webp"
            alt="Full-body portrait of Clio Aite"
            width={760}
            height={1100}
            priority
            className={styles.image}
          />
        </div>
      </section>

      <section aria-labelledby="values" className={styles.section}>
        <h2 id="values">What makes her stand out</h2>
        <ul className={styles.values}>
          {values.map((v) => (
            <li key={v.title} className={`${styles.value} ${styles[v.tone]}`}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Background</h2>
        <p>
          Clio was an IRL history professor specializing in medieval studies. She is always eager to share and talk
          about history from the medieval period. She has done multiple lecture streams on various historical topics and
          even taught Latin on stream. She has authored multiple research journals.
        </p>
        <p>
          She previously lived and grew up in the UK, though she was born into a Catholic Irish family. Growing up, she
          occasionally moved back and forth across the UK. She now resides in Australia, where she has lived for the
          past 15 years.
        </p>
        <p>
          Mid-2020, during the COVID-19 pandemic, one of Clio&apos;s students recommended that she become a VTuber due to
          her presentation during online classes. After discovering hololive, she decided to become an actual VTuber.
          She had her first stream on Twitch on August 19, 2022.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Streaming life</h2>
        <p>
          On most days when she does not have anything set or scheduled, she lets the stream take her wherever it leads.
          During the day, she decides what to do on the spot and occasionally lets viewers suggest games. You will
          usually find her playing what is easily her favorite game, Europa Universalis IV, a title she is eager to get
          everyone into. She has invited a number of other VTubers to play with her in order to introduce them to the
          genre and teach them how to play.
        </p>
        <p>
          She used to wrestle when she was younger and is a big fan of professional wrestling. She was forced to retire
          due to a serious head injury, but she continues to be an avid wrestling fan and keeps up with different
          promotions.
        </p>
        <p>
          She is often somewhat easily misunderstood. In the past, some viewers mistook her straightforward remarks for
          anger or annoyance. Most now know that she never means to offend and usually only speaks that way in response
          to a snarky or playful comment from a viewer.
        </p>
      </section>

      <section aria-labelledby="journey" className={styles.section}>
        <h2 id="journey">Career timeline</h2>
        <ol className={styles.timeline}>
          {milestones.map((m) => (
            <li key={m.year}>
              <span className={styles.year}>{m.year}</span>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
