import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Lessons", href: "/lessons" },
  { label: "How It Works", href: "/method" },
  { label: "The Brazilian Soul", href: "/the-brazilian-soul" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const headerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleScroll() {
      const isAtTop = window.scrollY <= 10;

      setIsHeaderVisible(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (!isAtTop && !isMenuOpen) {
        scrollTimeoutRef.current = setTimeout(() => {
          setIsHeaderVisible(false);
        }, 900);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsHeaderVisible(true);
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${
        isHeaderVisible ? styles.headerVisible : styles.headerHidden
      }`}
      ref={headerRef}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Portuguese <span>with</span> Thais
        </Link>

        <nav
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}

          <Link
            to="/book-a-lesson"
            className={styles.bookingButton}
            onClick={closeMenu}
          >
            Book a Lesson
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
