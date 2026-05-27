# CLAUDE.md — MWG PayLater Landing Page

> Context cho AI agent. Đọc file này trước khi thực hiện bất kỳ thay đổi nào.

---

## 1. Project Overview

**Tên:** MWG PayLater Landing Page  
**Stack:** React 18 + Vite, inline styles (không dùng CSS file/Tailwind)  
**Deploy:** Vercel (auto-deploy khi push lên `main`)  
**Repo:** https://github.com/cpthanhhieu-gif/Vi-MWG  
**Breakpoint:** Desktop ≥ 768px (`isDesktop = width >= 768`)

---

## 2. Cấu trúc file quan trọng

```
src/
├── brand.js      ← Màu sắc, font, spacing tokens — SỬA ĐÂY khi đổi brand
├── content.js    ← Toàn bộ nội dung (text, ảnh, số liệu) — SỬA ĐÂY khi đổi content
├── App.jsx       ← Layout + components + logic — sửa khi cần thay đổi layout/behavior
└── main.jsx      ← Entry point — không cần sửa

public/           ← Ảnh và assets tĩnh
docs/             ← Tài liệu tiêu chuẩn
DEPLOY-GUIDE.md   ← Hướng dẫn deploy lên Vercel
CLAUDE.md         ← File này
```

---

## 3. Rules bắt buộc khi code

### Layout
- **Container chuẩn:** `maxWidth: isDesktop ? 1100 : 480`, `margin: "0 auto"`, `padding: isDesktop ? "72px 40px" : "36px 16px"`
- Không dùng `width: "100vw"` hay `margin: "0 calc(50% - 50vw)"` trừ Hero (full-bleed có chủ đích)
- Không thêm breakpoint thứ 3 trừ khi có lý do kỹ thuật rõ ràng

### Style
- Tất cả style là inline — không tạo CSS file hoặc class
- Màu lấy từ `COLORS` object trong `brand.js`
- Nội dung lấy từ `content.js`, không hardcode text trong App.jsx

### Content
- Khi thay đổi text/ảnh → chỉ sửa `content.js`
- Khi thay đổi màu → chỉ sửa `brand.js`

---

## 4. Validation checklist (trước khi push)

```
[ ] Container đúng guide (maxWidth 1100/480, margin auto)
[ ] Không có element overflow ngoài ý muốn
[ ] Images có alt text
[ ] registerUrl đã được cập nhật (không còn trỏ tgdd.vn test)
[ ] Footer legal text phản ánh đúng sản phẩm
```

---

## 5. Tài liệu tiêu chuẩn

| File | Nội dung |
|---|---|
| `docs/DESIGN-SYSTEM.md` | Màu, typography, border-radius, shadows |
| `docs/LAYOUT-GUIDE.md` | Container rules, breakpoints, spacing |
| `docs/SECTION-PATTERNS.md` | Spec từng section Hero → Footer |
| `docs/CONTENT-GUIDE.md` | Schema content.js, char limits, checklist |
| `docs/COPY-VOICE.md` | Tone of voice, headline formula, CTA rules |

---

## 6. Prompt Template — Tạo Landing Page Mới

Khi cần tạo landing page mới từ template này, dùng prompt sau:

```
Tôi muốn tạo landing page cho [TÊN SẢN PHẨM].

Thông tin sản phẩm:
- Tên: [tên]
- Tagline: [khẩu hiệu]
- USP 1: [lợi ích chính 1]
- USP 2: [lợi ích chính 2]
- CTA: [hành động mong muốn]
- Màu brand: [hex primary], [hex accent]
- Font: [tên font nếu có]
- Đối tác: [tên đối tác nếu có]
- URL đăng ký: [url]

Dựa trên template MWG PayLater trong repo này:
1. Cập nhật src/brand.js với màu mới
2. Cập nhật src/content.js với nội dung mới theo schema trong docs/CONTENT-GUIDE.md
3. Giữ nguyên toàn bộ layout và component patterns trong docs/SECTION-PATTERNS.md
4. Viết copy theo tiêu chuẩn trong docs/COPY-VOICE.md
```

---

## 7. Known Issues (cần fix trong tương lai)

| Issue | File | Mô tả |
|---|---|---|
| Hero image inconsistency | App.jsx:159 | Hardcode `/bg 1600x500.jpg` thay vì đọc `heroContent.bannerDesktop` |
| TYPE token unused | brand.js | `TYPE` object định nghĩa nhưng App.jsx không import |
| RADIUS token unused | brand.js | `RADIUS` object định nghĩa nhưng App.jsx hardcode trực tiếp |
| Font mismatch | brand.js / App.jsx | brand.js khai báo Helvetica, App.jsx dùng system font |
| Footer links no href | App.jsx | Links Điều khoản/Chính sách/Hỗ trợ chưa có URL thực |
| registerUrl placeholder | content.js | Đang trỏ https://tgdd.vn — cần URL thực khi launch |
