import { useState, useEffect, useRef } from "react";
import { COLORS, FONT, RADIUS } from "./brand";

// ─── CTA Button ───
export function CTAButton({ text, variant = "primary", full = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "14px 28px",
        borderRadius: RADIUS.button,
        border: variant === "primary" ? "none" : `1.5px solid ${COLORS.textSecondary}`,
        background: variant === "primary" ? COLORS.buttonGold : "transparent",
        color: COLORS.textSecondary,
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer",
        width: full ? "100%" : "auto",
        fontFamily: FONT,
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = variant === "primary" ? COLORS.primaryDark : COLORS.inputBg;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = variant === "primary" ? COLORS.buttonGold : "transparent";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {text}
    </button>
  );
}

// ─── Animated Counter ───
export function AnimatedNumber({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(start);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

// ─── FAQ Accordion ───
export function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: `1px solid ${COLORS.border}`, padding: "20px 0", cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, lineHeight: 1.5, flex: 1, fontFamily: FONT }}>
          {q}
        </span>
        <span
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: COLORS.primary,
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <p style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.7, marginTop: 12, paddingRight: 24, fontFamily: FONT }}>
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── Product Card ───
export function ProductCard({ name, price, monthly, months, emoji }) {
  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: RADIUS.card,
        padding: 20,
        minWidth: 200,
        border: `0.8px solid ${COLORS.border}`,
        flex: "0 0 auto",
        transition: "transform 0.2s, box-shadow 0.2s",
        fontFamily: FONT,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(47,51,66,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
      <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 12 }}>{price}</div>
      <div
        style={{
          background: `${COLORS.primary}12`,
          borderRadius: RADIUS.card,
          padding: "10px 12px",
          borderLeft: `3px solid ${COLORS.primary}`,
        }}
      >
        <div style={{ fontSize: 11, color: COLORS.textMuted, marginBottom: 2 }}>Chỉ từ</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.textPrimary }}>{monthly}</div>
        <div style={{ fontSize: 11, color: COLORS.textMuted }}>
          /tháng × {months} tháng • 0% lãi
        </div>
      </div>
    </div>
  );
}

// ─── Step Card ───
export function StepCard({ num, title, desc, icon }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: RADIUS.card,
          background: COLORS.buttonGold,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1, fontFamily: FONT }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted, letterSpacing: 1.5, marginBottom: 4 }}>
          BƯỚC {num}
        </div>
        <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}
