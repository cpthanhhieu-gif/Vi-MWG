import { useState, useEffect, useRef } from "react";

const MWG_YELLOW = "#FFD400";
const MWG_BLACK = "#1A1A1A";
const MWG_RED = "#D0021B";
const SOFT_PINK = "#FFF0F3";
const SOFT_YELLOW = "#FFFBEB";
const SOFT_BLUE = "#EEF6FF";
const WARM_GRAY = "#F8F7F5";
const BORDER = "#E8E8E8";
const TEXT_SECONDARY = "#6B7280";
const TEXT_MUTED = "#9CA3AF";
const GRADIENT_END = "#FFE866";
const ACCENT_GREEN = "#10B981";

const formatCurrency = (num) =>
  new Intl.NumberFormat("vi-VN").format(num) + "đ";

const useWindowWidth = () => {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
};

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

const StickyHeader = ({ isDesktop }) => {
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
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: isDesktop ? 1100 : 480,
          margin: "0 auto",
          padding: isDesktop ? "14px 40px" : "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://cdnv2.tgdd.vn/pim/cdn/images/202512/Logo%20MWG%20Paylater105741.png"
          alt="Ví MWG PayLater"
          style={{ height: isDesktop ? 36 : 32, objectFit: "contain" }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: isDesktop ? 28 : 0 }}>
          {isDesktop && (
            <>
              <a href="#" style={{ fontSize: 14, fontWeight: 500, color: TEXT_SECONDARY, textDecoration: "none" }}>Tính năng</a>
              <a href="#" style={{ fontSize: 14, fontWeight: 500, color: TEXT_SECONDARY, textDecoration: "none" }}>Hướng dẫn</a>
              <a href="#" style={{ fontSize: 14, fontWeight: 500, color: TEXT_SECONDARY, textDecoration: "none" }}>FAQ</a>
            </>
          )}
          <button
            style={{
              background: MWG_YELLOW,
              color: MWG_BLACK,
              border: "none",
              borderRadius: 20,
              padding: isDesktop ? "10px 24px" : "8px 18px",
              fontSize: isDesktop ? 14 : 13,
              fontWeight: 600,
              cursor: "pointer",
              marginLeft: isDesktop ? 8 : 0,
            }}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = ({ isDesktop }) => (
  <div style={{ background: "#fff" }}>
    {/* Banner image */}
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "0 40px" : "0",
      }}
    >
      <img
        src="/hero-banner ví mwg.png"
        alt="Ví MWG PayLater — Mua trước, trả sau"
        style={{ width: "100%", display: "block", borderRadius: isDesktop ? 0 : 0 }}
      />
    </div>

    {/* Buttons — bên dưới banner, không chồng lên ảnh */}
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "16px 40px 24px" : "12px 16px 20px",
        display: "flex",
        gap: isDesktop ? 14 : 10,
        justifyContent: "center",
      }}
    >
      <button
        style={{
          background: MWG_BLACK,
          color: "#fff",
          border: "none",
          borderRadius: 28,
          padding: isDesktop ? "16px 40px" : "14px 28px",
          fontSize: isDesktop ? 16 : 15,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
        }}
      >
        Kích hoạt ngay
      </button>
      <button
        style={{
          background: "#fff",
          color: MWG_BLACK,
          border: "1.5px solid rgba(0,0,0,0.15)",
          borderRadius: 28,
          padding: isDesktop ? "16px 28px" : "14px 20px",
          fontSize: isDesktop ? 16 : 15,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Tìm hiểu thêm
      </button>
    </div>
  </div>
);

const PartnerBanner = ({ isDesktop }) => (
  <div style={{ background: "#fff", paddingBottom: isDesktop ? 24 : 16 }}>
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "0 40px" : "0 16px",
      }}
    >
      <div
        style={{
          background: WARM_GRAY,
          borderRadius: 16,
          padding: isDesktop ? "20px 32px" : "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: TEXT_MUTED,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Sản phẩm hợp tác
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logos/Logo-The-Gioi-Di-Dong-MWG-B-V.png" alt="Thế Giới Di Động" style={{ height: 24, objectFit: "contain" }} />
          <span style={{ color: TEXT_MUTED, fontSize: 16 }}>×</span>
          <img src="/logo-cake.png" alt="Cake by VPBank" style={{ height: 24, objectFit: "contain" }} />
        </div>
      </div>
    </div>
  </div>
);


const guideSteps = [
  { num: 1, title: "Mở app QTV", desc: 'Truy cập app QTV và chọn icon "Ví trả sau"' },
  { num: 2, title: "Xác minh danh tính", desc: "Chụp CCCD gắn chip và xác thực khuôn mặt (eKYC)" },
  { num: 3, title: "Nhận hạn mức", desc: "Hệ thống tự động duyệt và cấp hạn mức chi tiêu" },
  { num: 4, title: "Mua sắm ngay", desc: "Chọn sản phẩm yêu thích, thanh toán bằng Ví MWG" },
];

const GuideSection = ({ isDesktop }) => {
  const [current, setCurrent] = useState(0);
  const step = guideSteps[current];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % guideSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: isDesktop ? 1100 : 480,
          margin: "0 auto",
          padding: isDesktop ? "72px 40px" : "36px 16px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: isDesktop ? 48 : 24 }}>
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: MWG_BLACK, margin: "0 0 8px" }}>
            Hướng dẫn mở <span style={{ color: MWG_RED }}>Ví MWG</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 16 : 14, color: TEXT_SECONDARY, margin: 0 }}>
            Chỉ 4 bước, hoàn tất trong 2 phút
          </p>
        </div>

        {isDesktop ? (
          <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              {guideSteps.map((s, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    padding: "20px 24px",
                    borderRadius: 16,
                    marginBottom: 12,
                    border: `2px solid ${current === i ? MWG_YELLOW : "transparent"}`,
                    background: current === i ? "#fff" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, color: TEXT_MUTED, letterSpacing: 1.5, marginBottom: 4 }}>
                    BƯỚC {s.num}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: MWG_BLACK, marginBottom: current === i ? 8 : 0 }}>
                    {s.title}
                  </div>
                  {current === i && (
                    <div style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.6 }}>{s.desc}</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ width: 280, flexShrink: 0 }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  border: `1px solid ${BORDER}`,
                }}
              >
                <img src="/qtv-home.png" alt="App QTV" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "24px 16px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: WARM_GRAY,
                borderRadius: 20,
                maxWidth: 220,
                margin: "0 auto 20px",
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img src="/qtv-home.png" alt="Màn hình app QTV" style={{ width: "100%", display: "block", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 12 }}>
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                style={{
                  width: 36, height: 36, borderRadius: "50%", border: `1px solid ${BORDER}`,
                  background: current === 0 ? WARM_GRAY : "#fff",
                  cursor: current === 0 ? "default" : "pointer",
                  fontSize: 16, color: current === 0 ? TEXT_MUTED : MWG_BLACK,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >‹</button>
              <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
                Bước {step.num} / {guideSteps.length}
              </span>
              <button
                onClick={() => setCurrent(Math.min(guideSteps.length - 1, current + 1))}
                disabled={current === guideSteps.length - 1}
                style={{
                  width: 36, height: 36, borderRadius: "50%", border: `1px solid ${BORDER}`,
                  background: current === guideSteps.length - 1 ? WARM_GRAY : "#fff",
                  cursor: current === guideSteps.length - 1 ? "default" : "pointer",
                  fontSize: 16, color: current === guideSteps.length - 1 ? TEXT_MUTED : MWG_BLACK,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >›</button>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: MWG_BLACK, marginBottom: 4 }}>{step.title}</div>
            <div style={{ fontSize: 13, color: TEXT_SECONDARY, lineHeight: 1.5 }}>{step.desc}</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
              {guideSteps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: current === i ? 24 : 8, height: 8, borderRadius: 4,
                    background: current === i ? MWG_YELLOW : BORDER,
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: isDesktop ? 40 : 28 }}>
          <button
            style={{
              background: MWG_BLACK,
              color: "#fff",
              border: "none",
              borderRadius: 28,
              padding: isDesktop ? "18px 56px" : "14px 40px",
              fontSize: isDesktop ? 16 : 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            }}
          >
            Đăng ký ngay →
          </button>
          <p style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 10 }}>
            Duyệt trong 30 giây · Không cần chứng minh thu nhập
          </p>
        </div>
      </div>
    </div>
  );
};

