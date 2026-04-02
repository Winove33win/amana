"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, whatsappLink } from "@/lib/data";

export default function CategoriasPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          background: "var(--off-white)",
          paddingTop: "130px",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "center",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "0 auto 1.5rem" }} />
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1rem",
            }}
          >
            Categorias
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "var(--medium)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Explore nossas linhas de móveis e encontre a peça ideal para seu ambiente
          </p>
        </motion.div>
      </section>

      {/* Categories with Products */}
      {CATEGORIES.map((cat, catIndex) => {
        const catProducts = PRODUCTS.filter((p) => p.categorySlug === cat.slug);
        return (
          <section
            key={cat.id}
            id={cat.slug}
            style={{
              background: catIndex % 2 === 0 ? "#FFFFFF" : "var(--off-white)",
              padding: "5rem 2rem",
              scrollMarginTop: "100px",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              {/* Category Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4rem",
                  alignItems: "center",
                  marginBottom: "4rem",
                }}
                className={`cat-header ${catIndex % 2 !== 0 ? "reversed" : ""}`}
              >
                {catIndex % 2 === 0 ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.5rem" }} />
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                        Categoria 0{catIndex + 1}
                      </p>
                      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2, marginBottom: "1rem" }}>
                        {cat.name}
                      </h2>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--medium)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {cat.description}
                      </p>
                      <Link
                        href="/produtos"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--dark)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--gold)",
                          paddingBottom: "4px",
                        }}
                      >
                        Ver produtos <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="img-zoom"
                      style={{ position: "relative", aspectRatio: "4/3", background: "var(--cream)", overflow: "hidden" }}
                    >
                      <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="img-zoom"
                      style={{ position: "relative", aspectRatio: "4/3", background: "var(--cream)", overflow: "hidden" }}
                    >
                      <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                    >
                      <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.5rem" }} />
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                        Categoria 0{catIndex + 1}
                      </p>
                      <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2, marginBottom: "1rem" }}>
                        {cat.name}
                      </h2>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--medium)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {cat.description}
                      </p>
                      <Link
                        href="/produtos"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "var(--dark)",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--gold)",
                          paddingBottom: "4px",
                        }}
                      >
                        Ver produtos <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  </>
                )}
              </div>

              {/* Products Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2rem" }}>
                {catProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{ background: "var(--gold)", padding: "5rem 2rem", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 400, color: "#FFFFFF", marginBottom: "1rem" }}>
            Encontre o móvel perfeito para o seu espaço
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", marginBottom: "2rem" }}>
            Atendimento personalizado via WhatsApp
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de conversar sobre os móveis da Amana Interiores.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#FFFFFF",
              color: "var(--gold-dark)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 40px",
              textDecoration: "none",
            }}
          >
            Falar com Especialista
          </a>
        </motion.div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .cat-header {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .cat-header.reversed > *:first-child {
            order: 2;
          }
          .cat-header.reversed > *:last-child {
            order: 1;
          }
        }
      `}</style>
    </>
  );
}
