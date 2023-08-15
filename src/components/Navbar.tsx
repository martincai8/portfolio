import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>m</div>
      <ul className={styles.links}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {!menuOpen && (
        <button className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <img src="/images/menu.svg" alt="Menu" />
        </button>
      )}

      {menuOpen && (
        <>
          <button className={styles.closeButton} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <img src="/images/close.svg" alt="Close" />
          </button>
          <div className={styles.mobileMenu}>
            <ul className={styles.links}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <SocialIcons />
          </div>
        </>
      )}
    </header>
  );
}
