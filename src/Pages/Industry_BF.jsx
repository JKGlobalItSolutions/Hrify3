import img10 from "../assets/Industries/img11.png";
import BFimg1 from "../assets/Industries/BFimg1.png";

/* ================= DESIGN TOKENS (shared with About / Talent Management / other Industries) ================= */
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
const SERVICES = [
  {
    num: "01",
    title: "Staffing for Banks & NBFCs",
    desc: "Relationship Managers, Loan Officers, Back Office Executives, and more — placed with precision for your branch and operational needs.",
  },
  {
    num: "02",
    title: "Finance & Accounting Professionals",
    desc: "Chartered Accountants, Financial Analysts, Auditors, and Account Managers who bring rigor and accuracy to your finance function.",
  },
  {
    num: "03",
    title: "Temporary & Permanent Placements",
    desc: "Flexible hiring solutions tailored to your operational needs, whether it's seasonal demand or long-term team building.",
  },
  {
    num: "04",
    title: "Training & Skill Development",
    desc: "Ensuring candidates are industry-ready and updated with the latest regulations before they join your team.",
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

function Industry_BF() {
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

          .bf-copy{
            color: #33424a;
            font-family: 'Poppins', sans-serif;
            font-size: 16.5px;
            line-height: 1.8;
          }
          .bf-cta-btn:hover{
            transform: translateY(-2px);
            opacity: 0.92;
          }

          .bf-service-card{
            background: #fff;
            border: 1px solid #e6edf0;
            border-radius: 10px;
            padding: 34px 30px;
            height: 100%;
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .bf-service-card:hover{
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(1,86,112,0.12);
            border-color: transparent;
          }
          .bf-service-num{
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: #cfe6ec;
            margin-bottom: 10px;
            display: block;
          }

          .bf-media{
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            min-height: 380px;
          }
          .bf-media img{
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 768px) {
            .bf-media{ min-height: 260px; }
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
            backgroundImage: `url(${BFimg1})`,
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
              Industries / Banking &amp; Finance
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
              Banking &amp; Finance
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
              Delivering expert staffing and workforce solutions that support
              secure, scalable operations across banking, financial services,
              and fintech environments.
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
            Empowering Financial Institutions with the Right Talent
          </h2>
          <p
            style={{
              color: DEEP,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "17px",
              fontWeight: 600,
              maxWidth: "700px",
              margin: "0 auto 18px",
            }}
          >
            Strategic Blockchain and AI Solutions for Digital Transformation
          </p>
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
            We specialize in providing highly skilled professionals for banking
            and finance sectors. From entry-level roles to senior management,
            our manpower solutions ensure your organization has the right
            expertise to drive growth and maintain compliance.
          </p>
        </div>

        {/* ================= SERVICES (numbered card grid — unique layout) ================= */}
        <div className="container" style={SECTION_PAD}>
          <div className="text-center mb-5">
            <Eyebrow center>Our Services Include</Eyebrow>
            <h2
              className="fw-bold"
              style={{ fontSize: "clamp(28px, 3.6vw, 38px)", fontFamily: "'Poppins', sans-serif", color: INK }}
            >
              Built Around Your Hiring Needs
            </h2>
          </div>

          <div className="row g-4">
            {SERVICES.map((s) => (
              <div className="col-md-6" key={s.title}>
                <div className="bf-service-card">
                  <span className="bf-service-num">{s.num}</span>
                  <h5 style={{ color: INK, fontWeight: 700, fontFamily: "'Poppins', sans-serif", marginBottom: "10px" }}>
                    {s.title}
                  </h5>
                  <p className="bf-copy" style={{ marginBottom: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DIGITAL TRANSFORMATION (image split, image on right) ================= */}
        <div style={{ background: SOFT_BG }}>
          <div className="container" style={SECTION_PAD}>
            <div className="row align-items-center g-5">
              <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                <Eyebrow>Digital Transformation</Eyebrow>
                <h2
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 36px)",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: INK,
                    marginBottom: "20px",
                  }}
                >
                  Talent Built for Blockchain and AI-Driven Finance
                </h2>
                <p className="bf-copy" style={{ marginBottom: "16px" }}>
                  As banking and finance embrace blockchain, AI, and automation,
                  the professionals behind those systems matter more than ever.
                  We help institutions build teams ready for this shift.
                </p>
                <p className="bf-copy" style={{ marginBottom: 0 }}>
                  From compliance-ready back-office talent to finance
                  professionals who understand emerging technology, HRIFY
                  connects you with people who move your institution forward.
                </p>
              </div>

              <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                <div className="bf-media">
                  <img src={img10} alt="Banking and Finance staffing" />
                </div>
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
            Build Your Banking &amp; Finance Team
          </h2>
          <p
            className="mx-auto mb-4"
            style={{ color: MUTED, fontFamily: "'Poppins', sans-serif", fontSize: "17px", maxWidth: "620px" }}
          >
            Talk to us about the skilled professionals you need for secure,
            compliant, and future-ready financial operations.
          </p>
          <a
            href="/contact"
            className="bf-cta-btn"
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

export default Industry_BF;