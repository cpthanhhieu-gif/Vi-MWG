// CMS-ready content config.
// To connect a CMS: replace exports with API fetch calls, shape must match.

// Registration URL — update when the actual sign-up page is ready
export const registerUrl = "https://tgdd.vn"; // TODO: replace with real register URL

export const heroContent = {
  bannerDesktop: "/hero-banner-desktop.png",
  bannerMobile: "/hero-banner-mobile.png",
  ctaPrimary: "Activate Now",
  ctaSecondary: "Learn More",
};

export const partnerContent = {
  label: "Partnership Product",
  brands: [
    { logo: "/logos/logo-tgdd-mwg.png", name: "Thế Giới Di Động" },
    { logo: "/logo-cake.png", name: "Cake by VPBank" },
  ],
};

export const differentiatorContent = {
  heading: "What Sets Us Apart",
  subtitle: "Up to 40M VND credit limit · Interest-free maximum · Auto-approved in 2 minutes",
  cards: [
    { title: "Interest-Free Maximum", subtitle: "0% interest, up to 24 months", img: "/90-commit.png" },
    { title: "Maximum Credit Limit",  subtitle: "Up to 40,000,000 VND",         img: "/40-commit.png" },
  ],
};

export const storeNetworkContent = {
  heading: "Shop at 3,200+ Stores Nationwide",
  subtitle: "Ví MWG PayLater is accepted across the entire network — in-store and online",
  chains: [
    { name: "Thế Giới Di Động", count: "1,014", img: "/TGDĐ.png" },
    { name: "Điện Máy Xanh",    count: "2,006", img: "/DMX.png" },
    { name: "TopZone",           count: "100+",  img: "/Topzone.png" },
    { name: "Avakids",           count: "95",    img: "/Avakids.png" },
  ],
  footnote: "Data as of Q1/2026",
};

export const bnplContent = {
  heading: "Buy Now, Pay Later with Ví MWG",
  subtitle: "Choose a category, adjust the price — instantly see your monthly payment",
  cta: "Register Now →",
  ctaNote: "Approved in 2 minutes · No income proof required",
  categories: [
    { img: "/cat-dienthoai.png", label: "Smartphones", min: 3000000,  max: 30000000, defaultPrice: 15000000 },
    { img: "/cat-laptop.png",    label: "Laptops",      min: 10000000, max: 40000000, defaultPrice: 29000000 },
    { img: "/cat-smartwatch.png",label: "Smartwatches", min: 2000000,  max: 15000000, defaultPrice: 6000000  },
    { img: "/cat-maylanh.png",   label: "Air Conditioners", min: 5000000, max: 20000000, defaultPrice: 10000000 },
    { img: "/cat-phukien.png",   label: "Accessories",  min: 500000,   max: 5000000,  defaultPrice: 2000000  },
  ],
  periods: [
    { value: 90,  label: "90 days",   desc: "1 payment • 0% interest",  installments: 1,  hasInterest: false, monthlyRate: 0      },
    { value: 270, label: "3 months",  desc: "3 payments • 0% interest*", installments: 3,  hasInterest: false, monthlyRate: 0      },
    { value: 720, label: "24 months", desc: "24 payments • interest applies", installments: 24, hasInterest: true, monthlyRate: 0.0167 },
  ],
};

export const guideContent = {
  heading: "How to Open Ví MWG",
  subtitle: "Just 4 steps, completed in 2 minutes",
  appImage: "/qtv-home.png",
  cta: "Register Now →",
  ctaNote: "Approved in 2 minutes · No income proof required",
  steps: [
    { num: 1, title: "Open the QTV App",      desc: 'Launch the QTV app and tap the "Pay Later Wallet" icon'     },
    { num: 2, title: "Verify Your Identity",  desc: "Take a photo of your chip-enabled ID and complete face authentication (eKYC)" },
    { num: 3, title: "Receive Your Limit",    desc: "The system automatically approves and assigns your credit limit" },
    { num: 4, title: "Start Shopping",        desc: "Pick your favorite products and pay with Ví MWG"             },
  ],
};

export const faqContent = {
  heading: "Frequently Asked Questions",
  items: [
    { q: "What is Ví MWG PayLater?",               a: "Ví MWG PayLater is a Buy Now, Pay Later service developed by Thế Giới Di Động in partnership with Cake by VPBank. You receive a credit limit of up to 40,000,000 VND, interest-free for up to 90 days, approved instantly on your phone in just 2 minutes." },
    { q: "Who can apply for Ví MWG?",              a: "Vietnamese citizens aged 18 and above with a valid chip-enabled national ID. No income proof or complex paperwork required — fully automated approval, no store visit needed." },
    { q: "Does Ví MWG charge interest?",           a: "No! When you pay on time within the interest-free period (up to 90 days), you pay absolutely no interest. If you choose a longer installment plan (up to 24 months), the interest rate will be clearly disclosed before you confirm." },
    { q: "Are there any risks with Buy Now, Pay Later?", a: "Ví MWG is fully transparent about all fees. You simply need to pay on time to avoid late fees. All details are clearly displayed before you confirm any transaction." },
    { q: "What is the maximum credit limit?",      a: "The credit limit goes up to 40,000,000 VND, automatically approved based on your identity verification result on your phone. Your limit may increase over time with a consistent on-time payment history." },
    { q: "Where can I use Ví MWG?",               a: "Ví MWG PayLater is accepted at 3,200+ stores across Thế Giới Di Động, Điện Máy Xanh, TopZone, and Avakids — both in-store and online. Simply select Ví MWG as your payment method at checkout." },
  ],
};

export const ctaContent = {
  badge:    "Exclusive Offer for You",
  heading:  "Sign Up for Ví MWG — Get Up to 800,000 VND Cashback",
  subtitle: "Applicable to qualifying transactions · Subject to promotional terms",
  button:   "Activate Now →",
};

export const footerContent = {
  legal:   "A partnership product between Thế Giới Di Động and Cake by VPBank. Licensed and supervised by the State Bank of Vietnam.",
  links:   ["Terms & Conditions", "Privacy Policy", "Support"],
};
