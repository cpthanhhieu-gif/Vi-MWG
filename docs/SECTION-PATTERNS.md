# Section Patterns — MWG PayLater Landing Page

> Spec chi tiết cho từng section theo thứ tự xuất hiện trên trang.
> Khi tạo landing page mới, giữ nguyên pattern và thay nội dung trong `content.js`.

---

## Thứ tự sections

```
1. StickyHeader
2. HeroSection
3. PartnerBanner
4. DifferentiatorSection
5. StoreNetworkSection
6. ProductBNPLSection      [id="section-bnpl"]
7. GuideSection            [id="section-huong-dan"]
8. FAQSection              [id="section-faq"]
9. CTASection
10. Footer
```

---

## 1. StickyHeader

**Mục đích:** Navigation cố định, luôn hiển thị khi scroll.

| Thuộc tính | Desktop | Mobile |
|---|---|---|
| Position | `sticky, top: 0, z-index: 100` | sticky |
| Background | `rgba(255,255,255,0.97)` + blur 12px | same |
| Border | `1px solid borderLight` | same |
| Shadow | Xuất hiện sau khi scroll > 40px | same |
| Nav links | Trả sau / Hướng dẫn / FAQ (hiện) | Ẩn |
| CTA button | Yellow pill "Đăng ký ngay" | Yellow pill |
| Logo height | 36px | 32px |

**Nội dung thay đổi được:**
- Logo URL
- Nav link labels và href
- CTA text và href → `registerUrl` trong `content.js`

---

## 2. HeroSection

**Mục đích:** First impression — thể hiện USP ngay lập tức qua banner visual.

### Desktop
- Full-bleed image `bg 1600x500.jpg` (width 100%, auto height)
- 2 CTA buttons overlay absolute ở `bottom: 5%`, canh giữa

### Mobile
- Image `hero-banner-mobile.png`, `maxWidth: 480`, canh giữa
- 2 CTA buttons bên dưới image, padding `12px 16px 20px`

| CTA | Desktop | Mobile |
|---|---|---|
| Primary (Kích hoạt) | Black bg, pill, 16px | Black bg, pill, 15px |
| Secondary (Tìm hiểu) | White + border, pill | White + border, pill |

**Nội dung thay đổi được:** `heroContent` trong `content.js`
- `bannerDesktop` → file ảnh desktop
- `bannerMobile` → file ảnh mobile
- `ctaPrimary`, `ctaSecondary` → text buttons

> ⚠️ App.jsx hiện hardcode `/bg 1600x500.jpg` thay vì đọc từ `heroContent.bannerDesktop`. Cần sửa khi refactor.

---

## 3. PartnerBanner

**Mục đích:** Xây dựng trust — hiện logo đối tác ngay sau hero.

- Card nền `warmGray`, border-radius 16px
- Label "SẢN PHẨM HỢP TÁC" — uppercase, letter-spacing 1.5
- Desktop: flex row (label + logos), Mobile: flex column
- Logo height: 60px (desktop), 40px (mobile)

**Nội dung thay đổi được:** `partnerContent` trong `content.js`
- `label` → text eyebrow
- `brands[]` → danh sách logo + tên

---

## 4. DifferentiatorSection

**Mục đích:** Làm nổi bật 2–3 USP bằng card với floating image.

- Grid 2 cột, luôn giữ 2 cột kể cả mobile
- Mỗi card: outer div (relative + paddingTop) + gray card body + absolute image

### Image floating mechanics
| Giá trị | Desktop | Mobile |
|---|---|---|
| `outerPaddingTop` | `clamp(110px, 13vw, 155px)` | `clamp(70px, 23vw, 95px)` |
| `imgWidth` | 58% | 84% |
| `cardBodyPaddingTop` | `clamp(75px, 9vw, 105px)` | `clamp(50px, 17vw, 68px)` |

**Lý do clamp có cap thấp ở mobile:** Container cố định 480px → clamp phải cap để tránh overshooting.

