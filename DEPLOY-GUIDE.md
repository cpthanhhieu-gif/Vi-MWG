# Hướng dẫn Deploy MWG PayLater Landing Page

## Cấu trúc Project

```
mwg-paylater-landing/
├── src/
│   ├── brand.js        ← 🎨 Brand tokens (màu, font, spacing) — SỬA FILE NÀY khi đổi brand
│   ├── components.jsx  ← 🧩 UI components (Button, Card, FAQ...) — ít thay đổi
│   ├── App.jsx         ← 📄 Layout + nội dung — sửa khi đổi content
│   └── main.jsx        ← ⚙️ Entry point — không cần sửa
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

**Khi cần chỉnh sửa:**
- Đổi màu/font → chỉ sửa `brand.js` (~50 dòng)
- Đổi nội dung (FAQ, sản phẩm, text) → sửa `App.jsx`
- Đổi component behavior → sửa `components.jsx`

---

## Bước 1: Cài đặt công cụ

Cần có trước:
- **Node.js** (v18+): https://nodejs.org
- **Git**: https://git-scm.com
- **Tài khoản GitHub**: https://github.com
- **Tài khoản Vercel**: https://vercel.com (đăng nhập bằng GitHub)

---

## Bước 2: Chạy thử trên máy (Local)

```bash
# Mở Terminal, cd vào thư mục project
cd mwg-paylater-landing

# Cài dependencies
npm install

# Chạy dev server
npm run dev
```

Mở trình duyệt → http://localhost:5173 để xem kết quả.

---

## Bước 3: Tạo GitHub Repository

### Cách 1: Qua web (dễ nhất)

1. Vào https://github.com/new
2. Đặt tên repo: `mwg-paylater-landing`
3. Chọn **Private** (nếu không muốn public)
4. KHÔNG tick "Add README" (vì đã có file sẵn)
5. Bấm **Create repository**

### Cách 2: Qua GitHub CLI

```bash
gh repo create mwg-paylater-landing --private
```

---

## Bước 4: Push code lên GitHub

```bash
# Trong thư mục project
cd mwg-paylater-landing

# Khởi tạo git
git init

# Thêm tất cả file
git add .

# Commit đầu tiên
git commit -m "feat: MWG PayLater landing page v1"

# Kết nối với GitHub repo (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/mwg-paylater-landing.git

# Push lên
git branch -M main
git push -u origin main
```

---

## Bước 5: Deploy lên Vercel

### Cách 1: Qua Vercel Dashboard (khuyến nghị)

1. Vào https://vercel.com/new
2. Bấm **Import Git Repository**
3. Chọn repo `mwg-paylater-landing`
4. Vercel tự detect Vite → giữ nguyên settings mặc định:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Bấm **Deploy**
6. Chờ ~30 giây → nhận URL live (vd: `mwg-paylater-landing.vercel.app`)

### Cách 2: Qua Vercel CLI

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy (lần đầu sẽ hỏi setup)
vercel

# Deploy production
vercel --prod
```

---

## Bước 6: Auto Deploy khi sửa code

Sau khi connect GitHub với Vercel, mỗi lần push code mới → Vercel tự động build & deploy:

```bash
# Sửa brand.js (ví dụ đổi màu primary)
# Sửa App.jsx (ví dụ đổi nội dung FAQ)

# Commit & push
git add .
git commit -m "fix: đổi màu primary sang #FBBD00"
git push
```

→ Vercel tự động deploy phiên bản mới trong ~30 giây.

---

## Bước 7: Custom Domain (tuỳ chọn)

Nếu muốn dùng domain riêng (vd: `paylater.mwg.vn`):

1. Vào Vercel Dashboard → Project → Settings → Domains
2. Thêm domain: `paylater.mwg.vn`
3. Vercel sẽ cho bạn DNS records (CNAME hoặc A record)
4. Cập nhật DNS tại nhà cung cấp domain
5. Chờ DNS propagate (5-30 phút) → Done!

---

## Workflow tiết kiệm token với Claude

Khi cần Claude chỉnh sửa, chỉ cần nói:

> "Sửa `brand.js`: đổi primary thành #E63946"

hoặc

> "Sửa `App.jsx`: thêm 1 FAQ mới về phí trễ hạn"

Claude sẽ chỉ output đoạn code cần sửa (~5-10 dòng) thay vì rebuild toàn bộ file 400 dòng → tiết kiệm ~90% token.

---

## Tóm tắt Commands

```bash
# Setup lần đầu
npm install
npm run dev              # chạy local
git init && git add . && git commit -m "init"
git remote add origin https://github.com/YOU/REPO.git
git push -u origin main

# Mỗi lần sửa
git add . && git commit -m "mô tả thay đổi" && git push
# → Vercel tự deploy
```
