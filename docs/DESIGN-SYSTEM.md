# Design System — MWG PayLater Landing Page

> Single source of truth cho màu, typography, spacing, component tokens.
> Khi cần thay đổi brand: chỉ sửa `src/brand.js` → toàn bộ trang tự cập nhật.

---

## 1. Màu sắc

### Brand Core

| Token (`COLORS.*`) | Hex | Dùng cho |
|---|---|---|
| `brandYellow` | `#FFD400` | Accent chính, CTA fill, highlight, active state |
| `brandBlack` | `#1A1A1A` | Nền tối, CTA primary, heading chính |
| `brandRed` | `#D0021B` | 1–2 từ highlight trong heading (duy nhất) |

**Quy tắc màu (bắt buộc):**
- Tối đa 2 màu brand per trang: yellow + black. Đỏ chỉ dùng highlight keyword, không làm nền.
- Nền trang mặc định: trắng `#FFFFFF`. Không dùng nền vàng cho section nội dung chính.
- Mọi CTA, active state, focus ring → `brandYellow`.

---

### Text Hierarchy

| Token | Hex | Dùng cho |
|---|---|---|
| `brandBlack` | `#1A1A1A` | Heading H2, tên section |
| `textGray` | `#6B7280` | Subtitle dưới heading, mô tả |
| `textFaint` | `#9CA3AF` | Footnote, disclaimer, label mờ |

---

### Surfaces & Backgrounds

| Token | Hex | Dùng cho |
|---|---|---|
| `warmGray` | `#F8F7F5` | Card background, section nền xen kẽ |
| `softYellow` | `#FFFBEB` | Selected state, BNPL breakdown card |
| `borderLight` | `#E8E8E8` | Border card, divider, input border |

---

### Semantic

| Token | Hex | Dùng cho |
|---|---|---|
| `accentGreen` | `#10B981` | Trạng thái "miễn lãi", positive |
| `error` | `#E02020` | Lỗi form, cảnh báo |

---

## 2. Typography

### Font Stack

App.jsx dùng system UI font stack:
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
```

> ⚠️ `brand.js` khai báo Helvetica Neue nhưng App.jsx override bằng system font.
> Nếu chuyển sang brand font riêng (Be Vietnam Pro, ...), cập nhật cả hai nơi.

---

### Scale Desktop (≥768px)

| Vai trò | Size | Weight | Token |
|---|---|---|---|
| H2 Section | 34px | 700 | Heading tên section |
| H2 CTA dark | 36px | 800 | Section CTA cuối trang |
| Card title | 22px | 700 | Tiêu đề card trong grid |
| Subtitle section | 16px | 400 | Mô tả dưới H2 |
| Caption card | 14px | 400 | Subtitle trong card |
| Footnote | 12–13px | 400 | Disclaimer, ghi chú nhỏ |
| Button | 16–17px | 600–700 | Text CTA |
| Nav link | 14px | 500 | Header navigation |
| Eyebrow label | 13px | 600 | Label nhỏ trên heading (vd: "Ưu đãi dành riêng") |

### Scale Mobile (<768px)

| Vai trò | Size | Weight |
|---|---|---|
| H2 Section | 22px | 700 |
| H2 CTA dark | 24px | 800 |
| Subtitle section | 14px | 400 |
| Caption card | 12px | 400 |
| Button | 15–16px | 600–700 |

---

## 3. Border Radius

| Element | Desktop | Mobile |
|---|---|---|
| Card lớn (Differentiator, Guide) | 20px | 12px |
| Card trung (FAQ, Store) | 14px | 12px |
| CTA section card | 24px | 24px |
| Button pill | 28px | 28px |
| Partner banner card | 16px | 16px |
| BNPL period tab | 14px | 14px |

---

## 4. Shadows

| Element | Box Shadow |
|---|---|
| Button primary (đen) | `0 4px 20px rgba(0,0,0,0.18)` |
| Button CTA (vàng) | `0 4px 24px rgba(255,212,0,0.35)` |
| Card (subtle) | `0 12px 30px rgba(18,18,18,0.02)` |
| Header sau khi scroll | `0 2px 16px rgba(0,0,0,0.08)` |
| Phone mockup | `0 24px 60px rgba(0,0,0,0.14)` |

---

## 5. Button Variants

| Variant | Nền | Chữ | Border-radius | Dùng cho |
|---|---|---|---|---|
| Primary dark | `brandBlack` | `#fff` | 28px | CTA chính (Kích hoạt ngay) |
| Primary yellow | `brandYellow` | `brandBlack` | 28px | CTA nổi bật (Đăng ký ngay) |
| Secondary outline | `#fff` | `brandBlack` | 28px | CTA phụ (Tìm hiểu thêm) |
| Nav pill | `brandYellow` | `brandBlack` | 20px | Đăng ký header |

---

## 6. Known Inconsistencies (cần fix khi refactor)

| Vị trí | Vấn đề |
|---|---|
| `brand.js` → `FONT` | Khai báo Helvetica Neue nhưng App.jsx override bằng system font |
| `brand.js` → `TYPE` | Scale định nghĩa nhưng không được import/dùng trong App.jsx |
| `brand.js` → `RADIUS` | Token định nghĩa nhưng App.jsx hardcode trực tiếp |
| `content.js` → `bannerDesktop` | Trỏ `/hero-banner-desktop.png` nhưng App.jsx hardcode `/bg 1600x500.jpg` |
