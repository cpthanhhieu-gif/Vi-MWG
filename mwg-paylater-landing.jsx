import { useState, useEffect, useRef } from "react";

const MWG_YELLOW = "#FFD400";
const MWG_BLACK = "#1A1A1A";
const MWG_RED = "#D0021B";
const SOFT_PINK = "#FFF0F3";
const SOFT_YELLOW = "#FFFBEB";
const SOFT_BLUE = "#EEF6FF";
const WARM_GRAY = "#F8F7F5";
const BORDER = "#E8E8E8";
const TEXT_PRIMARY = "#1A1A1A";
const TEXT_SECONDARY = "#6B7280";
const TEXT_MUTED = "#9CA3AF";
const GRADIENT_START = "#FFD400";
const GRADIENT_END = "#FFE866";
const ACCENT_GREEN = "#10B981";
const ACCENT_BLUE = "#3B82F6";

const formatCurrency = (num) =>
  new Intl.NumberFormat("vi-VN").format(num) + "đ";

const CountUp = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
};

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="https://cdnv2.tgdd.vn/pim/cdn/images/202512/Logo%20MWG%20Paylater105741.png"
            alt="Ví MWG PayLater"
            style={{
              height: 32,
              objectFit: "contain",
            }}
          />
        </div>
        <button
          style={{
            background: MWG_YELLOW,
            color: MWG_BLACK,
            border: "none",
            borderRadius: 20,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

const HeroSection = () => (
  <div
    style={{
      background: `linear-gradient(180deg, ${MWG_YELLOW} 0%, ${GRADIENT_END} 60%, #FFFEF5 100%)`,
      padding: "32px 20px 40px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -60,
        right: -60,
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.25)",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -30,
        left: -40,
        width: 140,
        height: 140,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.2)",
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          display: "inline-block",
          background: "rgba(0,0,0,0.08)",
          borderRadius: 20,
          padding: "4px 14px",
          fontSize: 12,
          fontWeight: 500,
          color: MWG_BLACK,
          marginBottom: 16,
        }}
      >
        Mua trước, trả sau với Ví MWG
      </div>
      <h1
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: MWG_BLACK,
          lineHeight: 1.25,
          margin: "0 0 12px",
          letterSpacing: -0.5,
        }}
      >
        Mua sắm thả ga
        <br />
        <span style={{ color: MWG_RED }}>Trả sau 0%</span> lãi suất
      </h1>
      <p
        style={{
          fontSize: 15,
          color: "rgba(26,26,26,0.7)",
          lineHeight: 1.5,
          margin: "0 0 24px",
          maxWidth: 320,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Duyệt hồ sơ trong 30 giây. Hạn mức lên đến 5 triệu. Mua ngay, trả sau
        linh hoạt.
      </p>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <button
          style={{
            background: MWG_BLACK,
            color: "#fff",
            border: "none",
            borderRadius: 24,
            padding: "14px 28px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Kích hoạt ngay
        </button>
        <button
          style={{
            background: "rgba(255,255,255,0.7)",
            color: MWG_BLACK,
            border: "1.5px solid rgba(0,0,0,0.12)",
            borderRadius: 24,
            padding: "14px 20px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  </div>
);

const PartnerBanner = () => (
  <div
    style={{
      background: MWG_BLACK,
      borderRadius: 16,
      margin: "0 16px",
      marginTop: -20,
      padding: "16px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      position: "relative",
      zIndex: 2,
    }}
  >
    <div
      style={{
        fontSize: 11,
        color: "rgba(255,255,255,0.5)",
        textTransform: "uppercase",
        letterSpacing: 1,
      }}
    >
      Sản phẩm hợp tác
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        style={{
          background: MWG_YELLOW,
          borderRadius: 6,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 700,
          color: MWG_BLACK,
        }}
      >
        thegioididong.com
      </div>
      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 16 }}>×</span>
      <div
        style={{
          background: "#fff",
          borderRadius: 6,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 700,
          color: "#00A651",
        }}
      >
        Cake by VPBank
      </div>
    </div>
  </div>
);

const uspIcons = [
  `<svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="12" width="104" height="104" rx="12" fill="#FFD400" stroke="#F5B800" stroke-width="4"/><path d="M70 26L42 68H60L52 102L86 54H66L70 26Z" fill="#FFC400" stroke="#E0A800" stroke-width="3" stroke-linejoin="round"/></svg>`,
  `<svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="30" width="92" height="68" rx="18" fill="#FFD400" stroke="#F5B800" stroke-width="4"/><path d="M18 48H110" stroke="#F5B800" stroke-width="4"/><rect x="78" y="50" width="32" height="24" rx="10" fill="#FFC400" stroke="#E0A800" stroke-width="3"/><circle cx="94" cy="62" r="5" fill="#FFF3A0"/></svg>`,
  `<svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M94 44C86 30 72 22 56 22C34 22 18 38 18 60" stroke="#FFC400" stroke-width="14" stroke-linecap="round"/><path d="M92 20V46H66" stroke="#E0A800" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 84C42 98 56 106 72 106C94 106 110 90 110 68" stroke="#FFC400" stroke-width="14" stroke-linecap="round"/><path d="M36 108V82H62" stroke="#E0A800" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg width="48" height="48" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 18L102 32V60C102 86 84 106 64 112C44 106 26 86 26 60V32L64 18Z" fill="#FFD400" stroke="#F5B800" stroke-width="4"/><path d="M64 28V100" stroke="#FFF1A8" stroke-width="4" opacity="0.7"/></svg>`,
];

const uspItems = [
  {
    title: "Duyệt trong 30 giây",
    desc: "Chỉ cần CCCD, không cần chứng minh thu nhập",
    color: SOFT_YELLOW,
  },
  {
    title: "Hạn mức 5 triệu",
    desc: "Mua ngay, trả sau lên đến 5.000.000đ",
    color: SOFT_BLUE,
  },
  {
    title: "Trả góp linh hoạt",
    desc: "Chuyển đổi trả góp 3-12 tháng bất kỳ lúc nào",
    color: SOFT_PINK,
  },
  {
    title: "Không lãi suất",
    desc: "Miễn lãi hoàn toàn khi thanh toán đúng hạn",
    color: "#F0FFF4",
  },
];

const USPSection = () => (
  <div style={{ padding: "36px 16px 36px" }}>
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: MWG_BLACK,
          margin: "0 0 8px",
        }}
      >
        Ví MWG có gì{" "}
        <span
          style={{
            color: MWG_RED,
            textDecoration: "underline",
            textDecorationColor: MWG_YELLOW,
            textUnderlineOffset: 4,
            textDecorationThickness: 3,
          }}
        >
          khác biệt
        </span>
        ?
      </h2>
      <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0 }}>
        Ví trả sau tiện lợi, nhanh chóng và minh bạch
      </p>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
      }}
    >
      {uspItems.map((item, i) => (
        <div
          key={i}
          style={{
            background: item.color,
            borderRadius: 16,
            padding: "20px 16px",
            transition: "transform 0.2s",
          }}
        >
          <div
            style={{
              marginBottom: 10,
            }}
            dangerouslySetInnerHTML={{ __html: uspIcons[i] }}
          />
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: MWG_BLACK,
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontSize: 12,
              color: TEXT_SECONDARY,
              lineHeight: 1.5,
            }}
          >
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const guideSteps = [
  {
    num: 1,
    title: 'Mở app QTV',
    desc: 'Truy cập app QTV và chọn icon "Ví trả sau"',
    btn: "MỞ NGAY",
    screen: {
      topBar: "Trang chủ",
      items: ["Hot DEAL", "Mua sắm", "Tài chính", "Ví trả sau"],
      highlight: 3,
    },
  },
  {
    num: 2,
    title: 'Xác minh danh tính',
    desc: 'Chụp CCCD gắn chip và xác thực khuôn mặt (eKYC)',
    btn: "TIẾP TỤC",
    screen: {
      topBar: "Xác minh",
      items: ["Chụp mặt trước", "Chụp mặt sau", "Xác thực khuôn mặt"],
      highlight: 0,
    },
  },
  {
    num: 3,
    title: 'Nhận hạn mức',
    desc: 'Hệ thống tự động duyệt và cấp hạn mức chi tiêu',
    btn: "XÁC NHẬN",
    screen: {
      topBar: "Kết quả",
      items: ["Hạn mức: 5.000.000đ", "Kỳ hạn: 45 ngày", "Lãi suất: 0%"],
      highlight: 0,
    },
  },
  {
    num: 4,
    title: 'Mua sắm ngay',
    desc: 'Chọn sản phẩm yêu thích, thanh toán bằng Ví MWG',
    btn: "MUA NGAY",
    screen: {
      topBar: "Thanh toán",
      items: ["Chọn sản phẩm", "Thanh toán Ví MWG", "Hoàn tất"],
      highlight: 1,
    },
  },
];

const GuideSection = () => {
  const [current, setCurrent] = useState(0);
  const step = guideSteps[current];

  return (
    <div style={{ padding: "36px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: MWG_BLACK,
            margin: "0 0 8px",
          }}
        >
          Hướng dẫn mở{" "}
          <span style={{ color: MWG_RED }}>Ví MWG</span>
        </h2>
        <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0 }}>
          Chỉ 4 bước, hoàn tất trong 2 phút
        </p>
      </div>

      <div
        style={{
          background: WARM_GRAY,
          borderRadius: 24,
          padding: "24px 16px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 0,
            maxWidth: 240,
            margin: "0 auto 20px",
            overflow: "hidden",
            border: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              background: MWG_YELLOW,
              padding: "10px 16px",
              fontSize: 12,
              fontWeight: 600,
              color: MWG_BLACK,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>14:31</span>
            <span>{step.screen.topBar}</span>
            <span>●●●</span>
          </div>

          <div style={{ padding: "16px 12px" }}>
            {step.screen.items.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 12px",
                  marginBottom: 6,
                  borderRadius: 10,
                  background:
                    i === step.screen.highlight ? SOFT_YELLOW : WARM_GRAY,
                  border:
                    i === step.screen.highlight
                      ? `1.5px solid ${MWG_YELLOW}`
                      : `1px solid transparent`,
                  fontSize: 12,
                  fontWeight: i === step.screen.highlight ? 600 : 400,
                  color: MWG_BLACK,
                  textAlign: "left",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div style={{ padding: "0 12px 16px" }}>
            <div
              style={{
                background: MWG_YELLOW,
                borderRadius: 12,
                padding: "10px 0",
                fontSize: 14,
                fontWeight: 700,
                color: MWG_BLACK,
              }}
            >
              {step.btn}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 12,
          }}
        >
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1px solid ${BORDER}`,
              background: current === 0 ? WARM_GRAY : "#fff",
              cursor: current === 0 ? "default" : "pointer",
              fontSize: 16,
              color: current === 0 ? TEXT_MUTED : MWG_BLACK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
          <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
            Bước {step.num} / {guideSteps.length}
          </span>
          <button
            onClick={() =>
              setCurrent(Math.min(guideSteps.length - 1, current + 1))
            }
            disabled={current === guideSteps.length - 1}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: `1px solid ${BORDER}`,
              background:
                current === guideSteps.length - 1 ? WARM_GRAY : "#fff",
              cursor:
                current === guideSteps.length - 1 ? "default" : "pointer",
              fontSize: 16,
              color:
                current === guideSteps.length - 1 ? TEXT_MUTED : MWG_BLACK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        </div>

        <div style={{ fontSize: 16, fontWeight: 700, color: MWG_BLACK, marginBottom: 4 }}>
          {step.title}
        </div>
        <div style={{ fontSize: 13, color: TEXT_SECONDARY, lineHeight: 1.5 }}>
          {step.desc}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 14,
          }}
        >
          {guideSteps.map((_, i) => (
            <div
              key={i}
              style={{
                width: current === i ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: current === i ? MWG_YELLOW : BORDER,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const statsData = [
  { value: 200000, suffix: "+", label: "Điểm thanh toán" },
  { value: 45, suffix: " ngày", label: "Miễn lãi" },
  { value: 30, suffix: "s", label: "Duyệt hồ sơ" },
  { value: 5, suffix: " triệu", label: "Hạn mức tối đa" },
];

const StatsSection = () => (
  <div
    style={{
      padding: "28px 16px",
      background: WARM_GRAY,
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
      }}
    >
      {statsData.map((stat, i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "18px 16px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: MWG_BLACK,
              letterSpacing: -1,
            }}
          >
            <CountUp end={stat.value} suffix={stat.suffix} />
          </div>
          <div
            style={{ fontSize: 12, color: TEXT_SECONDARY, marginTop: 4 }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const bnplProducts = [
  { name: "Tai nghe Sony WH-1000XM5", price: 4990000, icon: "🎧" },
  { name: "Apple Watch SE 2024", price: 4990000, icon: "⌚" },
  { name: "Chuột Logitech MX Master 3S", price: 2490000, icon: "🖱️" },
  { name: "Loa JBL Charge 5", price: 3490000, icon: "🔊" },
  { name: "Bàn phím Apple Magic Keyboard", price: 2990000, icon: "⌨️" },
];

const ProductBNPLSection = () => {
  const [selected, setSelected] = useState(0);
  const [period, setPeriod] = useState(45);
  const product = bnplProducts[selected];
  const periodLabels = [
    { value: 45, label: "45 ngày", desc: "Trả 1 lần cuối kỳ" },
    { value: 30, label: "30 ngày", desc: "Trả 1 lần sau 30 ngày" },
  ];

  return (
    <div style={{ padding: "36px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: MWG_BLACK,
            margin: "0 0 8px",
          }}
        >
          Trả sau với <span style={{ color: MWG_RED }}>Ví MWG</span>
        </h2>
        <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0 }}>
          Chọn sản phẩm, xem ngay số tiền trả sau
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          paddingBottom: 8,
          marginBottom: 16,
        }}
      >
        {bnplProducts.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 12,
              border: selected === i ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
              background: selected === i ? SOFT_YELLOW : "#fff",
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 20 }}>{p.icon}</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: MWG_BLACK }}>
                {p.name.length > 18 ? p.name.slice(0, 18) + "…" : p.name}
              </div>
              <div style={{ fontSize: 11, color: TEXT_SECONDARY }}>
                {formatCurrency(p.price)}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          border: `1px solid ${BORDER}`,
          padding: 20,
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16,
            paddingBottom: 16,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: SOFT_YELLOW,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            {product.icon}
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: MWG_BLACK }}>
              {product.name}
            </div>
            <div style={{ fontSize: 14, color: MWG_RED, fontWeight: 600 }}>
              {formatCurrency(product.price)}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 10 }}>
            Chọn kỳ hạn trả sau
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {periodLabels.map((p) => (
              <button
                key={p.value}
                onClick={() => setPeriod(p.value)}
                style={{
                  flex: 1,
                  padding: "12px 8px",
                  borderRadius: 12,
                  border: period === p.value ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
                  background: period === p.value ? SOFT_YELLOW : "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: MWG_BLACK }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 11, color: TEXT_SECONDARY, marginTop: 2 }}>
                  {p.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            background: `linear-gradient(135deg, ${MWG_YELLOW}, ${GRADIENT_END})`,
            borderRadius: 14,
            padding: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(26,26,26,0.6)" }}>
              Giá sản phẩm
            </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: MWG_BLACK }}>
              {formatCurrency(product.price)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 13, color: "rgba(26,26,26,0.6)" }}>
              Phí / Lãi suất
            </span>
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: ACCENT_GREEN,
              }}
            >
              0đ
            </span>
          </div>
          <div
            style={{
              borderTop: "1px dashed rgba(0,0,0,0.15)",
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
              Số tiền trả sau {period} ngày
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: MWG_BLACK,
                letterSpacing: -0.5,
              }}
            >
              {formatCurrency(product.price)}
            </span>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 10,
              display: "inline-block",
              background: "rgba(0,0,0,0.1)",
              borderRadius: 12,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 600,
              color: MWG_BLACK,
            }}
          >
            Trả đúng giá, không phát sinh ✓
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    q: "Ví MWG PayLater là gì?",
    a: "Ví MWG PayLater là dịch vụ Mua trước - Trả sau, cho phép bạn mua sắm tại Thế Giới Di Động và Điện Máy Xanh với hạn mức lên đến 5 triệu đồng, miễn lãi khi thanh toán đúng hạn.",
  },
  {
    q: "Ai có thể đăng ký Ví MWG?",
    a: "Công dân Việt Nam từ 18 tuổi trở lên, có CCCD gắn chip còn hiệu lực. Không cần chứng minh thu nhập hay hồ sơ phức tạp.",
  },
  {
    q: "Ví MWG có tính lãi không?",
    a: "Không! Khi bạn thanh toán đúng hạn (trong kỳ miễn lãi 45 ngày), bạn hoàn toàn không phải trả bất kỳ khoản lãi nào. Nếu chuyển đổi trả góp, mức lãi suất sẽ được thông báo rõ ràng.",
  },
  {
    q: "Mua trước, trả sau có rủi ro gì không?",
    a: "Ví MWG minh bạch về mọi khoản phí. Bạn chỉ cần thanh toán đúng hạn để tránh phí trễ hạn. Mọi thông tin đều được hiển thị rõ trước khi xác nhận giao dịch.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ padding: "0 16px 36px" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: MWG_BLACK,
            margin: "0 0 8px",
          }}
        >
          Câu hỏi{" "}
          <span style={{ color: MWG_RED }}>thường gặp</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqData.map((faq, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 14,
              border: `1px solid ${openIdx === i ? MWG_YELLOW : BORDER}`,
              overflow: "hidden",
              transition: "border 0.2s",
            }}
          >
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: "100%",
                padding: "16px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: MWG_BLACK,
                  flex: 1,
                  paddingRight: 12,
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: TEXT_MUTED,
                  transform:
                    openIdx === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </button>
            {openIdx === i && (
              <div
                style={{
                  padding: "0 18px 16px",
                  fontSize: 13,
                  color: TEXT_SECONDARY,
                  lineHeight: 1.7,
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Minh Tuấn",
    role: "Nhân viên văn phòng",
    text: "Đăng ký trong 30 giây, mua được iPhone trả góp 0% mà không cần thẻ tín dụng!",
    rating: 5,
  },
  {
    name: "Thanh Hà",
    role: "Sinh viên",
    text: "Ví MWG giúp mình mua laptop trả sau mà không cần phiền ba mẹ. Rất tiện!",
    rating: 5,
  },
  {
    name: "Anh Khoa",
    role: "Freelancer",
    text: "Hạn mức tuy không cao nhưng đủ mua phụ kiện và đồ điện tử nhỏ. Rất hài lòng.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "36px 16px", background: WARM_GRAY }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: MWG_BLACK,
            margin: "0 0 8px",
          }}
        >
          Người dùng{" "}
          <span style={{ color: MWG_RED }}>nói gì</span>?
        </h2>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 24,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 40,
            color: MWG_YELLOW,
            lineHeight: 1,
            marginBottom: 8,
            fontFamily: "Georgia, serif",
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: 15,
            color: MWG_BLACK,
            lineHeight: 1.6,
            margin: "0 0 16px",
            minHeight: 48,
          }}
        >
          {testimonials[active].text}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${MWG_YELLOW}, ${GRADIENT_END})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
              color: MWG_BLACK,
            }}
          >
            {testimonials[active].name[0]}
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
              {testimonials[active].name}
            </div>
            <div style={{ fontSize: 12, color: TEXT_SECONDARY }}>
              {testimonials[active].role}
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            {"⭐".repeat(testimonials[active].rating)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 16,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: active === i ? MWG_YELLOW : BORDER,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const partners = [
  { name: "VPBank", color: "#00A651" },
  { name: "Cake", color: "#00A651" },
  { name: "NAPAS", color: "#1A3C8D" },
  { name: "VNPAY", color: "#003399" },
];

const TrustSection = () => (
  <div style={{ padding: "36px 16px" }}>
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <h2
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: MWG_BLACK,
          margin: "0 0 6px",
        }}
      >
        Đối tác uy tín
      </h2>
      <p style={{ fontSize: 13, color: TEXT_SECONDARY, margin: 0 }}>
        An toàn với hệ sinh thái tài chính hàng đầu
      </p>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      {partners.map((p, i) => (
        <div
          key={i}
          style={{
            background: WARM_GRAY,
            borderRadius: 12,
            padding: "12px 20px",
            fontSize: 14,
            fontWeight: 700,
            color: p.color,
          }}
        >
          {p.name}
        </div>
      ))}
    </div>
  </div>
);

const CTASection = () => (
  <div
    style={{
      margin: "0 16px 24px",
      background: `linear-gradient(135deg, ${MWG_BLACK} 0%, #2D2D2D 100%)`,
      borderRadius: 24,
      padding: "32px 24px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: MWG_YELLOW,
        opacity: 0.1,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -30,
        left: -30,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: MWG_YELLOW,
        opacity: 0.08,
      }}
    />
    <div style={{ position: "relative", zIndex: 1 }}>
      <div
        style={{
          fontSize: 13,
          color: MWG_YELLOW,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        🎁 Ưu đãi dành riêng cho bạn
      </div>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 8px",
          lineHeight: 1.3,
        }}
      >
        Đăng ký Ví MWG
        <br />
        nhận ngay{" "}
        <span style={{ color: MWG_YELLOW }}>40.000đ</span>
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.6)",
          margin: "0 0 20px",
          lineHeight: 1.5,
        }}
      >
        Áp dụng cho khách hàng kích hoạt lần đầu tại Thế Giới Di Động
      </p>
      <button
        style={{
          background: MWG_YELLOW,
          color: MWG_BLACK,
          border: "none",
          borderRadius: 24,
          padding: "14px 40px",
          fontSize: 16,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(255,212,0,0.3)",
        }}
      >
        Kích hoạt ngay →
      </button>
    </div>
  </div>
);

