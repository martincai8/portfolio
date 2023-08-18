import React, { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import ProfileIcons from "./ProfileIcons";
import { m, AnimatePresence } from "framer-motion";
import menu from "../../public/images/menu.svg";
import close from "../../public/images/close.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const ANIMATION_DURATION = 0.3;

  const handleCloseMenu = () => {
    setAnimating(true);
    setTimeout(() => setMenuOpen(false), ANIMATION_DURATION * 1000);
  };

  const handleAnimationComplete = () => {
    setAnimating(false);
  };

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <li key={link.href}>
        <Link href={link.href}>{link.label}</Link>
      </li>
    ));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a className={styles.logo}>mc</a>
      </Link>
      <ul className={styles.links}>{renderNavLinks()}</ul>

      {!menuOpen && !animating && (
        <button className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Image src={menu} alt="Menu" style={{ width: "24px", height: "auto" }} />
        </button>
      )}

      <AnimatePresence>
        {menuOpen && (
          <>
            <m.button
              className={styles.menuButton}
              onClick={handleCloseMenu}
              aria-label="Close menu"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION }}
            >
              <Image src={close} alt="Close menu" style={{ width: "24px", height: "auto" }} />
            </m.button>
            <m.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: ANIMATION_DURATION }}
              exit={{ x: "100%" }}
              onAnimationComplete={handleAnimationComplete}
            >
              <ul className={styles.links}>{renderNavLinks()}</ul>
              <ProfileIcons />
            </m.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
