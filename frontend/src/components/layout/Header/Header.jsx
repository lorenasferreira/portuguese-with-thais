import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

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
  const [isHidden, setIsHidden] = useState(false);
  const dialogRef = useRef(null);
  const menuButtonRef = useRef(null);
  const { pathname } = useLocation();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isMenuOpen) {
      dialog.close();
      return;
    }

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialog.showModal();
    dialog.querySelector("button").focus();
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => { if (desktop.matches) closeMenu(); };
    desktop.addEventListener("change", onResize);
    window.addEventListener("popstate", closeMenu);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
      window.removeEventListener("popstate", closeMenu);
      dialog.close();
      if (menuButtonRef.current?.offsetParent !== null) menuButtonRef.current?.focus();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    let anchor = window.scrollY;
    let frame = 0;
    function update() {
      frame = 0;
      const current = Math.max(0, window.scrollY);
      if (isMenuOpen || current < 88) {
        setIsHidden(false);
        anchor = current;
      } else if (Math.abs(current - anchor) >= 10) {
        setIsHidden(current > anchor);
        anchor = current;
      }
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [isMenuOpen, pathname]);

  const links = (numbered = false) => navigationLinks.map((link, index) => (
    <Link key={link.href} to={link.href} onClick={closeMenu} aria-current={pathname === link.href ? "page" : undefined}>
      {numbered && <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
      {link.label}
    </Link>
  ));

  return (
    <>
      <header className={`${styles.header} ${isHidden && !isMenuOpen ? styles.hidden : ""}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            Portuguese <span>with</span> Thais
          </Link>
          <button ref={menuButtonRef} type="button" className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)} aria-label="Open menu"
            aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            <FiMenu aria-hidden="true" />
          </button>
          <nav className={styles.navigation} aria-label="Main navigation">
            {links()}
            <Link to="/book-a-lesson" className={styles.bookingButton}>Book a Lesson</Link>
          </nav>
        </div>
      </header>
      {createPortal(
        <dialog ref={dialogRef} id="mobile-navigation" className={styles.drawer}
          aria-label="Main navigation" onCancel={closeMenu} onClose={closeMenu}
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeMenu();
          }}>
          <div className={styles.drawerTop}>
            <span>Portuguese <em>with</em> Thais</span>
            <button type="button" onClick={closeMenu} aria-label="Close menu"><FiX aria-hidden="true" /></button>
          </div>
          <nav className={styles.drawerLinks} aria-label="Mobile navigation">
            {links(true)}
            <Link to="/book-a-lesson" className={styles.bookingButton} onClick={closeMenu}>Book a Lesson <span aria-hidden="true">↗</span></Link>
          </nav>
          <a className={styles.drawerContact} href="https://wa.me/33766516346" target="_blank" rel="noreferrer">Let’s talk on WhatsApp <span aria-hidden="true">↗</span></a>
        </dialog>, document.body,
      )}
    </>
  );
}

export default Header;
