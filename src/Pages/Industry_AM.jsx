import img7 from "../assets/Industries/img7.png";
import AMimg1 from "../assets/Industries/AMimg1.png";

/* ================= DESIGN TOKENS (shared with About / Talent Management) ================= */
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
    title: "Vehicle Innovation",
    desc: "We support vehicle innovation by providing skilled professionals who drive advancements in automotive and mobility technologies. Our staffing solutions enable organizations to build teams specializing in electric vehicles, autonomous systems, connected vehicle platforms, and next-generation automotive engineering.",
  },
  {
    title: "Sustainable Solutions",
    desc: "Our sustainable staffing solutions focus on supporting eco-friendly and future-ready mobility initiatives. We help organizations recruit talent skilled in electric vehicle development, battery technology, energy efficiency, and environmentally responsible manufacturing practices.",
  },
  {
    title: "Smart Mobility",
    desc: "We empower smart mobility initiatives by staffing professionals who support shared mobility platforms, intelligent transportation systems, and data-driven mobility services — from software developers and data analysts to operations and fleet management experts.",
  },
  {
    title: "Global Transportation Evolution",
    desc: "As the transportation ecosystem evolves globally, we provide scalable staffing solutions to support cross-regional operations and international growth, connecting organizations with skilled talent across manufacturing, technology, and mobility services.",
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

function Industry_AM() {
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

          .am-copy{
            color: #33424a;
            font-family: 'Poppins', sans-serif;
            font-size: 16.5px;
            line-height: 1.8;
          }
          .am-offering-title{
            color: ${INK};
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 18px;
          }
          .am-cta-btn:hover{
            transform: translateY(-2px);
            opacity: 0.92;
          }

          .am-media{
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            min-height: 360px;
          }
          .am-media img{
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 768px) {
            .am-media{ min-height: 260px; }
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
            backgroundImage: `url(${AMimg1})`,
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
              Industries / Automotive &amp; Mobility
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
              Automotive &amp; Mobility
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
              Engineering the future of transportation with skilled professionals
              supporting connected, electrified, and software-driven mobility
              ecosystems.
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
            Staffing the Future of Transportation
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
            Automotive and Mobility staffing services focus on providing skilled
            professionals to support the evolving transportation and vehicle
            technology ecosystem — spanning traditional manufacturing, electric
            vehicles, autonomous and connected systems, and modern mobility
            solutions. We deliver qualified talent across technical and
            non-technical roles, helping organizations maintain efficiency,
            innovation, and growth in a highly competitive market.
          </p>
        </div>

        {/* ================= WHAT WE OFFER ================= */}
        <div className="container" style={SECTION_PAD}>
          <div>
            {OFFERINGS.map((item, i) => (
              <div key={item.title}>
                <div className="row py-4">
                  <div className="col-md-4 col-12 mb-2 mb-md-0">
                    <h5 className="am-offering-title" style={{ marginBottom: 0 }}>
                      {item.title}
                    </h5>
                  </div>
                  <div className="col-md-8 col-12">
                    <p className="am-copy" style={{ marginBottom: 0 }}>
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
                <div className="am-media">
                  <img src={img7} alt="Automotive and Mobility staffing" />
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
                  Built for a Fast-Moving Industry
                </h2>
                <p className="am-copy" style={{ marginBottom: "16px" }}>
                  The automotive and mobility sector is being redefined by
                  electrification, autonomy, and software — and the right talent
                  is what turns that shift into real progress.
                </p>
                <p className="am-copy" style={{ marginBottom: 0 }}>
                  HRIFY partners with manufacturers, mobility platforms, and
                  technology teams to deliver domain-ready professionals who help
                  you innovate faster and stay resilient as the industry evolves.
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
            Build Your Automotive &amp; Mobility Team
          </h2>
          <p
            className="mx-auto mb-4"
            style={{ color: MUTED, fontFamily: "'Poppins', sans-serif", fontSize: "17px", maxWidth: "620px" }}
          >
            Talk to us about the skilled professionals you need to accelerate
            innovation in your automotive and mobility programs.
          </p>
          <a
            href="/contact"
            className="am-cta-btn"
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

export default Industry_AM;