"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.srOnly}>{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>

        <nav id="main-menu" aria-label="Main navigation" className={cn(styles.menu, open && styles.menuOpen)}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} onNavigate={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className={styles.brand} aria-label={`${site.name} — home`} onClick={() => setOpen(false)}>
          <Logo width={34} />
        </Link>
      </Container>
    </header>
  );
}
