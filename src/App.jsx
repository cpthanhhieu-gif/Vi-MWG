import { COLORS, FONT } from "./brand";
import { CTAButton, AnimatedNumber, FAQItem, ProductCard, StepCard } from "./components";

export default function App() {
  return (
    <div style={{ fontFamily: FONT, background: COLORS.pageBg, color: COLORS.textPrimary, maxWidth: 480, margin: "0 auto" }}>
      {/* NAV */}
      <nav style={{ background: COLORS.primary, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 6, background: COLORS.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: COLORS.textPrimary }}>MWG</div>
          <span style={{ fontSize: 16, fontWeight: 500, color: COLORS.white }}>PayLater</span>
        </div>
        <CTAButton text="Đăng ký" />
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", padding: "48px 24px 40px", background: COLORS.darkNavy, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.primary}20, transparent 70%)` }} />
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${COLORS.primary}18`, border: `1px solid ${COLORS.primary}30`, borderRadius: 4, padding: "6px 12px", marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.accentYellow, letterSpacing: 1 }}>VÍ TRẢ SAU CHÍNH HÃNG MWG</span>
        </div>
        <h1 style={{ fontSize: 30, fontWeight: 500, color: COLORS.white, lineHeight: 1.2, marginBottom: 8 }}>
          Mua ngay. <span style={{ color: COLORS.primary, fontWeight: 700 }}>Trả sau.</span>
        </h1>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: COLORS.white, lineHeight: 1.2, marginBottom: 20 }}>0% lãi suất.</h2>
        <p style={{ fontSize: 16, color: "#ffffffaa", lineHeight: 1.7, marginBottom: 32, maxWidth: 360 }}>
          Hạn mức đến <strong style={{ color: COLORS.primary }}>40 triệu đồng</strong>, duyệt online trong 2 phút. Mua sắm tại Thế Giới Di Động, Điện Máy Xanh & TopZone.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CTAButton text="Đăng ký ngay →" />
          <CTAButton text="Tìm hiểu thêm" variant="secondary" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 32, paddingTop: 20, borderTop: `1px solid ${COLORS.white}15`, flexWrap: "wrap" }}>
          {["Thế Giới Di Động", "Điện Máy Xanh", "TopZone", "Avakids"].map((n) => (
            <div key={n} style={{ padding: "6px 10px", background: `${COLORS.white}08`, borderRadius: 4, fontSize: 10, color: `${COLORS.white}70`, fontWeight: 500, whiteSpace: "nowrap", border: `0.5px solid ${COLORS.white}15` }}>{n}</div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "28px 24px", background: COLORS.primaryLight, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { num: 40, suffix: " triệu", label: "Hạn mức tối đa" },
          { num: 2, suffix: " phút", label: "Duyệt online" },
          { num: 0, suffix: "% lãi", label: "Trả góp đến 12 tháng" },
          { num: 90, suffix: " ngày", label: "Miễn lãi tối đa" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: 10 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: COLORS.textPrimary, marginBottom: 4 }}>
              <AnimatedNumber target={s.num} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* TRUST */}
      <section style={{ padding: "28px 24px", textAlign: "center", background: COLORS.white }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: COLORS.inputBg, borderRadius: 4, padding: "10px 20px", border: `0.8px solid ${COLORS.border}` }}>
          <span style={{ fontSize: 14, color: COLORS.textMuted }}>Vận hành bởi</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: COLORS.textPrimary }}>Cake by VPBank</span>
          <span style={{ fontSize: 12, color: COLORS.success, fontWeight: 600 }}>✓</span>
        </div>
        <p style={{ fontSize: 14, color: COLORS.textMuted, marginTop: 12, lineHeight: 1.6 }}>Nguồn vốn & công nghệ tài chính từ Ngân hàng số Cake — Top 100 ngân hàng số toàn cầu</p>
      </section>

      {/* USP */}
      <section style={{ padding: "40px 24px", background: COLORS.pageBg }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.primary, letterSpacing: 1.5, marginBottom: 8 }}>TẠI SAO CHỌN MWG PAYLATER</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>Khác biệt so với trả góp truyền thống</h2>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {[
            { icon: "🪪", title: "Không cần thẻ tín dụng", desc: "Chỉ cần CCCD gắn chip còn hiệu lực. Không yêu cầu chứng minh thu nhập.", accent: COLORS.info },
            { icon: "⚡", title: "Duyệt siêu nhanh 2 phút", desc: "100% online qua eKYC + nhận diện khuôn mặt. Đăng ký xong là mua được ngay.", accent: COLORS.primary },
            { icon: "💰", title: "0% lãi suất, 0đ trả trước", desc: "Trả góp 0% lãi đến 12 tháng. Miễn lãi lên đến 90 ngày — dài nhất thị trường.", accent: COLORS.success },
            { icon: "🔄", title: "Linh hoạt kỳ hạn", desc: "Trả thẳng hoặc trả chậm 3/6/12/24 tháng. Chủ động chọn lộ trình phù hợp.", accent: COLORS.darkNavy2 },
          ].map((u, i) => (
            <div key={i} style={{ background: COLORS.white, border: `0.8px solid ${COLORS.border}`, borderRadius: 6, padding: 24, display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = u.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}>
              <div style={{ width: 44, height: 44, borderRadius: 6, background: `${u.accent}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{u.icon}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, marginBottom: 4 }}>{u.title}</div>
                <div style={{ fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>{u.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section style={{ padding: "40px 24px", background: COLORS.white, borderTop: `0.8px solid ${COLORS.border}`, borderBottom: `0.8px solid ${COLORS.border}` }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.success, letterSpacing: 1.5, marginBottom: 8 }}>ĐĂNG KÝ ĐƠN GIẢN</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>3 bước — 2 phút — xong!</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <StepCard num="01" icon="📱" title="Mở app Quà Tặng VIP" desc="Tải ứng dụng Quà Tặng VIP của Thế Giới Di Động, chọn mục MWG PayLater." />
          <StepCard num="02" icon="🪪" title="Xác thực eKYC" desc="Chụp CCCD 2 mặt + selfie xác minh khuôn mặt. Tự động, không cần giấy tờ khác." />
          <StepCard num="03" icon="✅" title="Nhận hạn mức & mua sắm" desc="Hệ thống duyệt tự động, nhận hạn mức tức thì. Bắt đầu mua sắm trả sau ngay!" />
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}><CTAButton text="Đăng ký MWG PayLater →" full /></div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "40px 0 40px 24px", background: COLORS.pageBg }}>
        <div style={{ marginBottom: 20, paddingRight: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.info, letterSpacing: 1.5, marginBottom: 8 }}>MUA GÌ CŨNG ĐƯỢC</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>Chia nhỏ mọi đơn hàng</h2>
          <p style={{ fontSize: 14, color: COLORS.textMuted, marginTop: 8, lineHeight: 1.6 }}>Áp dụng tại toàn bộ hệ thống TGDĐ, ĐMX, TopZone, Avakids — online & offline.</p>
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingRight: 24, paddingBottom: 8 }}>
          <ProductCard emoji="📱" name="iPhone 16 Pro Max" price="34.990.000₫" monthly="2.916.000₫" months={12} />
          <ProductCard emoji="💻" name="MacBook Air M4" price="27.990.000₫" monthly="2.333.000₫" months={12} />
          <ProductCard emoji="❄️" name="Máy lạnh Daikin" price="12.490.000₫" monthly="2.082.000₫" months={6} />
          <ProductCard emoji="📺" name="TV Samsung 55 inch" price="15.990.000₫" monthly="1.333.000₫" months={12} />
          <ProductCard emoji="🎧" name="AirPods Pro 2" price="6.190.000₫" monthly="1.032.000₫" months={6} />
        </div>
        <p style={{ fontSize: 12, color: COLORS.textLight, marginTop: 16, paddingRight: 24, fontStyle: "italic" }}>* Giá & kỳ hạn mang tính minh hoạ. Lãi suất 0% áp dụng theo chương trình từng thời điểm.</p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "40px 24px", background: COLORS.darkNavy, color: COLORS.white }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.primary, letterSpacing: 1.5, marginBottom: 8 }}>KHÁCH HÀNG NÓI GÌ</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>Trải nghiệm thực tế</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { name: "Chị Như Quỳnh", role: "Mua tủ lạnh 24 triệu", text: "Tôi trả góp 0% lãi trong 12 tháng, mỗi tháng chỉ 2 triệu. Không mất thêm bất kỳ phí nào." },
            { name: "Anh Minh Tuấn", role: "Mua máy lạnh trả sau", text: "Không cần chuẩn bị sẵn tiền. Thủ tục nhanh, đăng ký xong là dùng được ngay. Lại còn hoàn tiền." },
            { name: "Chị Thuỳ Linh", role: "Mua iPhone tại TGDĐ", text: "Thấy tiện hơn trả góp qua công ty tài chính. Mọi thứ nằm gọn trên app Quà Tặng VIP." },
          ].map((t, i) => (
            <div key={i} style={{ background: `${COLORS.white}08`, borderRadius: 6, padding: 24, borderLeft: `3px solid ${COLORS.primary}` }}>
              <p style={{ fontSize: 14, color: `${COLORS.white}cc`, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: COLORS.textPrimary }}>
                  {t.name.charAt(t.name.lastIndexOf(" ") + 1)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: `${COLORS.white}60` }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 24px", background: COLORS.white }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.primary, letterSpacing: 1.5, marginBottom: 8 }}>CÂU HỎI THƯỜNG GẶP</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>Giải đáp thắc mắc</h2>
        </div>
        <FAQItem q="MWG PayLater khác gì trả góp qua công ty tài chính?" a="MWG PayLater là ví trả sau do chính Thế Giới Di Động phát hành, vận hành bởi Ngân hàng số Cake by VPBank. Bạn được cấp hạn mức sẵn, dùng khi nào cũng được — không cần đăng ký vay từng lần." />
        <FAQItem q="Cần những giấy tờ gì để đăng ký?" a="Chỉ cần CCCD gắn chip còn hiệu lực. Không cần chứng minh thu nhập, không cần hợp đồng lao động. Toàn bộ quy trình eKYC diễn ra online trên app." />
        <FAQItem q="Có phí ẩn không? Trễ hạn thì sao?" a="Trả góp 0% lãi suất theo chương trình. Miễn lãi lên đến 90 ngày nếu trả thẳng. Nếu trễ hạn sẽ phát sinh phí — nên thanh toán đúng hạn để duy trì lịch sử tín dụng tốt." />
        <FAQItem q="Mua online được không hay chỉ tại cửa hàng?" a="Hiện áp dụng tại toàn bộ cửa hàng offline: TGDĐ, ĐMX, TopZone, Avakids. Kênh online đang trong kế hoạch mở rộng." />
        <FAQItem q="Hạn mức được quyết định thế nào?" a="Hệ thống AI của Cake tự động đánh giá lịch sử tín dụng để cấp hạn mức phù hợp, tối đa 40 triệu đồng. Sử dụng tốt sẽ được nâng hạn mức." />
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "48px 24px", background: COLORS.darkNavy, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.primary}15, transparent 70%)` }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: COLORS.white, marginBottom: 12, lineHeight: 1.3 }}>
            Sẵn sàng mua sắm<br /><span style={{ color: COLORS.primary }}>không lo về giá?</span>
          </h2>
          <p style={{ fontSize: 16, color: `${COLORS.white}88`, marginBottom: 28, lineHeight: 1.6 }}>Đăng ký MWG PayLater ngay — chỉ 2 phút, nhận hạn mức tức thì.</p>
          <CTAButton text="Mở Ví MWG PayLater →" full />
          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 20 }}>
            {[{ icon: "🔒", text: "Bảo mật" }, { icon: "🏦", text: "Cake by VPBank" }, { icon: "⚡", text: "2 phút" }].map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 14 }}>{b.icon}</span>
                <span style={{ fontSize: 12, color: `${COLORS.white}60` }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 24px", background: COLORS.darkNavy2, textAlign: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primary, marginBottom: 8 }}>MWG PayLater</div>
        <p style={{ fontSize: 12, color: `${COLORS.white}50`, lineHeight: 1.6 }}>
          Dịch vụ ví trả sau mang thương hiệu Thế Giới Di Động.<br />Vận hành bởi Ngân hàng số Cake by VPBank.<br />© 2026 Mobile World Group. All rights reserved.
        </p>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${COLORS.white}10`, fontSize: 11, color: `${COLORS.white}30`, lineHeight: 1.6 }}>
          Lưu ý: Sản phẩm tín dụng. Việc vay mượn cần được cân nhắc kỹ.<br />Vui lòng đọc kỹ điều khoản trước khi đăng ký sử dụng dịch vụ.
        </div>
      </footer>
    </div>
  );
}
