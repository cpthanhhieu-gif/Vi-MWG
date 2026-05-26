import { useState, useEffect, useRef } from "react";
import { COLORS } from "./brand";
import {
  heroContent, partnerContent, differentiatorContent, storeNetworkContent,
  bnplContent, guideContent, faqContent, ctaContent, footerContent, registerUrl,
} from "./content";

const formatCurrency = (num) =>
  new Intl.NumberFormat("vi-VN").format(num) + "đ";

const useWindowWidth = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
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
        borderBottom: `1px solid ${COLORS.borderLight}`,
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
              <a href="#section-bnpl" style={{ fontSize: 14, fontWeight: 500, color: COLORS.textGray, textDecoration: "none" }}>Trả sau</a>
              <a href="#section-huong-dan" style={{ fontSize: 14, fontWeight: 500, color: COLORS.textGray, textDecoration: "none" }}>Hướng dẫn</a>
              <a href="#section-faq" style={{ fontSize: 14, fontWeight: 500, color: COLORS.textGray, textDecoration: "none" }}>FAQ</a>
            </>
          )}
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: COLORS.brandYellow,
              color: COLORS.brandBlack,
              borderRadius: 20,
              padding: isDesktop ? "10px 24px" : "8px 18px",
              fontSize: isDesktop ? 14 : 13,
              fontWeight: 600,
              cursor: "pointer",
              marginLeft: isDesktop ? 8 : 0,
              textDecoration: "none",
            }}
          >
            Đăng ký ngay
          </a>
        </div>
      </div>
    </div>
  );
};

