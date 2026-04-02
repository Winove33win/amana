"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { COMPANY, whatsappLink } from "@/lib/data";

const WA_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IG_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "#FFFFFF" }}>

      {/* ── Main body ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1.4fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          {/* Logo on a white pill so it aparece corretamente no fundo escuro */}
          <div
            style={{
              display: "inline-block",
              background: "#FFFFFF",
              padding: "10px 18px",
              marginBottom: "1.75rem",
            }}
          >
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={120}
              height={48}
              style={{ width: "auto", height: "38px", objectFit: "contain", display: "block" }}
            />
          </div>

          <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.05rem", fontWeight: 400, fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "300px" }}>
            "{COMPANY.story}"
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                width: "38px", height: "38px",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              {IG_ICON}
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site da Amana Interiores.")}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              style={{
                width: "38px", height: "38px",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#25D366"; e.currentTarget.style.color = "#25D366"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              {WA_ICON}
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
            Menu
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {[
              { href: "/", label: "Início" },
              { href: "/categorias", label: "Categorias" },
              { href: "/produtos", label: "Produtos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.25s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>
            Contato
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <a
              href={COMPANY.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", gap: "0.75rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.85rem", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
            >
              <MapPin size={15} style={{ marginTop: "3px", flexShrink: 0, color: "var(--gold)" }} />
              {COMPANY.address}
            </a>

            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.85rem", fontFamily: "Inter, sans-serif" }}
            >
              <span style={{ color: "var(--gold)", display: "flex" }}>{IG_ICON}</span>
              {COMPANY.instagramHandle}
            </a>

            <a
              href={whatsappLink("Olá! Gostaria de solicitar um orçamento para móveis da Amana Interiores.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "var(--gold)",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "11px 22px",
                textDecoration: "none",
                width: "fit-content",
                marginTop: "0.5rem",
              }}
            >
              {WA_ICON} Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
          © {new Date().getFullYear()} Amana Interiores. Todos os direitos reservados.
        </p>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
          Jaguariúna — SP
        </p>
      </div>

    </footer>
  );
}
