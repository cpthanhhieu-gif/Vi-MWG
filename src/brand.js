// ─── Ví Trả Sau Brand Identity ───
// Chỉ cần sửa file này khi đổi brand → toàn bộ landing page tự cập nhật

export const COLORS = {
  // ── Brand core ──────────────────────────────────────────────────
  brandPink:   "#F0197D",   // hồng magenta chủ đạo Ví Trả Sau
  brandYellow: "#FFD400",   // giữ lại cho các accent phụ
  brandBlack:  "#1A1A1A",   // màu nền/chữ đậm chính
  brandRed:    "#F0197D",   // alias → brandPink

  // ── Pink spectrum ────────────────────────────────────────────────
  primary:      "#F0197D",
  primaryDark:  "#C8116A",
  primaryLight: "#FF4FA3",
  buttonPink:   "#F0197D",

  // ── Dark / Navy ──────────────────────────────────────────────────
  darkNavy:  "#2F3342",
  darkNavy2: "#43495C",

  // ── Text hierarchy ───────────────────────────────────────────────
  textPrimary:   "#121212",
  textSecondary: "#333333",
  textMuted:     "#68728E",
  textLight:     "#999999",
  textGray:      "#6B7280",
  textFaint:     "#9CA3AF",

  // ── Backgrounds & surfaces ───────────────────────────────────────
  pageBg:    "#F8F8F8",
  warmGray:  "#F8F7F5",
  white:     "#FFFFFF",
  border:    "#DFDFDF",
  borderLight: "#E8E8E8",
  inputBg:   "#F2F4F6",

  // ── Tints ────────────────────────────────────────────────────────
  softPink:   "#FFF0F7",
  softYellow: "#FFF0F7",   // reuse soft pink for selected states
  softBlue:   "#EEF6FF",

  // ── Semantic ─────────────────────────────────────────────────────
  error:       "#E02020",
  info:        "#0091FF",
  success:     "#219653",
  accentGreen: "#10B981",

  // ── Gradient ─────────────────────────────────────────────────────
  gradientPink: "linear-gradient(135deg, #F0197D 0%, #FF6BAE 100%)",
  gradientYellow: "#FFE866",
};

export const FONT = `"Helvetica Neue", Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans, sans-serif`;

// Font scale (px)
export const TYPE = {
  h1:      { size: 30, weight: 500 },
  h2:      { size: 32, weight: 700 },
  h3:      { size: 20, weight: 500 },
  body:    { size: 16, weight: 400 },
  button:  { size: 16, weight: 600 },
  caption: { size: 14, weight: 400 },
  small:   { size: 12, weight: 400 },
};

// Spacing & radius
export const RADIUS = {
  button: 4,
  card:   6,
  pill:   100,
};