const bnplCategories = [
  { img: "/cat-dienthoai.png", label: "Điện thoại", product: "Samsung Galaxy A56 5G", price: 9990000, tag: "Bán chạy" },
  { img: "/cat-donghо.png", label: "Đồng hồ", product: "Samsung Galaxy Watch FE 40mm", price: 3160000, tag: "Yêu thích" },
  { img: "/cat-laptop.png", label: "Máy tính bảng", product: "Samsung Galaxy Tab A9 WiFi", price: 4490000, tag: "Trending" },
  { img: "/cat-phuкien.png", label: "Phụ kiện", product: "AirPods 4", price: 3490000, tag: "Đang hot" },
];

const periodOptions = [
  { value: 30, label: "30 ngày", desc: "Trả 1 lần • 0% lãi", installments: 1 },
  { value: 90, label: "90 ngày", desc: "Trả 1 lần • 0% lãi", installments: 1 },
  { value: 270, label: "3 tháng", desc: "Chia 3 kỳ • 0% lãi", installments: 3 },
];

const ProductBNPLSection = ({ isDesktop }) => {
  const [selected, setSelected] = useState(0);
  const [period, setPeriod] = useState(90);
  const cat = bnplCategories[selected];
  const per = periodOptions.find((p) => p.value === period);
  const payAmount = Math.round(cat.price / per.installments);

  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: isDesktop ? 1100 : 480,
          margin: "0 auto",
          padding: isDesktop ? "72px 40px" : "36px 16px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: isDesktop ? 44 : 20 }}>
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: MWG_BLACK, margin: "0 0 8px" }}>
            Trả sau với <span style={{ color: MWG_RED }}>Ví MWG</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 16 : 14, color: TEXT_SECONDARY, margin: 0 }}>
            Chọn danh mục, xem ngay số tiền trả sau
          </p>
        </div>

        {isDesktop ? (
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
                {bnplCategories.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                      padding: "16px 12px", borderRadius: 16,
                      border: selected === i ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
                      background: selected === i ? SOFT_YELLOW : "#fff",
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                  >
                    <img src={c.img} alt={c.label} style={{ width: 48, height: 48, objectFit: "contain" }} />
                    <span style={{ fontSize: 13, fontWeight: selected === i ? 700 : 500, color: MWG_BLACK }}>{c.label}</span>
                  </button>
                ))}
              </div>
              <div style={{ background: WARM_GRAY, borderRadius: 20, padding: "24px 28px" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_MUTED, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>
                  Sản phẩm đại diện
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 8 }}>
                    <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: MWG_BLACK }}>{cat.product}</div>
                    <div style={{ fontSize: 15, color: MWG_RED, fontWeight: 600, marginTop: 2 }}>{formatCurrency(cat.price)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: 380, flexShrink: 0 }}>
              <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BORDER}`, padding: 28, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, color: TEXT_SECONDARY, marginBottom: 12 }}>Chọn kỳ hạn trả sau</div>
                <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  {periodOptions.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPeriod(p.value)}
                      style={{
                        flex: 1, padding: "14px 8px", borderRadius: 12,
                        border: period === p.value ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
                        background: period === p.value ? SOFT_YELLOW : "#fff",
                        cursor: "pointer", transition: "all 0.2s", textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 700, color: MWG_BLACK }}>{p.label}</div>
                      <div style={{ fontSize: 11, color: TEXT_SECONDARY, marginTop: 2 }}>{p.desc}</div>
                    </button>
                  ))}
                </div>
                <div style={{ background: `linear-gradient(135deg, ${MWG_YELLOW}, ${GRADIENT_END})`, borderRadius: 14, padding: "20px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 14, color: "rgba(26,26,26,0.6)" }}>Giá sản phẩm</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: MWG_BLACK }}>{formatCurrency(cat.price)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 14, color: "rgba(26,26,26,0.6)" }}>Phí / Lãi suất</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: ACCENT_GREEN }}>0đ</span>
                  </div>
                  <div style={{ borderTop: "1px dashed rgba(0,0,0,0.15)", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
                      {per.installments > 1 ? "Mỗi kỳ thanh toán" : `Trả sau ${per.value} ngày`}
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 24, fontWeight: 800, color: MWG_BLACK, letterSpacing: -0.5 }}>
                        {formatCurrency(payAmount)}
                      </div>
                      {per.installments > 1 && (
                        <div style={{ fontSize: 11, color: "rgba(26,26,26,0.5)" }}>× {per.installments} kỳ</div>
                      )}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 11, color: TEXT_MUTED, textAlign: "center", margin: "12px 0 0", fontStyle: "italic" }}>
                  * Giá mang tính minh hoạ. Lãi suất 0% áp dụng theo chương trình từng thời điểm.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 20, scrollbarWidth: "none" }}>
              {bnplCategories.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                    padding: "10px 14px", borderRadius: 12,
                    border: selected === i ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
                    background: selected === i ? SOFT_YELLOW : "#fff",
                    cursor: "pointer", flexShrink: 0, transition: "all 0.2s",
                  }}
                >
                  <img src={c.img} alt={c.label} style={{ width: 36, height: 36, objectFit: "contain" }} />
                  <span style={{ fontSize: 11, fontWeight: selected === i ? 700 : 500, color: MWG_BLACK, whiteSpace: "nowrap" }}>{c.label}</span>
                </button>
              ))}
            </div>
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BORDER}`, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 6 }}>
                  <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: MWG_BLACK }}>{cat.product}</div>
                  <div style={{ fontSize: 14, color: MWG_RED, fontWeight: 600, marginTop: 2 }}>{formatCurrency(cat.price)}</div>
                </div>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: TEXT_SECONDARY, marginBottom: 10 }}>Chọn kỳ hạn trả sau</div>
                <div style={{ display: "flex", gap: 8 }}>
                  {periodOptions.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPeriod(p.value)}
                      style={{
                        flex: 1, padding: "12px 8px", borderRadius: 12,
                        border: period === p.value ? `2px solid ${MWG_BLACK}` : `1px solid ${BORDER}`,
                        background: period === p.value ? SOFT_YELLOW : "#fff",
                        cursor: "pointer", transition: "all 0.2s", textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 700, color: MWG_BLACK }}>{p.label}</div>
                      <div style={{ fontSize: 10, color: TEXT_SECONDARY, marginTop: 2 }}>{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ background: `linear-gradient(135deg, ${MWG_YELLOW}, ${GRADIENT_END})`, borderRadius: 14, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "rgba(26,26,26,0.6)" }}>Giá sản phẩm</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: MWG_BLACK }}>{formatCurrency(cat.price)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: "rgba(26,26,26,0.6)" }}>Phí / Lãi suất</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: ACCENT_GREEN }}>0đ</span>
                </div>
                <div style={{ borderTop: "1px dashed rgba(0,0,0,0.15)", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK }}>
                    {per.installments > 1 ? "Mỗi kỳ thanh toán" : `Trả sau ${per.value} ngày`}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: MWG_BLACK, letterSpacing: -0.5 }}>
                      {formatCurrency(payAmount)}
                    </div>
                    {per.installments > 1 && (
                      <div style={{ fontSize: 11, color: "rgba(26,26,26,0.5)" }}>× {per.installments} kỳ</div>
                    )}
                  </div>
                </div>
                </div>
              <p style={{ fontSize: 11, color: TEXT_MUTED, textAlign: "center", margin: "10px 0 0", fontStyle: "italic" }}>
                * Giá mang tính minh hoạ. Lãi suất 0% áp dụng theo chương trình từng thời điểm.
              </p>
            </div>
          </>
        )}
        <div style={{ textAlign: "center", marginTop: isDesktop ? 40 : 28 }}>
          <button
            style={{
              background: MWG_BLACK,
              color: "#fff",
              border: "none",
              borderRadius: 28,
              padding: isDesktop ? "18px 56px" : "14px 40px",
              fontSize: isDesktop ? 16 : 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            }}
          >
            Đăng ký ngay →
          </button>
          <p style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 10 }}>
            Duyệt trong 30 giây · Không cần chứng minh thu nhập
          </p>
        </div>
      </div>
    </div>
  );
};


