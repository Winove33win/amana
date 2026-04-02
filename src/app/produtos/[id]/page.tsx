"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { PRODUCTS, whatsappLink } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  const [activeImg, setActiveImg] = useState(0);
  const images = product.images || [product.image];

  return (
    <>
      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          background: "#FFFFFF",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link
            href="/produtos"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--medium)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={14} /> Produtos
          </Link>
          <span style={{ color: "var(--light)", fontSize: "0.8rem" }}>/</span>
          <span style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Detail */}
      <section style={{ background: "#FFFFFF", padding: "4rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="product-detail-grid"
        >
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "4/3",
                background: "var(--cream)",
                marginBottom: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={images[activeImg]}
                alt={product.name}
                fill
                style={{ objectFit: "cover", transition: "opacity 0.4s" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {images.length > 1 && (
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "60px",
                      border: activeImg === i ? "2px solid var(--gold)" : "2px solid transparent",
                      padding: 0,
                      cursor: "pointer",
                      background: "var(--cream)",
                      overflow: "hidden",
                      transition: "border-color 0.3s",
                    }}
                  >
                    <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/categorias#${product.categorySlug}`}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              {product.category}
            </Link>

            <h1
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                color: "var(--dark)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              {product.name}
            </h1>

            <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.5rem" }} />

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "var(--medium)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              {product.description}
            </p>

            {product.details && product.details.length > 0 && (
              <div style={{ marginBottom: "2.5rem" }}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--dark)",
                    marginBottom: "1rem",
                  }}
                >
                  Características
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {product.details.map((detail) => (
                    <div key={detail} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Check size={14} color="var(--gold)" />
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "var(--dark)" }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={whatsappLink(`Olá! Tenho interesse no produto "${product.name}" que vi no site da Amana Interiores. Poderia me passar mais informações?`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  background: "var(--gold)",
                  color: "#FFFFFF",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "16px 32px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <MessageCircle size={18} />
                Tenho Interesse
              </a>
              <a
                href={whatsappLink(`Olá! Gostaria de um orçamento para o "${product.name}" da Amana Interiores.`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  background: "transparent",
                  color: "var(--dark)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "16px 32px",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                }}
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Badge */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1rem 1.25rem",
                background: "var(--cream)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Check size={16} color="var(--gold)" />
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "var(--medium)", lineHeight: 1.5 }}>
                Peça disponível sob medida. Personalize tamanho, material e acabamento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ background: "var(--off-white)", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.5rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", fontWeight: 400, color: "var(--dark)", marginBottom: "3rem" }}>
              Você também pode gostar
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2.5rem" }}>
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
