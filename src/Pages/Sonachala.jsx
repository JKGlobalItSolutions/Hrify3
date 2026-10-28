import img1 from "../assets/Products/img1.png";
import img2 from "../assets/Products/img2.png";
import img3 from "../assets/Products/img3.png";
import img4 from "../assets/Products/img4.png";
import img5 from "../assets/Products/img5.png";
import img6 from "../assets/Products/img6.png";
import img7 from "../assets/Products/img7.png";
import img8 from "../assets/Products/img8.png";

// ---- Design tokens (from the redesign brief) ----
const COLORS = {
  primaryGreen: "#008F68",
  darkNavy: "#071A2B",
  text: "#17212B",
  lightGreen: "#EAF8F3",
  bg: "#F8FAFC",
  white: "#FFFFFF",
  border: "#E5E7EB",
};

function Eyebrow({ number, label }) {
  return (
    <div className="sc-eyebrow">
      <span className="sc-eyebrow-num">{number}</span>
      <span className="sc-eyebrow-label">{label}</span>
    </div>
  );
}

function CapabilityCardGrid({ items }) {
  return (
    <div className="sc-capability-box">
      <div className="sc-capability-title">Key Capabilities</div>
      <div className="sc-capability-grid">
        {items.map((item, i) => (
          <div className="sc-capability-item" key={item}>
            <span className="sc-capability-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckList({ items }) {
  return (
    <div className="sc-check-list">
      {items.map((item) => (
        <div className="sc-check-item" key={item}>
          <span className="sc-check-mark">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ImageFrame({ src, alt }) {
  return (
    <div className="sc-image-frame">
      <img src={src} alt={alt} />
    </div>
  );
}

function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        .sc-root, .sc-root * {
          font-family: 'Manrope', 'Inter', sans-serif;
          color: ${COLORS.text};
          box-sizing: border-box;
        }

        .sc-root h1, .sc-root h2, .sc-root h3 {
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .sc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .sc-section {
          padding: 90px 0;
        }

        @media (max-width: 768px) {
          .sc-section { padding: 60px 0; }
        }

        /* Hero */
        .sc-hero {
          background: linear-gradient(180deg, ${COLORS.white} 0%, ${COLORS.lightGreen} 100%);
          padding: 110px 0 90px;
        }
        .sc-hero-brand {
          color: ${COLORS.primaryGreen};
          font-weight: 800;
          letter-spacing: 0.12em;
          font-size: 14px;
          margin-bottom: 18px;
        }
        .sc-hero h1 {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .sc-hero p {
          font-size: 17px;
          line-height: 1.7;
          opacity: 0.8;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .sc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${COLORS.primaryGreen};
          color: ${COLORS.white};
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          font-size: 15px;
          box-shadow: 0 8px 20px rgba(0, 143, 104, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }
        .sc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 143, 104, 0.35);
          color: ${COLORS.white};
        }
        .sc-hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sc-hero-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(0,143,104,0.18) 0%, rgba(0,143,104,0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        .sc-glass-card {
          position: relative;
          z-index: 1;
          background: linear-gradient(160deg, ${COLORS.darkNavy} 0%, #0d3324 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 48px 36px;
          box-shadow: 0 20px 40px rgba(7, 26, 43, 0.18);
          max-width: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sc-glass-card img {
          width: 70%;
          display: block;
        }

        /* Eyebrow */
        .sc-eyebrow {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 16px;
        }
        .sc-eyebrow-num {
          font-weight: 800;
          color: ${COLORS.primaryGreen};
          font-size: 14px;
          letter-spacing: 0.08em;
        }
        .sc-eyebrow-label {
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .sc-section-title {
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .sc-section-title .sc-accent {
          color: ${COLORS.primaryGreen};
        }
        .sc-section-copy {
          font-size: 16px;
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 24px;
        }

        /* Capability card grid */
        .sc-capability-box {
          background: ${COLORS.white};
          border: 1px solid ${COLORS.border};
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(7, 26, 43, 0.06);
          padding: 28px 30px;
          margin-top: 8px;
        }
        .sc-capability-title {
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${COLORS.primaryGreen};
          margin-bottom: 18px;
        }
        .sc-capability-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 28px;
        }
        @media (max-width: 576px) {
          .sc-capability-grid { grid-template-columns: 1fr; }
        }
        .sc-capability-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-weight: 500;
          font-size: 15px;
        }
        .sc-capability-index {
          font-weight: 800;
          color: ${COLORS.primaryGreen};
          font-size: 13px;
        }

        /* Check list */
        .sc-check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 28px;
          background: ${COLORS.lightGreen};
          border-radius: 18px;
          padding: 26px 28px;
        }
        @media (max-width: 576px) {
          .sc-check-list { grid-template-columns: 1fr; }
        }
        .sc-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-weight: 500;
          font-size: 15px;
        }
        .sc-check-mark {
          color: ${COLORS.primaryGreen};
          font-weight: 800;
        }

        /* Image frame */
        .sc-image-frame img {
          width: 100%;
          object-fit: contain;
          border-radius: 16px;
          border: 1px solid ${COLORS.border};
          box-shadow: 0 10px 30px rgba(7, 26, 43, 0.08);
          background: ${COLORS.white};
          padding: 10px;
        }

        /* Software ecosystem diagram */
        .sc-ecosystem {
          text-align: center;
        }
        .sc-ecosystem-hub {
          display: inline-block;
          background: ${COLORS.darkNavy};
          color: ${COLORS.white};
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 14px;
          font-size: 15px;
          letter-spacing: 0.04em;
          margin-bottom: 28px;
        }
        .sc-ecosystem-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
        .sc-ecosystem-chip {
          border: 1px solid ${COLORS.border};
          background: ${COLORS.white};
          border-radius: 50px;
          padding: 10px 20px;
          font-weight: 600;
          font-size: 14px;
        }

        /* CTA banner */
        .sc-cta {
          background: linear-gradient(135deg, ${COLORS.lightGreen} 0%, ${COLORS.white} 100%);
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
        }
        .sc-cta h2 {
          font-size: clamp(26px, 3.5vw, 38px);
          margin-bottom: 10px;
        }
        .sc-cta p {
          opacity: 0.75;
          margin-bottom: 26px;
        }
      `}</style>

      <div className="sc-root" style={{ background: COLORS.bg }}>
        {/* HERO */}
        <section className="sc-hero">
          <div className="sc-container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="sc-hero-brand">SONACHALA</div>
                <h1>
                  Hotel Technology
                  <br />
                  Built for Smarter
                  <br />
                  Hospitality.
                </h1>
                <p>
                  Intelligent solutions that help hotels operate better, sell
                  more and grow faster.
                </p>
                <a href="#revenue-management" className="sc-btn-primary">
                  Explore Solutions →
                </a>
              </div>
              <div className="col-lg-6 sc-hero-visual">
                <div className="sc-hero-glow" />
                <div className="sc-glass-card">
                  <img src={img1} alt="Sonachala hotel technology dashboard" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REVENUE MANAGEMENT */}
        <section className="sc-section" id="revenue-management">
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <Eyebrow number="01" label="Revenue Management" />
                <h2 className="sc-section-title">
                  Smarter pricing. <span className="sc-accent">Higher</span>{" "}
                  hotel revenue.
                </h2>
                <p className="sc-section-copy">
                  Sonachala equips hotels with intelligent pricing strategies
                  to maximize revenue while maintaining high occupancy.
                  Our system reads market demand, seasonal trends and
                  competitor pricing in real time, so rates stay competitive
                  in peak season and slow periods alike — with promotions,
                  rate adjustments and performance all in one dashboard.
                </p>
                <CapabilityCardGrid
                  items={[
                    "Dynamic Pricing",
                    "Market Insights",
                    "Real-time Analytics",
                    "Occupancy Optimization",
                  ]}
                />
              </div>
              <div className="col-lg-5">
                <ImageFrame src={img2} alt="Revenue management dashboard" />
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING ENGINE */}
        <section className="sc-section" style={{ background: COLORS.white }}>
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5 order-lg-1 order-2">
                <ImageFrame src={img3} alt="Sonachala booking engine UI" />
              </div>
              <div className="col-lg-7 order-lg-2 order-1">
                <Eyebrow number="02" label="Booking Engine" />
                <h2 className="sc-section-title">
                  Turn every visitor into a{" "}
                  <span className="sc-accent">direct booking</span>.
                </h2>
                <p className="sc-section-copy">
                  From quick searches to instant reservations, every step is
                  optimized for speed and conversion. Guests view real-time
                  availability, compare options and lock in a stay within
                  seconds — with transparent pricing, secure payments and
                  instant confirmation. It integrates straight into your
                  website, so you can sell rooms 24/7 without relying solely
                  on third-party platforms.
                </p>
                <CheckList
                  items={[
                    "Fast search & booking in under a minute",
                    "Live inventory synced with hotel systems",
                    "Secure payments — UPI, cards, wallets",
                    "Instant confirmation via email & SMS",
                    "Fully responsive on mobile & desktop",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SOFTWARE ECOSYSTEM */}
        <section className="sc-section">
          <div className="sc-container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <Eyebrow number="03" label="Software Ecosystem" />
                <h2 className="sc-section-title">
                  One platform. <span className="sc-accent">Every</span> hotel
                  operation.
                </h2>
                <p className="sc-section-copy">
                  Our integrated PMS and Channel Manager handle reservations,
                  guest profiles, billing and housekeeping, while syncing your
                  inventory across OTAs in real time — eliminating
                  overbookings and manual updates, with automation and smart
                  reporting built in.
                </p>
                <CapabilityCardGrid
                  items={[
                    "Centralized Operations Dashboard",
                    "Real-time OTA Sync",
                    "Revenue & Occupancy Reports",
                    "Integrated Billing & Payments",
                  ]}
                />
              </div>
              <div className="col-lg-6">
                <div className="sc-ecosystem">
                  <div className="sc-ecosystem-hub">SONACHALA PMS</div>
                  <div className="sc-ecosystem-row">
                    <span className="sc-ecosystem-chip">Booking.com</span>
                    <span className="sc-ecosystem-chip">Expedia</span>
                    <span className="sc-ecosystem-chip">Agoda</span>
                    <span className="sc-ecosystem-chip">Airbnb</span>
                    <span className="sc-ecosystem-chip">Trip.com</span>
                    <span className="sc-ecosystem-chip">Google</span>
                  </div>
                  <div style={{ marginTop: 28 }}>
                    <ImageFrame src={img4} alt="Software ecosystem dashboard" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH SOLUTIONS */}
        <section className="sc-section" style={{ background: COLORS.white }}>
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5 order-lg-1 order-2">
                <ImageFrame src={img5} alt="Tech solutions dashboard" />
              </div>
              <div className="col-lg-7 order-lg-2 order-1">
                <Eyebrow number="04" label="Tech Solutions" />
                <h2 className="sc-section-title">
                  Technology that works{" "}
                  <span className="sc-accent">behind the scenes</span>.
                </h2>
                <p className="sc-section-copy">
                  Web • Mobile • Cloud • Analytics — we help businesses grow
                  and stay competitive with secure, scalable systems and
                  impactful digital marketing, so your business operates
                  smoothly and stays ahead in the market.
                </p>
                <CheckList
                  items={[
                    "Custom website design & development",
                    "Android & iOS mobile app development",
                    "Digital marketing — SEO, social, paid ads",
                    "Networking & IT infrastructure",
                    "Ongoing maintenance & technical support",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HOTEL FACILITY BOOKING ENGINE */}
        <section className="sc-section">
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <Eyebrow number="05" label="Facility Booking Engine" />
                <h2 className="sc-section-title">
                  Every amenity, <span className="sc-accent">one click</span>{" "}
                  away.
                </h2>
                <p className="sc-section-copy">
                  Guests instantly book conference halls, banquet spaces,
                  spas, gyms and other amenities — viewing real-time
                  availability and confirming in a few clicks. For hoteliers,
                  it centralizes facility management, prevents double
                  bookings and reports on usage to maximize revenue from every
                  service offered.
                </p>
                <CheckList
                  items={[
                    "Real-time facility availability",
                    "Calendar-based event scheduling",
                    "Secure payments for add-on services",
                    "Usage & revenue reporting",
                    "Mobile-friendly for guests & staff",
                  ]}
                />
              </div>
              <div className="col-lg-5">
                <ImageFrame src={img6} alt="Hotel facility booking engine" />
              </div>
            </div>
          </div>
        </section>

        {/* OTA MANAGEMENT */}
        <section className="sc-section" style={{ background: COLORS.white }}>
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5 order-lg-1 order-2">
                <ImageFrame src={img7} alt="OTA management dashboard" />
              </div>
              <div className="col-lg-7 order-lg-2 order-1">
                <Eyebrow number="06" label="OTA Management" />
                <h2 className="sc-section-title">
                  Manage every channel{" "}
                  <span className="sc-accent">from one place</span>.
                </h2>
                <p className="sc-section-copy">
                  Manage listings, pricing and availability across Booking.com,
                  Expedia, Agoda and more from a single centralized platform —
                  with real-time updates that eliminate overbookings and
                  maximize visibility across leading travel portals.
                </p>
                <CapabilityCardGrid
                  items={[
                    "Centralized Channel Control",
                    "Real-time Rate Sync",
                    "Dynamic Pricing Tools",
                    "Automated Overbooking Prevention",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ONLINE TRAVEL AGENT MANAGEMENT */}
        <section className="sc-section">
          <div className="sc-container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <Eyebrow number="07" label="Travel Agent Management" />
                <h2 className="sc-section-title">
                  One dashboard, <span className="sc-accent">every</span>{" "}
                  agency relationship.
                </h2>
                <p className="sc-section-copy">
                  Hotels, resorts and homestays manage their presence across
                  multiple online travel agencies from one unified platform.
                  Rates, availability and promotions update in real time, with
                  analytics and revenue tools to grow bookings while keeping a
                  consistent brand presence everywhere you're listed.
                </p>
                <CheckList
                  items={[
                    "Multi-OTA connectivity, single dashboard",
                    "Real-time inventory & pricing sync",
                    "Channel performance reports",
                    "Revenue optimization tools",
                    "Automatic booking updates",
                  ]}
                />
              </div>
              <div className="col-lg-5">
                <ImageFrame src={img8} alt="Online travel agent management" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sc-section">
          <div className="sc-container">
            <div className="sc-cta">
              <h2>
                Ready to transform{" "}
                <span style={{ color: COLORS.primaryGreen }}>
                  your hotel operations?
                </span>
              </h2>
              <p>
                Visit our official website to browse properties, manage
                bookings, or become a partner.
              </p>
              <a
                href="https://sonachala.com"
                target="_blank"
                rel="noopener noreferrer"
                className="sc-btn-primary"
              >
                Visit Sonachala
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;