"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/produtos/${product.id}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          style={{
            background: "#FFFFFF",
            cursor: "pointer",
          }}
          className="product-card"
        >
          {/* Image */}
          <div
            className="img-zoom"
            style={{
              aspectRatio: "4/3",
              position: "relative",
              background: "var(--cream)",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Info */}
          <div style={{ padding: "1.5rem 0 0" }}>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.5rem",
              }}
            >
              {product.category}
            </p>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "var(--dark)",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.85rem",
                color: "var(--medium)",
                lineHeight: 1.6,
                marginBottom: "1rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {product.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--dark)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
              className="card-link"
            >
              Ver Detalhes
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Link>
      <style jsx global>{`
        .product-card .card-link {
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .product-card:hover .card-link {
          gap: 0.75rem;
          color: var(--gold);
        }
      `}</style>
    </motion.div>
  );
}
