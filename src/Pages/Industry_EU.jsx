import img9 from "../assets/Industries/img9.png";
import EUimg1 from "../assets/Industries/EUimg1.png";

/* ================= DESIGN TOKENS (shared with About / Talent Management / Industry_AM) ================= */
const INK = "#0B2533";
const TEAL = "#0096b2";
const DEEP = "#015670";
const MUTED = "#5a6a72";
const SOFT_BG = "#f6fbfd";

const SECTION_PAD = { paddingTop: "96px", paddingBottom: "96px" };

const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const arrowStyle = {
  fontSize: "42px",
  display: "inline-block",
  animation: "arrowMove 1.5s ease-in-out infinite",
};

/* ================= CONTENT DATA ================= */
const OFFERINGS = [
  {
    title: "Energy Generation",
    desc: "We support energy generation initiatives by providing skilled manpower across conventional and renewable energy sectors. Our staffing solutions help power plants, solar and wind energy projects, and utility providers build efficient teams for design, installation, operations, and maintenance.",
  },
  {
    title: "Sustainable Solutions",
    desc: "Our sustainable solutions focus on supporting clean and renewable energy initiatives that promote environmental responsibility. We help organizations recruit talent skilled in solar, wind, hydro, and energy-efficient technologies, aligning workforce strategies with sustainability goals.",
  },
  {
    title: "Infrastructure Management",
    desc: "We provide workforce support for effective energy infrastructure planning, development, and management — covering grid operations, transmission and distribution systems, asset maintenance, and project management to keep infrastructure reliable.",
  },
  {
    title: "Regulatory Compliance",
    desc: "We assist energy organizations in meeting regulatory and safety standards by providing professionals experienced in compliance, quality assurance, and risk management, helping teams operate responsibly and avoid operational risks.",
  },
];

/* ================= SMALL UI HELPER ================= */
const Eyebrow = ({ children, center }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: center ? "center" : "flex-start",
      gap: "10px",
      marginBottom: "16px",
    }}
  >
    <span style={{ width: "28px", height: "3px", background: TEAL, borderRadius: "2px" }} />
    <span
      style={{
        color: TEAL,
        fontWeight: 700,
        letterSpacing: "2px",
        fontSize: "13px",
        textTransform: "uppercase",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {children}
    </span>
  </div>
);

function Industry_EU() {
  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes arrowMove {
            0% { transform: translateX(0); }
            50% { transform: translateX(16px); }
            100% { transform: translateX(0); }
          }

          .eu-copy{
            color: #33424a;
            font-family: 'Poppins', sans-serif;
            font-size: 16.5px;
            line-height: 1.8;
          }
          .eu-offering-title{
            color: ${INK};
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 18px;
          }
          .eu-cta-btn:hover{
            transform: translateY(-2px);
            opacity: 0.92;
          }

          .eu-media{
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            min-height: 360px;
          }
          .eu-media img{
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 768px) {
            .eu-media{ min-height: 260px; }
          }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
        <div
          className="d-flex align-items-center"
          style={{
            position: "relative",
            minHeight: "90vh",
            width: "100%",
            backgroundImage: `url(${EUimg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.25))",
              zIndex: 1,
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              paddingTop: "140px",
              paddingBottom: "70px",
              ...fadeUpStyle,
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: "18px",
              }}
            >
              Industries / Energy &amp; Utilities
            </p>

            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.12,
                marginBottom: "20px",
              }}
            >
              Energy &amp; Utilities
            </h1>

            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(18px, 2.4vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.55,
                maxWidth: "680px",
                color: "rgba(255,255,255,0.88)",
                marginBottom: "8px",
              }}
            >
              Delivering workforce solutions that support reliable energy
              generation, sustainable infrastructure, and resilient utility
              operations.
            </h3>

            <p style={arrowStyle}>→</p>
          </div>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <div style={{ background: "#fff" }}>
        <div className="container text-center" style={{ paddingTop: "90px", paddingBottom: "20px" }}>
          <Eyebrow center>Overview</Eyebrow>
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontFamily: "'Poppins', sans-serif",
              color: INK,
            }}
          >
            Powering a Sustainable Energy Future
          </h2>
          <p
            className="mx-auto"
            style={{
              color: MUTED,
              fontSize: "17px",
              fontFamily: "'Poppins', sans-serif",
              maxWidth: "760px",
              lineHeight: 1.8,
            }}
          >
            Energy and Utilities covers the generation, transmission,
            distribution, and management of essential resources — electricity,
            natural gas, water, and renewable energy. From traditional fossil
            fuels to solar, wind, and hydroelectric power, we help organizations
            manage infrastructure, ensure supply reliability, and support
            efficiency and regulatory compliance as the industry transitions
            toward cleaner, more sustainable solutions.
          </p>
        </div>

        {/* ================= WHAT WE OFFER ================= */}
        <div className="container" style={SECTION_PAD}>
          <div>
            {OFFERINGS.map((item, i) => (
              <div key={item.title}>
                <div className="row py-4">
                  <div className="col-md-4 col-12 mb-2 mb-md-0">
                    <h5 className="eu-offering-title" style={{ marginBottom: 0 }}>
                      {item.title}
                    </h5>
                  </div>
                  <div className="col-md-8 col-12">
                    <p className="eu-copy" style={{ marginBottom: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < OFFERINGS.length - 1 && (
                  <hr style={{ borderTop: "1px solid #dcdcdc", margin: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= WHY IT MATTERS (image split) ================= */}
        <div style={{ background: SOFT_BG }}>
          <div className="container" style={SECTION_PAD}>
            <div className="row align-items-center g-5">
              <div className="col-lg-6 col-md-12">
                <div className="eu-media">
                  <img src={img9} alt="Energy and Utilities staffing" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <Eyebrow>Why It Matters</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 36px)",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: INK,
                    marginBottom: "20px",
                  }}
                >
                  Reliable Power Needs the Right People
                </h2>
                <p className="eu-copy" style={{ marginBottom: "16px" }}>
                  As the energy sector shifts toward renewables and smarter
                  infrastructure, the right workforce is what keeps power
                  reliable, safe, and sustainable.
                </p>
                <p className="eu-copy" style={{ marginBottom: 0 }}>
                  HRIFY partners with power generation, transmission, and
                  utility organizations to deliver compliance-ready, technically
                  skilled professionals who help you operate efficiently and
                  meet evolving energy demands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="container text-center" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
          <h2
            className="fw-bold mb-3"
            style={{ color: DEEP, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(26px, 3.5vw, 36px)" }}
          >
            Build Your Energy &amp; Utilities Team
          </h2>
          <p
            className="mx-auto mb-4"
            style={{ color: MUTED, fontFamily: "'Poppins', sans-serif", fontSize: "17px", maxWidth: "620px" }}
          >
            Talk to us about the skilled professionals you need to power
            reliable, sustainable energy operations.
          </p>
          <a
            href="/contact"
            className="eu-cta-btn"
            style={{
              display: "inline-block",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#fff",
              background: TEAL,
              padding: "14px 34px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "transform 0.25s ease, opacity 0.25s ease",
            }}
          >
            Talk to Our Team →
          </a>
        </div>
      </div>
    </>
  );
}

export default Industry_EU;