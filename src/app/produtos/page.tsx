"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, whatsappLink } from "@/lib/data";

const ALL = "todos";

export default function ProdutosPage() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === ALL || p.categorySlug === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "var(--off-white)",
          paddingTop: "120px",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
            Nossa Coleção
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "var(--medium)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Peças exclusivas criadas com dedicação para transformar seu espaço
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 50,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border)",
          padding: "1.25rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Category filters */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[{ id: ALL, name: "Todos" }, ...CATEGORIES].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  padding: "8px 18px",
                  border: activeCategory === cat.id ? "1px solid var(--gold)" : "1px solid var(--border)",
                  background: activeCategory === cat.id ? "var(--gold)" : "transparent",
                  color: activeCategory === cat.id ? "#FFFFFF" : "var(--dark)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <Search
              size={14}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--light)",
              }}
            />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                paddingLeft: "36px",
                paddingRight: "16px",
                paddingTop: "9px",
                paddingBottom: "9px",
                border: "1px solid var(--border)",
                outline: "none",
                background: "transparent",
                color: "var(--dark)",
                width: "220px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ background: "#FFFFFF", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "var(--light)",
              marginBottom: "2.5rem",
            }}
          >
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "5rem 0" }}>
              <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "var(--medium)" }}>
                Nenhum produto encontrado
              </p>
              <button
                onClick={() => { setActiveCategory(ALL); setSearch(""); }}
                style={{
                  marginTop: "1rem",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  color: "var(--gold)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--cream)",
          padding: "5rem 2rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 400, color: "var(--dark)", marginBottom: "1rem" }}>
            Não encontrou o que procura?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--medium)", marginBottom: "2rem", maxWidth: "450px", margin: "0 auto 2rem" }}>
            Criamos peças completamente sob medida. Fale conosco e vamos desenvolver o móvel perfeito para você.
          </p>
          <a
            href={whatsappLink("Olá! Gostaria de criar um móvel sob medida com a Amana Interiores.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
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
            Criar Sob Medida
          </a>
        </motion.div>
      </section>
    </>
  );
}