**Nội dung thay đổi được:** `differentiatorContent` trong `content.js`
- `heading`, `subtitle`
- `cards[]` → mỗi card có `title`, `subtitle`, `img`

---

## 5. StoreNetworkSection

**Mục đích:** Social proof — hiển thị độ phủ chuỗi cửa hàng.

- Grid 4 cột (desktop) / 2 cột (mobile)
- Mỗi ô: ảnh cửa hàng với số lượng overlay (CSS image fill)
- Border-radius: 14px, overflow hidden

**Nội dung thay đổi được:** `storeNetworkContent` trong `content.js`
- `heading`, `subtitle`
- `chains[]` → mỗi chain: `name`, `count`, `img`
- `footnote` → ghi chú số liệu

---

## 6. ProductBNPLSection (BNPL Calculator)

**Mục đích:** Interactive tool giúp user hiểu con số cụ thể trước khi đăng ký.

**Components:**
1. Category tabs (horizontal scroll mobile) — chọn sản phẩm
2. Price slider + input — nhập giá
3. Period selector (3 options) — chọn kỳ hạn
4. Breakdown card — kết quả tính toán real-time

### Layout
- Desktop: Slider + Period (left flex) | Breakdown card (right, width 380px)
- Mobile: Stack dọc

### Period options (hiện tại)
| Value | Label | Lãi |
|---|---|---|
| 90 ngày | 1 lần trả | 0% |
| 3 tháng | 3 kỳ | 0%* |
| 24 tháng | 24 kỳ | 1.67%/tháng |

**Nội dung thay đổi được:** `bnplContent` trong `content.js`
- `categories[]` → danh sách sản phẩm, min/max/defaultPrice
- `periods[]` → kỳ hạn, lãi suất

---

## 7. GuideSection

**Mục đích:** Giảm friction — cho user thấy quy trình đơn giản 4 bước.

### Desktop
- Left column: step list có connector line dọc, click để highlight
- Right column: phone mockup sticky (top: 120px), width 256px, với prev/next arrows
- IntersectionObserver auto-highlight step khi scroll đến

### Mobile
- Phone mockup trước
- Manual prev/next navigation
- Auto-advance mỗi 2.8 giây

**Nội dung thay đổi được:** `guideContent` trong `content.js`
- `steps[]` → số bước, title, description
- `appImage` → ảnh phone mockup

---

## 8. FAQSection

**Mục đích:** Giải toả mọi lo ngại trước khi đăng ký.

- Desktop: 2 cột grid, câu hỏi split đều
- Mobile: 1 cột, accordion
- Mỗi FAQItem: border highlight `brandYellow` khi mở
- Icon: `+` rotate 45° thành `×` khi mở

**Nội dung thay đổi được:** `faqContent` trong `content.js`
- `items[]` → mỗi item: `q` (question), `a` (answer)

---

## 9. CTASection

**Mục đích:** Final push — tạo urgency với ưu đãi + CTA rõ ràng.

- Dark card: `linear-gradient(135deg, brandBlack, #2D2D2D)`
- Desktop: flex row (text left + button right)
- Mobile: block, text center, button center
- Decorative circles (yellow, opacity 0.06–0.08) ở góc

| Element | Desktop | Mobile |
|---|---|---|
| Eyebrow | 13px yellow | same |
| Heading | 36px white + yellow highlight | 24px |
| Subtitle | 15px white 60% opacity | 13px |
| CTA button | Yellow pill 18px padding | 14px padding |

**Nội dung thay đổi được:** `ctaContent` trong `content.js`
- `badge` → eyebrow text
- `heading` → tiêu đề (có thể có `<span>` highlight)
- `subtitle` → mô tả điều kiện
- `button` → CTA text

---

## 10. Footer

**Mục đích:** Legal + links — tối giản.

- Nền `warmGray`
- Logo canh giữa
- Legal text 12px, max-width 400px, canh giữa
- 3 links ngang: Điều khoản / Chính sách / Hỗ trợ

**Nội dung thay đổi được:** `footerContent` trong `content.js`
- `legal` → câu disclaimer
- `links[]` → tên link (chưa có href — TODO)
