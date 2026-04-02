"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY, whatsappLink } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/categorias", label: "Categorias" },
  { href: "/produtos", label: "Produtos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const textColor = scrolled ? "#1C1C1C" : "#FFFFFF";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.2)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "68px" : "84px",
            transition: "height 0.4s ease",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              lineHeight: 0,
            }}
          >
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={120}
              height={48}
              style={{
                width: "auto",
                height: "44px",
                objectFit: "contain",
                display: "block",
              }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: textColor,
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    whiteSpace: "nowrap",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsappLink("Olá! Gostaria de saber mais sobre os móveis da Amana Interiores.")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--gold)",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "10px 22px",
                  textDecoration: "none",
                  border: "1px solid var(--gold)",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s ease",
                }}
              >
                Fale Conosco
              </a>
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: textColor,
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1C1C1C",
              }}
            >
              <X size={28} />
            </button>

            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={140}
              height={56}
              style={{ width: "auto", height: "52px", objectFit: "contain" }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: "#1C1C1C",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href={whatsappLink("Olá! Gostaria de saber mais sobre os móveis da Amana Interiores.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "1rem",
                background: "var(--gold)",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 36px",
                textDecoration: "none",
              }}
            >
              Fale Conosco
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}
