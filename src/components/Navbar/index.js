import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, LinkedinButton,
  ButtonContainer, MobileIcon, MobileBars, MobileMenu, MobileLink, IconToggleGroup, IconButton, LangButton,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useThemeMode } from '../../context/ThemeModeContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeMode();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#education', label: t.nav.education },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            style={{ display: 'flex', alignItems: 'center', color: 'inherit', cursor: 'pointer', textDecoration: 'none' }}
          >
            <DiCssdeck size="2.4rem" /> <Span>ash.dev</Span>
          </a>
        </NavLogo>

      <NavItems>
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            $scrolled={scrolled}
          >
            {link.label}
          </NavLink>
        ))}
      </NavItems>

        <ButtonContainer>
          <IconToggleGroup>
            <IconButton onClick={toggleTheme} aria-label="Toggle theme" title={darkMode ? 'Light mode' : 'Dark mode'}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </IconButton>
            <LangButton onClick={toggleLang} aria-label="Toggle language" title="PT / EN">
              {lang === 'pt' ? 'EN' : 'PT'}
            </LangButton>
          </IconToggleGroup>
          <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">{t.nav.github}</GitHubButton>
          <LinkedinButton href={Bio.linkedin} target="_blank" rel="noreferrer">{t.nav.linkedin}</LinkedinButton>
        </ButtonContainer>

        <MobileIcon>
          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <LangButton onClick={toggleLang} aria-label="Toggle language">
            {lang === 'pt' ? 'EN' : 'PT'}
          </LangButton>
          <MobileBars   $scrolled={scrolled} onClick={() => setIsOpen((prev) => !prev)} aria-label="Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileBars>
        </MobileIcon>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
            >
              <MobileMenu>
                {navLinks.map((link) => (
                  <MobileLink key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </MobileLink>
                ))}
                <GitHubButton
                  style={{ width: 'max-content' }}
                  href={Bio.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  {t.nav.github}
                </GitHubButton>
                <LinkedinButton
                  style={{ width: 'max-content' }}
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  {t.nav.linkedin}
                </LinkedinButton>
              </MobileMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