const Footer = () => (
  <div
    style={{
      background: WARM_GRAY,
      padding: "24px 16px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: MWG_YELLOW,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 9,
          color: MWG_BLACK,
        }}
      >
        MWG
      </div>
      <span style={{ fontWeight: 600, fontSize: 13, color: MWG_BLACK }}>
        Ví MWG PayLater
      </span>
    </div>
    <div
      style={{
        fontSize: 12,
        color: TEXT_MUTED,
        lineHeight: 1.6,
        maxWidth: 300,
        margin: "0 auto",
      }}
    >
      Sản phẩm hợp tác giữa Thế Giới Di Động và Cake by VPBank. Được cấp phép
      và giám sát bởi Ngân hàng Nhà nước Việt Nam.
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        marginTop: 16,
        fontSize: 12,
        color: TEXT_SECONDARY,
      }}
    >
      <span>Điều khoản</span>
      <span>Chính sách</span>
      <span>Hỗ trợ</span>
    </div>
  </div>
);

export default function MWGPayLaterLanding() {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        background: "#fff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: MWG_BLACK,
        overflow: "hidden",
      }}
    >
      <StickyHeader />
      <HeroSection />
      <PartnerBanner />
      <ProductBNPLSection />
      <USPSection />
      <StatsSection />
      <GuideSection />
      <TestimonialSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
