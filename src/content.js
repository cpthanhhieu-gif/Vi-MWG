// CMS-ready content config.
// To connect a CMS: replace exports with API fetch calls, shape must match.

// Registration URL — update when the actual sign-up page is ready
export const registerUrl = "https://tgdd.vn"; // TODO: replace with real register URL

export const heroContent = {
  bannerDesktop: "/hero-banner-desktop.png",
  bannerMobile: "/hero-banner-mobile.png",
  ctaPrimary: "Kích hoạt ngay",
  ctaSecondary: "Tìm hiểu thêm",
};

export const partnerContent = {
  label: "Sản phẩm hợp tác",
  brands: [
    { logo: "/logos/logo-tgdd-mwg.png", name: "Thế Giới Di Động" },
    { logo: "/logo-cake.png", name: "Cake by VPBank" },
  ],
};

export const differentiatorContent = {
  heading: "Điểm khác biệt",
  subtitle: "Hạn mức lên đến 40 triệu · Miễn lãi tối đa · Duyệt tự động 2 phút",
  cards: [
    { title: "Miễn lãi tối đa", subtitle: "0% lãi, đến 24 tháng", img: "/90-commit.png" },
    { title: "Hạn mức tối đa", subtitle: "Lên đến 40 triệu đồng", img: "/40-commit.png" },
  ],
};

export const storeNetworkContent = {
  heading: "Mua sắm tại hơn 3.200 cửa hàng toàn quốc",
  subtitle: "Ví MWG PayLater được chấp nhận tại toàn bộ hệ thống — tại cửa hàng và trên website",
  chains: [
    { name: "Thế Giới Di Động", count: "1.014", img: "/TGDĐ.png" },
    { name: "Điện Máy Xanh",    count: "2.006", img: "/DMX.png" },
    { name: "TopZone",           count: "100+",  img: "/Topzone.png" },
    { name: "Avakids",           count: "95",    img: "/Avakids.png" },
  ],
  footnote: "Số liệu Q1/2026",
};

export const bnplContent = {
  heading: "Trả sau với Ví MWG",
  subtitle: "Chọn danh mục, điều chỉnh giá — xem ngay số tiền trả mỗi tháng",
  cta: "Đăng ký ngay →",
  ctaNote: "Duyệt trong 2 phút · Không cần chứng minh thu nhập",
  categories: [
    { img: "/cat-dienthoai.png", label: "Điện thoại", min: 3000000,  max: 30000000, defaultPrice: 15000000 },
    { img: "/cat-laptop.png",    label: "Laptop",     min: 10000000, max: 40000000, defaultPrice: 29000000 },
    { img: "/cat-smartwatch.png",label: "Smartwatch", min: 2000000,  max: 15000000, defaultPrice: 6000000  },
    { img: "/cat-maylanh.png",   label: "Máy lạnh",   min: 5000000,  max: 20000000, defaultPrice: 10000000 },
    { img: "/cat-phukien.png",   label: "Phụ kiện",   min: 500000,   max: 5000000,  defaultPrice: 2000000  },
  ],
  periods: [
    { value: 90,  label: "90 ngày",  desc: "1 lần • 0% lãi",  installments: 1,  hasInterest: false, monthlyRate: 0      },
    { value: 270, label: "3 tháng",  desc: "3 kỳ • 0% lãi*",  installments: 3,  hasInterest: false, monthlyRate: 0      },
    { value: 720, label: "24 tháng", desc: "24 kỳ • có lãi",  installments: 24, hasInterest: true,  monthlyRate: 0.0167 },
  ],
};

export const guideContent = {
  heading: "Hướng dẫn mở Ví MWG",
  subtitle: "Chỉ 4 bước, hoàn tất trong 2 phút",
  appImage: "/qtv-home.png",
  cta: "Đăng ký ngay →",
  ctaNote: "Duyệt trong 2 phút · Không cần chứng minh thu nhập",
  steps: [
    { num: 1, title: "Mở app QTV",         desc: 'Truy cập app QTV và chọn icon "Ví trả sau"'          },
    { num: 2, title: "Xác minh danh tính", desc: "Chụp CCCD gắn chip và xác thực khuôn mặt (eKYC)"    },
    { num: 3, title: "Nhận hạn mức",       desc: "Hệ thống tự động duyệt và cấp hạn mức chi tiêu"     },
    { num: 4, title: "Mua sắm ngay",       desc: "Chọn sản phẩm yêu thích, thanh toán bằng Ví MWG"    },
  ],
};

export const faqContent = {
  heading: "Câu hỏi thường gặp",
  items: [
    { q: "Ví MWG PayLater là gì?",                   a: "Ví MWG PayLater là dịch vụ Mua trước - Trả sau được phát triển bởi Thế Giới Di Động hợp tác cùng Cake by VPBank. Bạn được cấp hạn mức lên đến 40 triệu đồng, miễn lãi tối đa 90 ngày, duyệt ngay trên điện thoại trong 2 phút." },
    { q: "Ai có thể đăng ký Ví MWG?",                a: "Công dân Việt Nam từ 18 tuổi trở lên, có CCCD gắn chip còn hiệu lực. Không cần chứng minh thu nhập hay hồ sơ phức tạp — duyệt tự động, không cần đến cửa hàng." },
    { q: "Ví MWG có tính lãi không?",                a: "Không! Khi thanh toán đúng hạn trong kỳ miễn lãi (tối đa 90 ngày), bạn hoàn toàn không trả bất kỳ khoản lãi nào. Nếu muốn trả góp dài hạn hơn (lên đến 24 tháng), mức lãi suất sẽ được thông báo rõ ràng trước khi xác nhận." },
    { q: "Mua trước, trả sau có rủi ro gì không?",   a: "Ví MWG minh bạch về mọi khoản phí. Bạn chỉ cần thanh toán đúng hạn để tránh phí trễ hạn. Mọi thông tin đều được hiển thị rõ trước khi xác nhận giao dịch." },
    { q: "Hạn mức tối đa của Ví MWG là bao nhiêu?",  a: "Hạn mức lên đến 40.000.000đ, được xét duyệt tự động dựa trên kết quả xác minh danh tính qua điện thoại. Hạn mức có thể được nâng dần theo lịch sử thanh toán đúng hạn của bạn." },
    { q: "Dùng Ví MWG được ở đâu?",                  a: "Ví MWG PayLater được chấp nhận tại hơn 3.200 cửa hàng của Thế Giới Di Động, Điện Máy Xanh, TopZone và Avakids — cả tại cửa hàng lẫn trên website. Chọn Ví MWG làm phương thức thanh toán là hoàn tất." },
  ],
};

export const ctaContent = {
  badge:    "Ưu đãi dành riêng cho bạn",
  heading:  "Đăng ký Ví MWG — hoàn tiền đến 800.000đ",
  subtitle: "Áp dụng cho giao dịch đủ điều kiện · Theo chương trình từng thời điểm",
  button:   "Kích hoạt ngay →",
};

export const footerContent = {
  legal:   "Sản phẩm hợp tác giữa Thế Giới Di Động và Cake by VPBank. Được cấp phép và giám sát bởi Ngân hàng Nhà nước Việt Nam.",
  links:   ["Điều khoản", "Chính sách", "Hỗ trợ"],
};
