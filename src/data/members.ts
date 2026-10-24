export type Member = {
  slug: string;
  name: string;
  role: string;
  tone: "crimson" | "olive" | "gold" | "earth";
  image: string;
  summary: string;
  bio: string;
  since: number;
};

export const members: Member[] = [
  {
    slug: "clio-beret",
    name: "Clio Aite with a Beret",
    role: "Phaseconnect Talent",
    tone: "olive",
    image: "/members/clio-beret.png",
    summary: "Clio Aite's new model after she joined PhaseConnect May 3, 2025",
    bio: "Clio Aite (クリオ•アイティー) is an Irish-Australian female VTuber. A former medievalist professor, Clio loves playing grand strategy games such as Europa Universalis IV, Total War: Warhammer III and various other games. She is very proud of her hagdom, and is known for her mental endurance, often streaming for 8 to 12 hours daily.",
    since: 2025,
  },
  {
    slug: "hagstorian",
    name: "Hagstorians",
    role: "Fans",
    tone: "earth",
    image: "/members/hagstorian.png",
    summary: "That's me bro",
    bio: "Clio Aite's followers, which is I",
    since: 2025,
  },
  {
    slug: "clio-beanie",
    name: "Clio Aite with a Beanie",
    role: "Indie Vtuber",
    tone: "crimson",
    image: "/members/clio-beanie.png",
    summary: "Clio Aite's first model when she debuted as an indie VTuber on 19 August 2022",
    bio: "Clio Aite (クリオ•アイティー) is an Irish-Australian female VTuber. A former medievalist professor, Clio loves playing grand strategy games such as Europa Universalis IV, Total War: Warhammer III and various other games. She is very proud of her hagdom, and is known for her mental endurance, often streaming for 8 to 12 hours daily.",
    since: 2022,
  },
];
