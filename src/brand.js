// ─── MWG Official Brand Identity (source: mwg.vn) ───
// Chỉ cần sửa file này khi đổi brand → toàn bộ landing page tự cập nhật

export const COLORS = {
  // ── Brand core ──────────────────────────────────────────────────
  brandYellow: "#FFD400",   // màu vàng nhận diện MWG
  brandBlack:  "#1A1A1A",   // màu nền/chữ đậm chính
  brandRed:    "#D0021B",   // accent đỏ

  // ── Gold spectrum (design system) ───────────────────────────────
  primary:      "#FBBD00",
  primaryDark:  "#EFB400",
  primaryLight: "#FFC900",
  buttonGold:   "#FCD900",

  // ── Dark / Navy ──────────────────────────────────────────────────
  darkNavy:  "#2F3342",
  darkNavy2: "#43495C",

  // ── Text hierarchy ───────────────────────────────────────────────
  textPrimary:   "#121212",
  textSecondary: "#333333",
  textMuted:     "#68728E",
  textLight:     "#999999",
  textGray:      "#6B7280",  // phụ trên nền trắng
  textFaint:     "#9CA3AF",  // muted nhạt hơn

  // ── Backgrounds & surfaces ───────────────────────────────────────
  pageBg:    "#F8F8F8",
  warmGray:  "#F8F7F5",
  white:     "#FFFFFF",
  border:    "#DFDFDF",
  borderLight: "#E8E8E8",
  inputBg:   "#F2F4F6",

  // ── Tints ────────────────────────────────────────────────────────
  softPink:   "#FFF0F3",
  softYellow: "#FFFBEB",
  softBlue:   "#EEF6FF",

  // ── Semantic ─────────────────────────────────────────────────────
  error:       "#E02020",
  info:        "#0091FF",
  success:     "#219653",
  accentGreen: "#10B981",

  // ── Gradient ─────────────────────────────────────────────────────
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
