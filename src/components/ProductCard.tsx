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
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: "100%" }}
    >
      <Link
        href={`/produtos/${product.id}`}
        style={{ textDecoration: "none", display: "block", height: "100%" }}
      >
        <div
          className="product-card"
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border)",
            overflow: "hidden",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Image */}
          <div
            className="img-zoom"
            style={{
              aspectRatio: "4/3",
              position: "relative",
              background: "var(--cream)",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Info */}
          <div
            style={{
              padding: "1.25rem 1.25rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.4rem",
              }}
            >
              {product.category}
            </p>
            <h3
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "var(--dark)",
                marginBottom: "0.6rem",
                lineHeight: 1.3,
              }}
            >
              {product.name}
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.82rem",
                color: "var(--medium)",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                flex: 1,
              }}
            >
              {product.description}
            </p>
            <div
              className="card-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--dark)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                marginTop: "auto",
              }}
            >
              Ver Detalhes
              <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </Link>

      <style jsx global>{`
        .product-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }
        .product-card:hover .card-link {
          color: var(--gold);
          gap: 0.7rem;
        }
        .card-link {
          transition: color 0.3s ease, gap 0.3s ease;
        }
      `}</style>
    </motion.div>
  );
}
