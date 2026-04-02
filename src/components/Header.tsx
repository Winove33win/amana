"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY, whatsappLink } from "@/lib/data";

// Cor de fundo do header — igual ao fundo da logo
const HEADER_BG = "#FFFFFF";
const HEADER_BORDER = "rgba(201,169,110,0.25)";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/categorias", label: "Categorias" },
  { href: "/produtos", label: "Produtos" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Fixed Header — always visible, no scroll tricks */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: HEADER_BG,
          borderBottom: `1px solid ${HEADER_BORDER}`,
          height: "72px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", flexShrink: 0, lineHeight: 0 }}
          >
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={130}
              height={52}
              style={{ width: "auto", height: "40px", objectFit: "contain", display: "block" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#1C1C1C",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                    whiteSpace: "nowrap",
                  }}
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
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  border: "1px solid var(--gold)",
                  transition: "background 0.25s, color 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                Fale Conosco
              </a>
            </nav>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1C1C1C",
                padding: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
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
                top: "1.25rem",
                right: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1C1C1C",
                padding: "8px",
              }}
            >
              <X size={26} />
            </button>

            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={130}
              height={52}
              style={{ width: "auto", height: "46px", objectFit: "contain", marginBottom: "0.5rem" }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.9rem",
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              href={whatsappLink("Olá! Gostaria de saber mais sobre os móveis da Amana Interiores.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: "0.5rem",
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
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--gold) !important; }
      `}</style>
    </>
  );
}