const DifferentiatorSection = ({ isDesktop }) => (
  <div style={{ background: "#fff" }}>
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "32px 40px" : "20px 16px",
      }}
    >
      <img
        src="/banner điểm khác biệt của ví mwg 1.png"
        alt="Điểm khác biệt của Ví MWG PayLater"
        style={{
          width: "100%",
          display: "block",
          borderRadius: isDesktop ? 20 : 14,
        }}
      />
    </div>
  </div>
);

const storeChains = [
  { name: "Thế Giới Di Động", count: "1.014", img: "/card-tgdd.png" },
  { name: "Điện Máy Xanh", count: "2.006", img: "/card-dmx.png" },
  { name: "TopZone", count: "100+", img: "/card-topzone.png" },
  { name: "Avakids", count: "95", img: "/card-avakids.png" },
];

const StoreNetworkSection = ({ isDesktop }) => (
  <div style={{ background: "#fff" }}>
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "72px 40px" : "28px 16px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: isDesktop ? 44 : 20 }}>
        <h2 style={{ fontSize: isDesktop ? 34 : 20, fontWeight: 700, color: MWG_BLACK, margin: "0 0 6px" }}>
          Mua sắm tại hơn{" "}
          <span style={{ color: MWG_RED }}>3.200 cửa hàng</span>{" "}
          toàn quốc
        </h2>
        <p style={{ fontSize: isDesktop ? 16 : 13, color: TEXT_SECONDARY, margin: 0 }}>
          Ví MWG PayLater được chấp nhận tại toàn bộ hệ thống — online &amp; offline
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr 1fr 1fr" : "1fr 1fr",
          gap: isDesktop ? 16 : 10,
        }}
      >
        {storeChains.map((chain, i) => (
          <div key={i} style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${BORDER}` }}>
            <img src={chain.img} alt={chain.name} style={{ width: "100%", display: "block", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <span style={{ fontSize: 11, color: TEXT_MUTED }}>Số liệu Q1/2026</span>
        <span style={{ fontSize: 11, color: BORDER }}>•</span>
        <span style={{ fontSize: 11, color: TEXT_MUTED }}>Cập nhật liên tục</span>
      </div>
    </div>
  </div>
);


const faqData = [
  { q: "Ví MWG PayLater là gì?", a: "Ví MWG PayLater là dịch vụ Mua trước - Trả sau được phát triển bởi Thế Giới Di Động hợp tác cùng Cake by VPBank. Bạn được cấp hạn mức lên đến 40 triệu đồng, miễn lãi tối đa 90 ngày, duyệt hoàn toàn online trong 2 phút." },
  { q: "Ai có thể đăng ký Ví MWG?", a: "Công dân Việt Nam từ 18 tuổi trở lên, có CCCD gắn chip còn hiệu lực. Không cần chứng minh thu nhập hay hồ sơ phức tạp — duyệt tự động 100% online." },
  { q: "Ví MWG có tính lãi không?", a: "Không! Khi thanh toán đúng hạn trong kỳ miễn lãi (tối đa 90 ngày), bạn hoàn toàn không trả bất kỳ khoản lãi nào. Nếu muốn trả góp dài hạn hơn (lên đến 24 tháng), mức lãi suất sẽ được thông báo rõ ràng trước khi xác nhận." },
  { q: "Mua trước, trả sau có rủi ro gì không?", a: "Ví MWG minh bạch về mọi khoản phí. Bạn chỉ cần thanh toán đúng hạn để tránh phí trễ hạn. Mọi thông tin đều được hiển thị rõ trước khi xác nhận giao dịch." },
  { q: "Hạn mức tối đa của Ví MWG là bao nhiêu?", a: "Hạn mức lên đến 40.000.000đ, được xét duyệt tự động dựa trên kết quả eKYC. Hạn mức có thể được nâng dần theo lịch sử thanh toán đúng hạn của bạn." },
  { q: "Dùng Ví MWG được ở đâu?", a: "Ví MWG PayLater được chấp nhận tại hơn 3.200 cửa hàng của Thế Giới Di Động, Điện Máy Xanh, TopZone, Avakids và Nhà thuốc An Khang — cả online lẫn offline. Chọn Ví MWG làm phương thức thanh toán khi checkout là hoàn tất." },
];

const FAQItem = ({ faq, openIdx, idx, setOpenIdx }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 14,
      border: `1px solid ${openIdx === idx ? MWG_YELLOW : BORDER}`,
      overflow: "hidden",
      transition: "border 0.2s",
      marginBottom: 8,
    }}
  >
    <button
      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
      style={{
        width: "100%", padding: "16px 18px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "none", border: "none", cursor: "pointer", textAlign: "left",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 600, color: MWG_BLACK, flex: 1, paddingRight: 12 }}>
        {faq.q}
      </span>
      <span
        style={{
          fontSize: 18, color: TEXT_MUTED, flexShrink: 0,
          transform: openIdx === idx ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}
      >+</span>
    </button>
    {openIdx === idx && (
      <div style={{ padding: "0 18px 16px", fontSize: 13, color: TEXT_SECONDARY, lineHeight: 1.7 }}>
        {faq.a}
      </div>
    )}
  </div>
);

const FAQSection = ({ isDesktop }) => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: isDesktop ? 1100 : 480,
          margin: "0 auto",
          padding: isDesktop ? "72px 40px" : "0 16px 36px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: isDesktop ? 44 : 24 }}>
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: MWG_BLACK, margin: "0 0 8px" }}>
            Câu hỏi <span style={{ color: MWG_RED }}>thường gặp</span>
          </h2>
        </div>
        {isDesktop ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
            <div>
              {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, i) => (
                <FAQItem key={i} faq={faq} openIdx={openIdx} idx={i} setOpenIdx={setOpenIdx} />
              ))}
            </div>
            <div>
              {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, i) => {
                const idx = Math.ceil(faqData.length / 2) + i;
                return <FAQItem key={idx} faq={faq} openIdx={openIdx} idx={idx} setOpenIdx={setOpenIdx} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            {faqData.map((faq, i) => (
              <FAQItem key={i} faq={faq} openIdx={openIdx} idx={i} setOpenIdx={setOpenIdx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CTASection = ({ isDesktop }) => (
  <div style={{ padding: isDesktop ? "0 0 40px" : "0 16px 24px" }}>
    <div style={{ maxWidth: isDesktop ? 1100 : 480, margin: "0 auto", padding: isDesktop ? "0 40px" : "0" }}>
      <div
        style={{
          background: `linear-gradient(135deg, ${MWG_BLACK} 0%, #2D2D2D 100%)`,
          borderRadius: 24,
          padding: isDesktop ? "52px 64px" : "32px 24px",
          position: "relative",
          overflow: "hidden",
          display: isDesktop ? "flex" : "block",
          alignItems: isDesktop ? "center" : undefined,
          justifyContent: isDesktop ? "space-between" : undefined,
          textAlign: isDesktop ? "left" : "center",
        }}
      >
        <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: MWG_YELLOW, opacity: 0.08 }} />
        <div style={{ position: "absolute", bottom: -30, left: isDesktop ? -30 : -30, width: 120, height: 120, borderRadius: "50%", background: MWG_YELLOW, opacity: 0.06 }} />
        <div style={{ position: "relative", zIndex: 1, flex: isDesktop ? 1 : undefined }}>
          <div style={{ fontSize: 13, color: MWG_YELLOW, fontWeight: 600, marginBottom: 8 }}>
            🎁 Ưu đãi dành riêng cho bạn
          </div>
          <h2 style={{ fontSize: isDesktop ? 36 : 24, fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>
            Đăng ký Ví MWG — nhận ngay{" "}
            <span style={{ color: MWG_YELLOW }}>40.000đ</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 15 : 13, color: "rgba(255,255,255,0.6)", margin: isDesktop ? 0 : "0 0 20px", lineHeight: 1.5 }}>
            Áp dụng cho khách hàng kích hoạt lần đầu tại Thế Giới Di Động
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 1, flexShrink: isDesktop ? 0 : undefined }}>
          <button
            style={{
              background: MWG_YELLOW,
              color: MWG_BLACK,
              border: "none",
              borderRadius: 28,
              padding: isDesktop ? "18px 52px" : "14px 40px",
              fontSize: isDesktop ? 17 : 16,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(255,212,0,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            Kích hoạt ngay →
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ isDesktop }) => (
  <div style={{ background: WARM_GRAY, padding: isDesktop ? "40px 0" : "24px 16px", textAlign: "center" }}>
    <div style={{ maxWidth: isDesktop ? 1100 : 480, margin: "0 auto", padding: isDesktop ? "0 40px" : "0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        <img
          src="https://cdnv2.tgdd.vn/pim/cdn/images/202512/Logo%20MWG%20Paylater105741.png"
          alt="Ví MWG PayLater"
          style={{ height: 36, objectFit: "contain" }}
        />
      </div>
      <div style={{ fontSize: 12, color: TEXT_MUTED, lineHeight: 1.6, maxWidth: 400, margin: "0 auto" }}>
        Sản phẩm hợp tác giữa Thế Giới Di Động và Cake by VPBank. Được cấp phép và giám sát bởi Ngân hàng Nhà nước Việt Nam.
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16, fontSize: 12, color: TEXT_SECONDARY }}>
        <span>Điều khoản</span>
        <span>Chính sách</span>
        <span>Hỗ trợ</span>
      </div>
    </div>
  </div>
);

export default function App() {
  const w = useWindowWidth();
  const isDesktop = w >= 768;

  return (
    <div
      style={{
        background: "#fff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: MWG_BLACK,
      }}
    >
      <StickyHeader isDesktop={isDesktop} />
      <HeroSection isDesktop={isDesktop} />
      <PartnerBanner isDesktop={isDesktop} />
      <DifferentiatorSection isDesktop={isDesktop} />
      <StoreNetworkSection isDesktop={isDesktop} />
      <ProductBNPLSection isDesktop={isDesktop} />
      <GuideSection isDesktop={isDesktop} />
      <FAQSection isDesktop={isDesktop} />
      <CTASection isDesktop={isDesktop} />
      <Footer isDesktop={isDesktop} />
    </div>
  );
}
