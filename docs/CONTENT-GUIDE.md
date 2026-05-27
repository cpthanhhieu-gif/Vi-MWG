# Content Guide — MWG PayLater Landing Page

> Hướng dẫn thay đổi nội dung cho landing page mới. Mọi nội dung đều nằm trong `src/content.js`.
> Không cần sửa App.jsx để đổi text/ảnh thông thường.

---

## 1. Cấu trúc `src/content.js`

```
content.js
├── registerUrl          ← URL trang đăng ký
├── heroContent          ← Hero banner (ảnh + CTA)
├── partnerContent       ← Logo đối tác
├── differentiatorContent ← 2 card USP
├── storeNetworkContent  ← Grid chuỗi cửa hàng
├── bnplContent          ← BNPL calculator (danh mục + kỳ hạn)
├── guideContent         ← 4 bước hướng dẫn + ảnh app
├── faqContent           ← Danh sách câu hỏi / trả lời
├── ctaContent           ← Section CTA cuối trang
└── footerContent        ← Disclaimer + links footer
```

---

## 2. Từng object — schema và giới hạn nội dung

### `registerUrl`
```js
export const registerUrl = "https://...";
```
URL của trang đăng ký / form. Dùng ở tất cả CTA trên trang.

---

### `heroContent`
```js
{
  bannerDesktop: "/hero-banner-desktop.png",  // ảnh full-width desktop, tỷ lệ ~16:5
  bannerMobile: "/hero-banner-mobile.png",    // ảnh mobile, tỷ lệ ~4:5, maxWidth 480px
  ctaPrimary: "Kích hoạt ngay",               // max 20 ký tự
  ctaSecondary: "Tìm hiểu thêm",             // max 20 ký tự
}
```

**Spec ảnh:**
- Desktop: 1600×500px (hoặc 1600×900px), JPG/PNG, < 300KB
- Mobile: 480×580px, PNG, < 150KB

---

### `partnerContent`
```js
{
  label: "Sản phẩm hợp tác",   // uppercase tự động qua CSS letter-spacing
  brands: [
    { logo: "/path.png", name: "Tên thương hiệu" },
    { logo: "/path.png", name: "Tên thương hiệu" },
  ]
}
```
Số lượng brands: **tối đa 3** (layout chưa hỗ trợ nhiều hơn).

---

### `differentiatorContent`
```js
{
  heading: "Điểm khác biệt",                     // max 25 ký tự
  subtitle: "...",                                // max 80 ký tự — nằm trên 1–2 dòng
  cards: [
    { title: "Miễn lãi tối đa",                  // max 20 ký tự
      subtitle: "0% lãi, đến 24 tháng",          // max 25 ký tự
      img: "/filename.png" },                     // tỷ lệ ~1.2:1, PNG có nền trong suốt
    { title: "Hạn mức tối đa",
      subtitle: "Lên đến 40 triệu đồng",
      img: "/filename.png" },
  ]
}
```
Số cards: **đúng 2** (layout 2 cột cố định).

---

### `storeNetworkContent`
```js
{
  heading: "Mua sắm tại hơn 3.200 cửa hàng toàn quốc",  // max 50 ký tự
  subtitle: "...",                                         // max 100 ký tự
  chains: [
    { name: "Thế Giới Di Động", count: "1.014", img: "/TGDĐ.png" },
    // ...
  ],
  footnote: "Số liệu Q1/2026",  // ghi chú nguồn số liệu
}
```
Số chains: **4** (grid 2×2 mobile, 4×1 desktop). Ảnh tỷ lệ ~16:9 hoặc ~2:1.

---

### `bnplContent`
```js
{
  heading: "Trả sau với Ví MWG",
  subtitle: "...",
  cta: "Đăng ký ngay →",
  ctaNote: "Duyệt trong 2 phút · Không cần chứng minh thu nhập",
  categories: [
    { img: "/cat-dienthoai.png", label: "Điện thoại",
      min: 3000000, max: 30000000, defaultPrice: 15000000 },
    // ...
  ],
  periods: [
    { value: 90,  label: "90 ngày",  desc: "1 lần • 0% lãi",
      installments: 1, hasInterest: false, monthlyRate: 0 },
    // ...
  ]
}
```
- `categories`: **3–6 items** (horizontal scroll nếu nhiều hơn)
- `periods`: **3 items** (layout period selector thiết kế cho 3)
- `monthlyRate`: số thập phân (0.0167 = 1.67%/tháng)

---

### `guideContent`
```js
{
  heading: "Hướng dẫn mở Ví MWG",
  subtitle: "Chỉ 4 bước, hoàn tất trong 2 phút",
  appImage: "/qtv-home.png",   // ảnh phone mockup, tỷ lệ ~9:16
  cta: "Đăng ký ngay →",
  ctaNote: "...",
  steps: [
    { num: 1, title: "Tên bước",     // max 25 ký tự
      desc: "Mô tả ngắn bước..." }, // max 80 ký tự
    // ...
  ]
}
```
Số steps: **3–5** (connector line animate đúng với mọi số lượng).

---

### `faqContent`
```js
{
  heading: "Câu hỏi thường gặp",
  items: [
    { q: "Câu hỏi?",      // max 80 ký tự
      a: "Trả lời..." },  // max 300 ký tự — tránh quá dài
    // ...
  ]
}
```
Số items: **4–8** (2 cột desktop — nên dùng số chẵn, mặc định 6).

---

### `ctaContent`
```js
{
  badge: "Ưu đãi dành riêng cho bạn",  // eyebrow label, max 40 ký tự
  heading: "Đăng ký Ví MWG — hoàn tiền đến 800.000đ",  // max 60 ký tự
  subtitle: "...",                       // max 100 ký tự, điều kiện ưu đãi
  button: "Kích hoạt ngay →",           // max 25 ký tự
}
```

---

### `footerContent`
```js
{
  legal: "Sản phẩm hợp tác giữa...",  // max 200 ký tự
  links: ["Điều khoản", "Chính sách", "Hỗ trợ"],  // đúng 3 links
}
```

---

## 3. Checklist thay nội dung cho landing page mới

```
[ ] 1. Đổi registerUrl → URL trang đăng ký sản phẩm mới
[ ] 2. Thay heroContent.bannerDesktop + bannerMobile → ảnh mới
[ ] 3. Cập nhật partnerContent.brands nếu đối tác khác
[ ] 4. Viết lại differentiatorContent.cards → 2 USP chính của sản phẩm
[ ] 5. Cập nhật storeNetworkContent nếu kênh phân phối khác
[ ] 6. Cấu hình bnplContent.categories + periods theo sản phẩm mới
[ ] 7. Viết lại guideContent.steps → quy trình đăng ký mới
[ ] 8. Viết lại faqContent.items → 6 câu hỏi phổ biến nhất
[ ] 9. Cập nhật ctaContent → ưu đãi + CTA phù hợp campaign
[ ] 10. Cập nhật footerContent.legal → tên sản phẩm + đơn vị cấp phép
```

---

## 4. Thay đổi brand (màu/logo)

Chỉ sửa `src/brand.js`:
- `COLORS.brandYellow` → màu primary mới
- `COLORS.brandRed` → màu accent/highlight mới
- Logo trong Header và Footer: tìm `cdnv2.tgdd.vn/...` trong App.jsx và thay URL
