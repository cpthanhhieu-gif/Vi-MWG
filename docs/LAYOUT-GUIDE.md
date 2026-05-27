# Layout Guide — MWG PayLater Landing Page

> Quy tắc layout áp dụng nhất quán cho mọi section. Đây là nguồn duy nhất đúng cho container, spacing, và grid.

---

## 1. Breakpoints

| Tên | Điều kiện | Biến |
|---|---|---|
| Desktop | `width >= 768px` | `isDesktop = true` |
| Mobile | `width < 768px` | `isDesktop = false` |

```js
// src/App.jsx
const width = useWindowWidth();
const isDesktop = width >= 768;
```

Chỉ có **2 tier**. Không dùng breakpoint trung gian cho layout tổng thể.

---

## 2. Container Chuẩn (BẮT BUỘC)

Mọi section phải wrap nội dung bằng container pattern này:

```jsx
<div style={{
  maxWidth: isDesktop ? 1100 : 480,
  margin: "0 auto",
  padding: isDesktop ? "72px 40px" : "36px 16px",
}}>
```

| Thuộc tính | Desktop | Mobile |
|---|---|---|
| `maxWidth` | **1100px** | **480px** |
| `margin` | `"0 auto"` | `"0 auto"` |
| Padding ngang | **40px** mỗi bên | **16px** mỗi bên |
| Padding dọc | **72px** top (standard) | **36px** top (standard) |

**Vi phạm cần tránh:**
- ❌ `maxWidth: "100vw"` — làm container bung theo viewport
- ❌ `width: "100vw"` — property thừa
- ❌ `margin: "0 calc(50% - 50vw)"` — full-bleed không có chủ đích
- ❌ Thêm `box-sizing: "border-box"` riêng lẻ — gây xung đột

---

## 3. Section Padding Chuẩn

| Section | Desktop | Mobile |
|---|---|---|
| Hero | Full-bleed (không padding container) | Full-bleed |
| Partner Banner | `0` container + `24px 0` wrapper | `0` container + `16px 0` wrapper |
| Differentiator | `72px 40px 80px` | `40px 16px 44px` |
| Store Network | `72px 40px` | `28px 16px` |
| BNPL Calculator | `72px 40px` | `36px 16px` |
| Guide | `72px 40px` | `36px 16px` |
| FAQ | `72px 40px` | `0 16px 36px` |
| CTA | `0 0 40px` outer + inner card `52px 64px` | `0 16px 24px` outer + inner card `32px 24px` |
| Footer | `40px 0` | `24px 16px` |

---

## 4. Section Heading Pattern

Mọi section đều dùng cùng một heading block:

```jsx
<div style={{ textAlign: "center", marginBottom: isDesktop ? 44 : 20 }}>
  <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 8px" }}>
    Tên section <span style={{ color: COLORS.brandRed }}>từ highlight</span>
  </h2>
  <p style={{ fontSize: isDesktop ? 16 : 14, color: COLORS.textGray, margin: 0 }}>
    Subtitle mô tả ngắn
  </p>
</div>
```

**Quy tắc heading:**
- H2: font 34px (desktop), 22px (mobile), weight 700
- Luôn có 1 span đỏ (`brandRed`) để highlight 1–2 từ khóa
- Subtitle: 16px (desktop), 14px (mobile), màu `textGray`
- `marginBottom` giữa heading và content: 44–54px (desktop), 20–28px (mobile)

---

## 5. Grids

### 2 cột — Desktop only (Differentiator, Guide, BNPL, FAQ)
```jsx
display: "grid",
gridTemplateColumns: "1fr 1fr",
gap: 30,
alignItems: "start",
```

### 4 cột — Desktop only (Store Network)
```jsx
gridTemplateColumns: "1fr 1fr 1fr 1fr",
gap: 16,
```

### 2 cột — Mọi viewport (Differentiator mobile vẫn giữ 2 cột)
```jsx
gridTemplateColumns: "1fr 1fr",
gap: isDesktop ? 30 : 12,
```

### Mobile mặc định: flexbox dọc
```jsx
display: "flex",
flexDirection: "column",
gap: 16,
```

---

## 6. Section ID Anchors

Ba section có deep-link từ nav header:

```html
<div id="section-bnpl">    ← BNPL Calculator
<div id="section-huong-dan"> ← Guide
<div id="section-faq">     ← FAQ
```

Nav links: `href="#section-bnpl"`, `href="#section-huong-dan"`, `href="#section-faq"`.

---

## 7. Overflow & Scroll

- Page root: `overflowX: "clip"` — ngăn horizontal scroll do elements tràn nhẹ
- BNPL category tabs: `overflowX: "auto"`, `scrollbarWidth: "none"` — horizontal scroll ẩn scrollbar
- Tất cả section containers: không có overflow hidden (để floating images hiển thị đúng)
