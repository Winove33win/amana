import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { COMPANY, whatsappLink } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "#1C1C1C", color: "#FFFFFF" }}>
      {/* CTA Banner */}
      <div
        style={{
          background: "var(--gold)",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            marginBottom: "1.5rem",
          }}
        >
          Pronto para transformar seu lar?
        </p>
        <a
          href={whatsappLink("Olá! Gostaria de solicitar um orçamento para móveis personalizados.")}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#FFFFFF",
            color: "var(--gold-dark)",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "14px 40px",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          Solicitar Orçamento
        </a>
      </div>

      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            alt={COMPANY.name}
            width={140}
            height={56}
            style={{ objectFit: "contain", marginBottom: "1.5rem", filter: "brightness(10)" }}
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "#9B9B9B",
            }}
          >
            {COMPANY.story}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.5rem",
            }}
          >
            Navegação
          </h4>
          {[
            { href: "/", label: "Início" },
            { href: "/categorias", label: "Categorias" },
            { href: "/produtos", label: "Produtos" },
          ].map((link) => (
            <div key={link.href} style={{ marginBottom: "0.75rem" }}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#9B9B9B",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.5rem",
            }}
          >
            Contato
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a
              href={COMPANY.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                gap: "0.75rem",
                color: "#9B9B9B",
                textDecoration: "none",
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              <MapPin size={16} style={{ marginTop: "2px", flexShrink: 0, color: "var(--gold)" }} />
              {COMPANY.address}
            </a>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#9B9B9B",
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              {COMPANY.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 2rem",
          textAlign: "center",
          color: "#6B6B6B",
          fontSize: "0.78rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        © {new Date().getFullYear()} Amana Interiores. Todos os direitos reservados.
      </div>
    </footer>
  );
}