const HeroSection = ({ isDesktop }) => (
  <div style={{ background: "#fff" }}>
    <div
      style={{
        maxWidth: isDesktop ? 1100 : 480,
        margin: "0 auto",
        padding: isDesktop ? "0 40px" : "0",
      }}
    >
      <img
        src={isDesktop ? "/hero-banner-desktop.png" : "/hero-banner-mobile.png"}
        alt="Ví MWG PayLater — Mua trước, trả sau"
        style={{ width: "100%", display: "block" }}
      />
    </div>

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
      <a
        href={registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: COLORS.brandBlack,
          color: "#fff",
          borderRadius: 28,
          padding: isDesktop ? "16px 40px" : "14px 28px",
          fontSize: isDesktop ? 16 : 15,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          textDecoration: "none",
        }}
      >
        Kích hoạt ngay
      </a>
      <a
        href="#section-faq"
        style={{
          display: "inline-block",
          background: "#fff",
          color: COLORS.brandBlack,
          border: "1.5px solid rgba(0,0,0,0.15)",
          borderRadius: 28,
          padding: isDesktop ? "16px 28px" : "14px 20px",
          fontSize: isDesktop ? 16 : 15,
          fontWeight: 600,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Tìm hiểu thêm
      </a>
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
          background: COLORS.warmGray,
          borderRadius: 16,
          padding: isDesktop ? "28px 40px" : "20px 20px",
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isDesktop ? 32 : 12,
        }}
      >
        <div
          style={{
            fontSize: isDesktop ? 14 : 11,
            fontWeight: isDesktop ? 600 : 400,
            color: COLORS.textFaint,
            textTransform: "uppercase",
            letterSpacing: 1.5,
          }}
        >
          Sản phẩm hợp tác
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: isDesktop ? 28 : 16 }}>
          <img
            src="/logos/logo-tgdd-mwg.png"
            alt="Thế Giới Di Động"
            style={{ height: isDesktop ? 60 : 40, objectFit: "contain" }}
          />
          <span style={{ color: COLORS.borderLight, fontSize: isDesktop ? 28 : 20 }}>×</span>
          <img
            src="/logo-cake.png"
            alt="Cake by VPBank"
            style={{ height: isDesktop ? 60 : 40, objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  </div>
);


const guideSteps = guideContent.steps;

const GuideSection = ({ isDesktop }) => {
  const [current, setCurrent] = useState(0);
  const stepRefs = useRef([]);
  const activeStep = guideSteps[current];

  // Mobile: auto-advance
  useEffect(() => {
    if (isDesktop) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % guideSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isDesktop]);

  // Desktop: activate step on scroll via IntersectionObserver
  useEffect(() => {
    if (!isDesktop) return;
    const observers = stepRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setCurrent(idx); },
        { threshold: 0.55 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [isDesktop]);

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
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 8px" }}>
            {guideContent.heading.replace("Ví MWG", "")}
            <span style={{ color: COLORS.brandRed }}>Ví MWG</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 16 : 14, color: COLORS.textGray, margin: 0 }}>
            {guideContent.subtitle}
          </p>
        </div>

        {isDesktop ? (
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
            {/* Left: steps list — scrolls normally, click to activate */}
            <div style={{ flex: 1, border: `1px solid ${COLORS.borderLight}`, borderRadius: 20, padding: "28px 24px" }}>
              {guideSteps.map((step, idx) => (
                <div
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  onClick={() => setCurrent(idx)}
                  style={{ display: "flex", gap: 16, padding: "8px 0 0", cursor: "pointer", position: "relative" }}
                >
                  {/* Connector line */}
                  {idx < guideSteps.length - 1 && (
                    <div style={{
                      position: "absolute",
                      left: 19,
                      top: 48,
                      width: 2,
                      bottom: -8,
                      background: current > idx ? COLORS.brandYellow : COLORS.borderLight,
                      transition: "background 0.4s",
                    }} />
                  )}
                  {/* Number badge */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0, zIndex: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 800,
                    background: current === idx ? COLORS.brandBlack : current > idx ? COLORS.brandYellow : "#fff",
                    border: `2px solid ${current === idx ? COLORS.brandBlack : current > idx ? COLORS.brandYellow : COLORS.borderLight}`,
                    color: current === idx ? "#fff" : current > idx ? COLORS.brandBlack : COLORS.textFaint,
                    transition: "all 0.3s",
                  }}>
                    {current > idx ? "✓" : step.num}
                  </div>
                  {/* Text content */}
                  <div style={{ paddingBottom: 24, flex: 1 }}>
                    <div style={{
                      fontSize: 17, fontWeight: 700, marginBottom: 6, lineHeight: 1.3,
                      color: current === idx ? COLORS.brandBlack : COLORS.textGray,
                      transition: "color 0.3s",
                    }}>
                      {step.title}
                    </div>
                    <div style={{
                      fontSize: 14, color: COLORS.textGray, lineHeight: 1.7,
                      maxHeight: current === idx ? 60 : 0,
                      overflow: "hidden",
                      opacity: current === idx ? 1 : 0,
                      transition: "max-height 0.35s ease, opacity 0.25s ease",
                    }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right: phone mockup — sticky, w-64 flex-none */}
            <div style={{ width: 256, flexShrink: 0, flexGrow: 0, position: "sticky", top: 120 }}>
              {/* Phone with prev/next arrows overlaid */}
              <div style={{ position: "relative" }}>
                <div style={{
                  background: COLORS.warmGray,
                  borderRadius: 32,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.14)",
                  border: `1px solid ${COLORS.borderLight}`,
                }}>
                  <img src={guideContent.appImage} alt="App QTV" style={{ width: "100%", display: "block" }} />
                </div>
                {/* Prev arrow */}
                <button
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  style={{
                    position: "absolute", left: -18, top: "50%", transform: "translateY(-50%)",
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#fff", border: `1px solid ${COLORS.borderLight}`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: COLORS.brandBlack,
                    cursor: current === 0 ? "default" : "pointer",
                    opacity: current === 0 ? 0.35 : 1,
                    transition: "opacity 0.2s",
                  }}
                >‹</button>
                {/* Next arrow */}
                <button
                  onClick={() => setCurrent((c) => Math.min(guideSteps.length - 1, c + 1))}
                  disabled={current === guideSteps.length - 1}
                  style={{
                    position: "absolute", right: -18, top: "50%", transform: "translateY(-50%)",
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#fff", border: `1px solid ${COLORS.borderLight}`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: COLORS.brandBlack,
                    cursor: current === guideSteps.length - 1 ? "default" : "pointer",
                    opacity: current === guideSteps.length - 1 ? 0.35 : 1,
                    transition: "opacity 0.2s",
                  }}
                >›</button>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
                {guideSteps.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    style={{
                      width: current === idx ? 24 : 8, height: 8, borderRadius: 4, cursor: "pointer",
                      background: current === idx ? COLORS.brandBlack : COLORS.borderLight,
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: 24, padding: "24px 16px", textAlign: "center" }}>
            <div style={{
              background: COLORS.warmGray, borderRadius: 20, maxWidth: 220, margin: "0 auto 20px",
              overflow: "hidden", border: `1px solid ${COLORS.borderLight}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}>
              <img src="/qtv-home.png" alt="Màn hình app QTV" style={{ width: "100%", display: "block", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 12 }}>
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                style={{
                  width: 36, height: 36, borderRadius: "50%", border: `1px solid ${COLORS.borderLight}`,
                  background: current === 0 ? COLORS.warmGray : "#fff",
                  cursor: current === 0 ? "default" : "pointer",
                  fontSize: 16, color: current === 0 ? COLORS.textFaint : COLORS.brandBlack,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >‹</button>
              <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.brandBlack }}>
                Bước {activeStep.num} / {guideSteps.length}
              </span>
              <button
                onClick={() => setCurrent(Math.min(guideSteps.length - 1, current + 1))}
                disabled={current === guideSteps.length - 1}
                style={{
                  width: 36, height: 36, borderRadius: "50%", border: `1px solid ${COLORS.borderLight}`,
                  background: current === guideSteps.length - 1 ? COLORS.warmGray : "#fff",
                  cursor: current === guideSteps.length - 1 ? "default" : "pointer",
                  fontSize: 16, color: current === guideSteps.length - 1 ? COLORS.textFaint : COLORS.brandBlack,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >›</button>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.brandBlack, marginBottom: 4 }}>{activeStep.title}</div>
            <div style={{ fontSize: 13, color: COLORS.textGray, lineHeight: 1.5 }}>{activeStep.desc}</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
              {guideSteps.map((_, idx) => (
                <div key={idx} style={{
                  width: current === idx ? 24 : 8, height: 8, borderRadius: 4,
                  background: current === idx ? COLORS.brandYellow : COLORS.borderLight,
                  transition: "all 0.3s",
                }} />
              ))}
            </div>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: isDesktop ? 40 : 28 }}>
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: COLORS.brandBlack, color: "#fff", borderRadius: 28,
              padding: isDesktop ? "18px 56px" : "14px 40px",
              fontSize: isDesktop ? 16 : 15, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
              textDecoration: "none",
            }}
          >
            Đăng ký ngay →
          </a>
          <p style={{ fontSize: 12, color: COLORS.textFaint, marginTop: 10 }}>
            Duyệt trong 2 phút · Không cần chứng minh thu nhập
          </p>
        </div>
      </div>
    </div>
  );
};

const bnplCategories = bnplContent.categories;
const periodOptions  = bnplContent.periods;

const ProductBNPLSection = ({ isDesktop }) => {
  const [selected, setSelected] = useState(1); // default Laptop
  const [price, setPrice] = useState(29000000);
  const [inputVal, setInputVal] = useState("29.000.000");
  const [period, setPeriod] = useState(720);

  const selectedCategory = bnplCategories[selected];
  const selectedPeriod = periodOptions.find((opt) => opt.value === period);
  const payAmount = Math.round(
    price / selectedPeriod.installments + price * selectedPeriod.monthlyRate
  );
  const rateLabel = selectedPeriod.monthlyRate > 0
    ? `${(selectedPeriod.monthlyRate * 100).toFixed(2).replace(".", ",")}%/tháng`
    : null;

  const formatNum = (n) => new Intl.NumberFormat("vi-VN").format(n);

  const handleCatSelect = (idx) => {
    setSelected(idx);
    const defaultPrice = bnplCategories[idx].defaultPrice;
    setPrice(defaultPrice);
    setInputVal(formatNum(defaultPrice));
  };

  const handleSlider = (e) => {
    const val = Number(e.target.value);
    setPrice(val);
    setInputVal(formatNum(val));
  };

  const handleInputChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setInputVal(raw);
    const num = Number(raw);
    if (num > 0) setPrice(Math.min(Math.max(num, selectedCategory.min), selectedCategory.max));
  };

  const handleInputBlur = () => {
    const num = Math.min(Math.max(Number(inputVal.replace(/[^0-9]/g, "")) || selectedCategory.min, selectedCategory.min), selectedCategory.max);
    setPrice(num);
    setInputVal(formatNum(num));
  };

  const handleInputFocus = (e) => {
    setInputVal(String(price));
    e.target.select();
  };

  // --- category tabs ---
  const categoryTabsJsx = (
    <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4, marginBottom: isDesktop ? 32 : 20, scrollbarWidth: "none", justifyContent: isDesktop ? "center" : "flex-start" }}>
      {bnplCategories.map((cat, idx) => (
        <button key={idx} onClick={() => handleCatSelect(idx)} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          padding: isDesktop ? "16px 24px" : "12px 16px", borderRadius: 16, flexShrink: 0,
          border: selected === idx ? `2px solid ${COLORS.brandBlack}` : `1px solid ${COLORS.borderLight}`,
          background: selected === idx ? COLORS.softYellow : "#fff",
          cursor: "pointer", transition: "all 0.2s",
        }}>
          <img src={cat.img} alt={cat.label} style={{ width: isDesktop ? 48 : 36, height: isDesktop ? 48 : 36, objectFit: "contain" }} />
          <span style={{ fontSize: isDesktop ? 13 : 11, fontWeight: selected === idx ? 700 : 500, color: COLORS.brandBlack, whiteSpace: "nowrap" }}>{cat.label}</span>
        </button>
      ))}
    </div>
  );

  // --- slider block ---
  const sliderBlockJsx = (
    <div style={{ background: COLORS.warmGray, borderRadius: 20, padding: isDesktop ? "28px 32px" : "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
        <span style={{ fontSize: isDesktop ? 14 : 13, color: COLORS.textGray }}>Giá sản phẩm của bạn</span>
        <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
          <input
            type="text"
            inputMode="numeric"
            value={inputVal}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const num = Math.min(Math.max(Number(inputVal.replace(/[^0-9]/g, "")) || selectedCategory.min, selectedCategory.min), selectedCategory.max);
                setPrice(num);
                setInputVal(formatNum(num));
                e.target.blur();
              }
            }}
            style={{
              fontSize: isDesktop ? 22 : 18,
              fontWeight: 800,
              color: COLORS.brandBlack,
              border: "none",
              borderBottom: `2px solid ${COLORS.brandYellow}`,
              background: "transparent",
              outline: "none",
              textAlign: "right",
              fontFamily: "inherit",
              width: isDesktop ? 180 : 140,
              cursor: "text",
            }}
          />
          <span style={{ fontSize: isDesktop ? 16 : 14, fontWeight: 700, color: COLORS.brandBlack }}>đ</span>
        </div>
      </div>
      <input type="range" min={selectedCategory.min} max={selectedCategory.max} step={500000} value={price}
        onChange={handleSlider}
        style={{ width: "100%", accentColor: COLORS.brandBlack, cursor: "pointer", height: 4 }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
        <span style={{ fontSize: 11, color: COLORS.textFaint }}>{formatCurrency(selectedCategory.min)}</span>
        <span style={{ fontSize: 11, color: COLORS.textFaint }}>{formatCurrency(selectedCategory.max)}</span>
      </div>
    </div>
  );

  // --- period block ---
  const periodBlockJsx = (
    <div>
      <div style={{ fontSize: isDesktop ? 14 : 13, color: COLORS.textGray, marginBottom: 10 }}>Chọn kỳ hạn trả sau</div>
      <div style={{ display: "flex", gap: isDesktop ? 12 : 8 }}>
        {periodOptions.map((opt) => (
          <button key={opt.value} onClick={() => setPeriod(opt.value)} style={{
            flex: 1, padding: isDesktop ? "16px 8px" : "12px 8px", borderRadius: 14,
            border: period === opt.value ? `2px solid ${COLORS.brandBlack}` : `1px solid ${COLORS.borderLight}`,
            background: period === opt.value ? COLORS.softYellow : "#fff",
            cursor: "pointer", textAlign: "center", transition: "all 0.2s",
          }}>
            <div style={{ fontSize: isDesktop ? 15 : 13, fontWeight: 700, color: COLORS.brandBlack }}>{opt.label}</div>
            <div style={{ fontSize: isDesktop ? 11 : 10, color: COLORS.textGray, marginTop: 3 }}>{opt.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );

  // --- breakdown card ---
  const breakdownCardJsx = (
    <div style={{ background: COLORS.softYellow, borderRadius: 24, padding: isDesktop ? "36px 32px" : "24px 20px", border: `1px solid ${COLORS.borderLight}` }}>
      <div style={{ fontSize: isDesktop ? 14 : 13, color: COLORS.textGray, marginBottom: 6 }}>
        {selectedPeriod.installments > 1
          ? (selectedPeriod.hasInterest ? "Mỗi tháng chỉ từ*" : "Mỗi tháng chỉ")
          : `Trả 1 lần sau ${selectedPeriod.value} ngày`}
      </div>
      <div style={{ fontSize: isDesktop ? 52 : 38, fontWeight: 900, color: COLORS.brandBlack, letterSpacing: -2, lineHeight: 1 }}>
        {selectedPeriod.hasInterest ? "~" : ""}{formatCurrency(payAmount)}
      </div>
      <div style={{ fontSize: isDesktop ? 12 : 11, color: COLORS.textFaint, marginTop: 4 }}>
        giá ước tính
      </div>
      {selectedPeriod.installments > 1 && (
        <div style={{ fontSize: isDesktop ? 13 : 11, color: COLORS.textFaint, marginTop: 8 }}>
          × {selectedPeriod.installments} kỳ
        </div>
      )}
      <div style={{ borderTop: `1px solid ${COLORS.borderLight}`, marginTop: isDesktop ? 28 : 18, paddingTop: isDesktop ? 20 : 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: isDesktop ? 13 : 12, color: COLORS.textGray }}>Tổng giá trị sản phẩm</span>
          <span style={{ fontSize: isDesktop ? 13 : 12, color: COLORS.brandBlack, fontWeight: 600 }}>{formatCurrency(price)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: isDesktop ? 13 : 12, color: COLORS.textGray }}>
            {selectedPeriod.installments === 1 ? "Lãi suất" : "Lãi suất/tháng"}
          </span>
          <span style={{ fontSize: isDesktop ? 13 : 12, fontWeight: 600, color: selectedPeriod.hasInterest ? COLORS.brandBlack : COLORS.accentGreen }}>
            {selectedPeriod.hasInterest ? rateLabel : "Miễn lãi"}
          </span>
        </div>
        {selectedPeriod.hasInterest && (
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginTop: 12, padding: "10px 0",
          }}>
            <span style={{ fontSize: isDesktop ? 12 : 11, color: COLORS.textGray, lineHeight: 1.4 }}>
              Chênh lệch so với<br />trả thẳng
            </span>
            <span style={{ fontSize: isDesktop ? 15 : 13, fontWeight: 700, color: COLORS.brandBlack }}>
              +{formatCurrency(payAmount * selectedPeriod.installments - price)}
            </span>
          </div>
        )}
      </div>
      <p style={{ fontSize: isDesktop ? 11 : 10, color: COLORS.textFaint, marginTop: isDesktop ? 16 : 12, fontStyle: "italic" }}>
        {selectedPeriod.hasInterest
          ? `* Ước tính theo lãi suất flat ${rateLabel} (Cake VPBank). Lãi suất thực tế theo chương trình từng thời điểm.`
          : selectedPeriod.installments === 1
          ? "Không phát sinh lãi suất khi thanh toán trong kỳ miễn lãi 90 ngày."
          : "* Lãi suất 0% theo chương trình từng thời điểm."}
      </p>
    </div>
  );

  return (
    <div style={{ background: "#fff" }}>
      <div style={{ maxWidth: isDesktop ? 1100 : 480, margin: "0 auto", padding: isDesktop ? "72px 40px" : "36px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: isDesktop ? 44 : 20 }}>
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 8px" }}>
            Trả sau với <span style={{ color: COLORS.brandRed }}>Ví MWG</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 16 : 14, color: COLORS.textGray, margin: 0 }}>
            Chọn danh mục, điều chỉnh giá — xem ngay số tiền trả mỗi tháng
          </p>
        </div>

        {categoryTabsJsx}

        {isDesktop ? (
          <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
              {sliderBlockJsx}
              {periodBlockJsx}
            </div>
            <div style={{ width: 380, flexShrink: 0 }}>
              {breakdownCardJsx}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {sliderBlockJsx}
            {periodBlockJsx}
            {breakdownCardJsx}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: isDesktop ? 40 : 28 }}>
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: COLORS.brandBlack, color: "#fff", borderRadius: 28,
              padding: isDesktop ? "18px 56px" : "14px 40px",
              fontSize: isDesktop ? 16 : 15, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
              textDecoration: "none",
            }}
          >
            Đăng ký ngay →
          </a>
          <p style={{ fontSize: 12, color: COLORS.textFaint, marginTop: 10 }}>
            Duyệt trong 2 phút · Không cần chứng minh thu nhập
          </p>
        </div>
      </div>
    </div>
  );
};


const uspCards = differentiatorContent.cards;

const DifferentiatorSection = ({ isDesktop }) => (
  <div style={{ background: "#fff" }}>
    <div
      style={{
        maxWidth: isDesktop ? 1100 : "100vw",
        width: isDesktop ? "100%" : "100vw",
        boxSizing: "border-box",
        margin: isDesktop ? "0 auto" : "0 calc(50% - 50vw)",
        padding: isDesktop ? "72px 40px 80px" : "40px 16px 44px",
      }}
    >

      {/* Section title */}
      <div style={{ textAlign: "center", marginBottom: isDesktop ? 54 : 28 }}>
        <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 8px" }}>
          Điểm <span style={{ color: COLORS.brandRed }}>khác biệt</span>
        </h2>
        <p style={{ fontSize: isDesktop ? 16 : 14, color: COLORS.textGray, margin: 0 }}>
          Hạn mức lên đến 40 triệu · Miễn lãi tối đa · Duyệt tự động 2 phút
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: isDesktop ? 30 : 12,
          alignItems: "start",
        }}
      >
        {uspCards.map((card) => (
          <div
            key={card.title}
            style={{
              position: "relative",
              paddingTop: isDesktop
                ? "clamp(100px, 19vw, 225px)"
                : "clamp(70px, 23vw, 185px)",
              minWidth: 0,
            }}
          >
            <div
              style={{
                background: COLORS.warmGray,
                borderRadius: isDesktop ? 20 : 12,
                padding: isDesktop
                  ? "clamp(70px, 13vw, 155px) 28px 36px"
                  : "clamp(50px, 17vw, 125px) clamp(12px, 3vw, 20px) 20px",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(18, 18, 18, 0.02)",
              }}
            >
              <p
                style={{
                  fontSize: isDesktop ? 28 : "clamp(16px, 4.5vw, 22px)",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: COLORS.brandBlack,
                  margin: "0 0 8px",
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  fontSize: isDesktop ? 16 : "clamp(12px, 3vw, 15px)",
                  lineHeight: 1.4,
                  color: "#585562",
                  margin: 0,
                }}
              >
                {card.subtitle}
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: isDesktop ? "72%" : "86%",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

const storeChains = storeNetworkContent.chains;

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
        <h2 style={{ fontSize: isDesktop ? 34 : 20, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 6px" }}>
          Mua sắm tại hơn{" "}
          <span style={{ color: COLORS.brandRed }}>3.200 cửa hàng</span>{" "}
          toàn quốc
        </h2>
        <p style={{ fontSize: isDesktop ? 16 : 13, color: COLORS.textGray, margin: 0 }}>
          Ví MWG PayLater được chấp nhận tại toàn bộ hệ thống — tại cửa hàng và trên website
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr 1fr 1fr" : "1fr 1fr",
          gap: isDesktop ? 16 : 10,
        }}
      >
        {storeChains.map((chain, idx) => (
          <div key={idx} style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${COLORS.borderLight}` }}>
            <img src={chain.img} alt={chain.name} style={{ width: "100%", display: "block", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <span style={{ fontSize: 11, color: COLORS.textFaint }}>Số liệu Q1/2026</span>
        <span style={{ fontSize: 11, color: COLORS.borderLight }}>•</span>
        <span style={{ fontSize: 11, color: COLORS.textFaint }}>Cập nhật liên tục</span>
      </div>
    </div>
  </div>
);


const faqData = faqContent.items;

const FAQItem = ({ faq, openIdx, idx, setOpenIdx }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 14,
      border: `1px solid ${openIdx === idx ? COLORS.brandYellow : COLORS.borderLight}`,
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
      <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.brandBlack, flex: 1, paddingRight: 12 }}>
        {faq.q}
      </span>
      <span
        style={{
          fontSize: 18, color: COLORS.textFaint, flexShrink: 0,
          transform: openIdx === idx ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}
      >+</span>
    </button>
    {openIdx === idx && (
      <div style={{ padding: "0 18px 16px", fontSize: 13, color: COLORS.textGray, lineHeight: 1.7 }}>
        {faq.a}
      </div>
    )}
  </div>
);

const FAQSection = ({ isDesktop }) => {
  const [openIdx, setOpenIdx] = useState(null);
  const half = Math.ceil(faqData.length / 2);

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
          <h2 style={{ fontSize: isDesktop ? 34 : 22, fontWeight: 700, color: COLORS.brandBlack, margin: "0 0 8px" }}>
            Câu hỏi <span style={{ color: COLORS.brandRed }}>thường gặp</span>
          </h2>
        </div>
        {isDesktop ? (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" }}>
            <div>
              {faqData.slice(0, half).map((faq, idx) => (
                <FAQItem key={idx} faq={faq} openIdx={openIdx} idx={idx} setOpenIdx={setOpenIdx} />
              ))}
            </div>
            <div>
              {faqData.slice(half).map((faq, offset) => {
                const faqIdx = half + offset;
                return <FAQItem key={faqIdx} faq={faq} openIdx={openIdx} idx={faqIdx} setOpenIdx={setOpenIdx} />;
              })}
            </div>
          </div>
        ) : (
          <div>
            {faqData.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} openIdx={openIdx} idx={idx} setOpenIdx={setOpenIdx} />
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
          background: `linear-gradient(135deg, ${COLORS.brandBlack} 0%, #2D2D2D 100%)`,
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
        <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: COLORS.brandYellow, opacity: 0.08 }} />
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, borderRadius: "50%", background: COLORS.brandYellow, opacity: 0.06 }} />
        <div style={{ position: "relative", zIndex: 1, flex: isDesktop ? 1 : undefined }}>
          <div style={{ fontSize: 13, color: COLORS.brandYellow, fontWeight: 600, marginBottom: 8 }}>
            Ưu đãi dành riêng cho bạn
          </div>
          <h2 style={{ fontSize: isDesktop ? 36 : 24, fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.3 }}>
            Đăng ký Ví MWG — hoàn tiền đến{" "}
            <span style={{ color: COLORS.brandYellow }}>800.000đ</span>
          </h2>
          <p style={{ fontSize: isDesktop ? 15 : 13, color: "rgba(255,255,255,0.6)", margin: isDesktop ? 0 : "0 0 20px", lineHeight: 1.5 }}>
            Áp dụng cho giao dịch đủ điều kiện · Theo chương trình từng thời điểm
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 1, flexShrink: isDesktop ? 0 : undefined }}>
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: COLORS.brandYellow,
              color: COLORS.brandBlack,
              borderRadius: 28,
              padding: isDesktop ? "18px 52px" : "14px 40px",
              fontSize: isDesktop ? 17 : 16,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(255,212,0,0.35)",
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Kích hoạt ngay →
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Footer = ({ isDesktop }) => (
  <div style={{ background: COLORS.warmGray, padding: isDesktop ? "40px 0" : "24px 16px", textAlign: "center" }}>
    <div style={{ maxWidth: isDesktop ? 1100 : 480, margin: "0 auto", padding: isDesktop ? "0 40px" : "0" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        <img
          src="https://cdnv2.tgdd.vn/pim/cdn/images/202512/Logo%20MWG%20Paylater105741.png"
          alt="Ví MWG PayLater"
          style={{ height: 36, objectFit: "contain" }}
        />
      </div>
      <div style={{ fontSize: 12, color: COLORS.textFaint, lineHeight: 1.6, maxWidth: 400, margin: "0 auto" }}>
        Sản phẩm hợp tác giữa Thế Giới Di Động và Cake by VPBank. Được cấp phép và giám sát bởi Ngân hàng Nhà nước Việt Nam.
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 16, fontSize: 12, color: COLORS.textGray }}>
        <span>Điều khoản</span>
        <span>Chính sách</span>
        <span>Hỗ trợ</span>
      </div>
    </div>
  </div>
);

export default function App() {
  const width = useWindowWidth();
  const isDesktop = width >= 768;

  return (
    <div
      style={{
        background: "#fff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: COLORS.brandBlack,
        overflowX: "clip",
      }}
    >
      <StickyHeader isDesktop={isDesktop} />
      <HeroSection isDesktop={isDesktop} />
      <PartnerBanner isDesktop={isDesktop} />
      <DifferentiatorSection isDesktop={isDesktop} />
      <StoreNetworkSection isDesktop={isDesktop} />
      <div id="section-bnpl"><ProductBNPLSection isDesktop={isDesktop} /></div>
      <div id="section-huong-dan"><GuideSection isDesktop={isDesktop} /></div>
      <div id="section-faq"><FAQSection isDesktop={isDesktop} /></div>
      <CTASection isDesktop={isDesktop} />
      <Footer isDesktop={isDesktop} />
    </div>
  );
}
