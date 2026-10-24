export const site = {
  name: "Clio Aite",
  tagline: "W Hag",
  intro:
    "This is a Website i made for a Frontend Assignment with the theme 'Clio Aite', which is my Oshi huehue",
  email: "shop@phase-connect.com",
  discord: "https://discord.gg/PhaseConnect",
  address: "Somewhere in the Internet",
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/contact", label: "Contact" },
];
