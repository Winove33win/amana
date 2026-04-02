"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock, Ruler, Palette } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { COMPANY, CATEGORIES, FEATURED_PRODUCTS, whatsappLink } from "@/lib/data";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <motion.div style={{ position: "absolute", inset: 0, y: heroY }}>
          <Image
            src="/images/ambiente-1.jpg"
            alt="Amana Interiores"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem 5rem",
            width: "100%",
            opacity: heroOpacity,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ display: "inline-block", width: "30px", height: "1px", background: "var(--gold)" }} />
            30 Anos de Excelência
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            Sonhos que se<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>tornam realidade</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "480px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            {COMPANY.story}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href={whatsappLink("Olá! Gostaria de solicitar um orçamento para móveis personalizados da Amana Interiores.")}
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
                padding: "16px 36px",
                textDecoration: "none",
              }}
            >
              Solicitar Orçamento <ArrowRight size={16} />
            </a>
            <Link
              href="/produtos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 36px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              Ver Coleção
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.5)",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.3)" }}
          />
        </motion.div>
      </section>

      {/* PILLARS */}
      <section style={{ background: "#FFFFFF", padding: "5rem 2rem" }}>
        <div
          className="pillars-grid"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          {[
            { icon: Clock, title: "30 Anos", desc: "De tradição e excelência em móveis de alto padrão" },
            { icon: Ruler, title: "Sob Medida", desc: "Cada peça projetada para o seu espaço e estilo" },
            { icon: Palette, title: "Design Exclusivo", desc: "Criações únicas que refletem sua personalidade" },
            { icon: Star, title: "Alto Padrão", desc: "Materiais nobres e acabamento impecável" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  border: "1px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <item.icon size={22} color="var(--gold)" />
              </div>
              <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--dark)", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "var(--medium)", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "var(--off-white)" }}>
        <div
          className="split-grid"
          style={{ maxWidth: "1280px", margin: "0 auto" }}
        >
          <div className="img-zoom" style={{ position: "relative", minHeight: "420px" }}>
            <Image src="/images/mesa.jpg" alt="Nossa história" fill style={{ objectFit: "cover" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="split-grid-text"
            style={{ padding: "5rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              Nossa História
            </p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "var(--dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Uma família<br />realizando <em>sonhos</em>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--medium)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {COMPANY.story} Cada móvel que criamos carrega dedicação, técnica e o desejo genuíno de tornar sua casa um lar verdadeiramente especial.
            </p>
            <Link
              href="/categorias"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--dark)",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                paddingBottom: "4px",
                borderBottom: "1px solid var(--gold)",
                width: "fit-content",
              }}
            >
              Explorar Coleção <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ background: "#FFFFFF", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "0 auto 1.5rem" }} />
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--dark)", marginBottom: "1rem" }}>
              Nossas Categorias
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "var(--medium)" }}>
              Encontre a peça perfeita para cada ambiente
            </p>
          </motion.div>
          <div className="categories-grid">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/categorias#${cat.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div className="img-zoom" style={{ position: "relative", aspectRatio: "3/4", background: "var(--cream)", overflow: "hidden" }}>
                    <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.3rem", fontWeight: 500, color: "#FFFFFF", marginBottom: "0.25rem" }}>
                        {cat.name}
                      </h3>
                      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ background: "var(--off-white)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}
          >
            <div>
              <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "1.5rem" }} />
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--dark)" }}>
                Destaques
              </h2>
            </div>
            <Link href="/produtos" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--dark)", fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}>
              Ver todos os produtos <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div className="products-grid">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section style={{ position: "relative", padding: "7rem 2rem", overflow: "hidden", background: "#1C1C1C" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/sofas.jpg)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "0 auto 2rem" }} />
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 4vw, 3.2rem)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Vamos criar algo <em style={{ color: "var(--gold)" }}>único</em> para você?
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Entre em contato pelo WhatsApp e receba atendimento personalizado. Nossos especialistas estão prontos para transformar sua visão em realidade.
          </p>
          <a
            href={whatsappLink("Olá! Vi o site da Amana Interiores e gostaria de conhecer mais sobre os móveis sob medida.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#25D366",
              color: "#FFFFFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "18px 48px",
              textDecoration: "none",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Conversar no WhatsApp
          </a>
        </motion.div>
      </section>
    </>
  );
}
