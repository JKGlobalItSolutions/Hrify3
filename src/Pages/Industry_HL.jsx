import HLimg1 from "../assets/Industries/HLimg1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import healthcareImg from "../assets/Industries/img8.jpeg";
import serveImg from "../assets/Industries/img9.jpeg";

/* ================= DESIGN TOKENS (shared brand tokens + healthcare accent) ================= */
const INK = "#0B2533";
const TEAL = "#0096b2";
const DEEP = "#015670";
const MUTED = "#5a6a72";
const FONT = "'Poppins', sans-serif";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const arrowStyle = {
  fontSize: "42px",
  display: "inline-block",
  animation: "arrowMove 1.5s ease-in-out infinite",
};

const HIGHLIGHTS = [
  "Clinical & Non-Clinical Staffing",
  "Credentialed & Compliant Talent",
  "End-to-End Hiring Support",
];

const WHY_HRIFY = [
  {
    title: "Healthcare-specific recruitment expertise",
    desc: "Specialized knowledge across healthcare hiring",
  },
  {
    title: "Credentialed & compliance-verified candidates",
    desc: "Quality and compliance at every stage",
  },
  {
    title: "Rapid deployment without compromising quality",
    desc: "Faster access to qualified professionals",
  },
  {
    title: "Flexible staffing solutions",
    desc: "Contract, permanent & on-demand workforce",
  },
  {
    title: "People-first hiring with ethical practices",
    desc: "Long-term workforce partnerships",
  },
];

const ROLES = [
  ["Doctors & Physicians", "Specialists, consultants, surgeons, general practitioners"],
  ["Nursing Professionals", "Registered nurses, ICU, emergency & clinical nurses"],
  ["Allied Healthcare", "Lab techs, radiographers, pharmacists, therapists"],
  ["Healthcare IT & Admin", "EMR/EHR specialists, billing, ops & IT staff"],
];

const PROCESS_STEPS = [
  {
    title: "Requirement Analysis",
    desc: "We work closely with healthcare organizations to understand staffing needs, role specifications, compliance requirements, and workforce challenges.",
  },
  {
    title: "Talent Sourcing",
    desc: "Our recruiters source qualified doctors, nurses, allied health professionals, and healthcare IT talent through verified networks and databases.",
  },
  {
    title: "Credential Verification",
    desc: "We conduct rigorous background checks, license validation, certifications review, and regulatory compliance verification.",
  },
  {
    title: "Client Selection",
    desc: "Shortlisted candidates are presented to clients for interviews, skill assessments, and final selection.",
  },
  {
    title: "Onboarding & Support",
    desc: "We ensure smooth onboarding, documentation, orientation, and continuous post-placement support.",
  },
];

/* ================= SMALL UI HELPER ================= */
const Tag = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "6px 16px",
      background: "rgba(0,150,178,0.1)",
      color: TEAL,
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: 600,
      fontFamily: FONT,
      marginBottom: "14px",
    }}
  >
    {children}
  </span>
);

function Industry_HL() {
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
          .hover-lift {
            transition: all 0.4s ease;
          }
          .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 30px 60px rgba(1,86,112,0.15);
          }
          @media (max-width: 768px) {
            .hl-about-media { min-height: 280px !important; }
          }
          .hl-hero-cta:hover {
            transform: translateY(-2px);
            opacity: 0.92;
          }
          .hl-timeline-line {
            position: absolute;
            top: 24px;
            left: 0;
            right: 0;
            height: 2px;
            background: #cfe3ea;
            z-index: 0;
          }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
        <div
          className="d-flex align-items-center"
          style={{
            position: "relative",
            minHeight: "78vh",
            width: "100%",
            backgroundImage: `url(${HLimg1})`,
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
              background:
                "linear-gradient(115deg, rgba(11,37,51,0.94) 0%, rgba(11,37,51,0.72) 45%, rgba(11,37,51,0.35) 100%)",
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
                fontFamily: FONT,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: "18px",
              }}
            >
              Industries / Healthcare &amp; Life Sciences
            </p>

            <h1
              style={{
                fontFamily: FONT,
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.12,
                marginBottom: "20px",
              }}
            >
              Healthcare &amp; Life Sciences
            </h1>

            <h3
              style={{
                fontFamily: FONT,
                fontSize: "clamp(18px, 2.4vw, 24px)",
                fontWeight: 400,
                lineHeight: 1.55,
                maxWidth: "700px",
                color: "rgba(255,255,255,0.88)",
                marginBottom: "8px",
              }}
            >
              Offering expert staffing and operational support for healthcare
              systems, life science advancement, and compliant, patient-centric
              services.
            </h3>

            <a
              href="#about-hrify-healthcare"
              className="hl-hero-cta"
              style={{
                display: "inline-block",
                fontFamily: FONT,
                fontSize: "15px",
                fontWeight: 600,
                color: INK,
                background: "#fff",
                padding: "14px 30px",
                borderRadius: "4px",
                textDecoration: "none",
                marginTop: "12px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
              }}
            >
              Explore Healthcare Solutions →
            </a>
          </div>
        </div>
      </div>

      {/* ================= ABOUT HRIFY HEALTHCARE ================= */}
      <section
        id="about-hrify-healthcare"
        style={{
          background: "linear-gradient(180deg, #f4fbff 0%, #ffffff 100%)",
        }}
      >
        <div
          className="row g-0 align-items-stretch"
          style={{ minHeight: "640px", margin: 0 }}
        >
          <div className="col-lg-6 p-0">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ position: "relative", height: "100%", minHeight: "440px", overflow: "hidden" }}
              className="hl-about-media"
            >
              <img
                src={healthcareImg}
                alt="HRIFY Healthcare"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />
            </motion.div>
          </div>

          <div
            className="col-lg-6"
            style={{
              padding: "90px clamp(24px, 6vw, 90px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "#f4fbff",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Tag>About HRIFY Healthcare</Tag>

              <h2 style={{ fontFamily: FONT, fontSize: "34px", fontWeight: 700, color: INK, marginBottom: "20px" }}>
                Building Stronger Healthcare Workforces
              </h2>

              <p style={{ fontFamily: FONT, fontSize: "16px", lineHeight: "1.8", color: MUTED, marginBottom: "16px" }}>
                HRIFY Healthcare is a dedicated staffing and workforce
                solutions provider designed to support the evolving needs of
                the healthcare industry. We partner with hospitals, clinics,
                diagnostic centers, life sciences firms, and healthcare
                technology organizations to deliver skilled, compliant, and
                dependable talent across clinical and non-clinical roles.
              </p>

              <p style={{ fontFamily: FONT, fontSize: "16px", lineHeight: "1.8", color: MUTED, marginBottom: "24px" }}>
                With a strong understanding of healthcare workflows and
                workforce challenges, HRIFY offers end-to-end recruitment
                services — from requirement analysis and talent sourcing to
                credential verification, onboarding, and ongoing support. We
                specialize in hiring doctors, nurses, allied health
                professionals, and healthcare IT specialists, ensuring every
                candidate meets industry standards and organizational
                expectations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {HIGHLIGHTS.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      fontFamily: FONT,
                      fontSize: "15.5px",
                      fontWeight: 600,
                      color: INK,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ color: TEAL, fontWeight: 700 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHY HRIFY ================= */}
      <section style={{ background: "#f2fbff", padding: "90px 0" }}>
        <div className="container">
          <motion.h2 {...fadeUp} style={{ fontFamily: FONT, fontSize: "38px", fontWeight: "700", color: DEEP, marginBottom: "10px" }}>
            Why HRIFY Healthcare
          </motion.h2>

          <div style={{ marginTop: "30px" }}>
            {WHY_HRIFY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="row align-items-center py-4"
                style={{
                  borderTop: i === 0 ? "1px solid #d7e6ec" : "none",
                  borderBottom: "1px solid #d7e6ec",
                }}
              >
                <div className="col-md-1 col-3">
                  <span style={{ fontFamily: FONT, fontSize: "22px", fontWeight: 700, color: TEAL }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-md-6 col-9">
                  <h6 style={{ fontFamily: FONT, fontWeight: 700, color: INK, marginBottom: 0, fontSize: "16.5px" }}>
                    {item.title}
                  </h6>
                </div>
                <div className="col-md-5 col-12 mt-2 mt-md-0">
                  <p style={{ fontFamily: FONT, fontSize: "15px", color: MUTED, marginBottom: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-5" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={serveImg}
                alt="Who We Serve"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 25px 45px rgba(1,86,112,0.15)",
                }}
              />
            </motion.div>

            <motion.div className="col-lg-6 mt-4 mt-lg-0" {...fadeUp}>
              <h2 style={{ fontFamily: FONT, fontSize: "36px", fontWeight: "700", color: DEEP, marginBottom: "16px" }}>
                Who We Serve
              </h2>
              <p style={{ fontFamily: FONT, fontSize: "17px", lineHeight: "1.85", color: MUTED, marginBottom: "20px" }}>
                We partner with hospitals, clinics, diagnostic centers, home
                healthcare providers, telehealth platforms, and healthcare IT
                organizations — delivering skilled talent that strengthens
                operations and enhances patient care.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Hospitals", "Clinics", "Diagnostic Centers", "Telehealth", "Healthcare IT"].map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: FONT,
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: DEEP,
                      border: "1px solid #cfe3ea",
                      borderRadius: "20px",
                      padding: "6px 16px",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ROLES ================= */}
      <section className="py-5" style={{ background: "#ffffff", padding: "90px 0" }}>
        <div className="container">
          <motion.h2 {...fadeUp} style={{ fontFamily: FONT, fontSize: "38px", fontWeight: "700", color: DEEP }}>
            Healthcare Roles We Hire
          </motion.h2>

          <motion.p
            {...fadeUp}
            style={{ fontFamily: FONT, fontSize: "17px", color: MUTED, maxWidth: "900px", marginTop: "15px" }}
          >
            We deliver skilled professionals across clinical, allied, and
            healthcare technology domains to support patient care and
            operational continuity.
          </motion.p>

          <div className="row mt-5">
            {ROLES.map((role, i) => (
              <motion.div
                key={i}
                className="col-md-6 col-lg-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    borderLeft: `3px solid ${TEAL}`,
                    padding: "6px 0 6px 20px",
                    height: "100%",
                  }}
                >
                  <span style={{ fontFamily: FONT, fontSize: "13px", fontWeight: 700, color: TEAL }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h5 style={{ fontFamily: FONT, fontWeight: "600", color: DEEP, marginTop: "6px" }}>
                    {role[0]}
                  </h5>
                  <p style={{ fontFamily: FONT, fontSize: "15px", color: MUTED, marginTop: "8px", marginBottom: 0 }}>
                    {role[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section style={{ background: "linear-gradient(180deg,#eef8fc,#d9eef8)", padding: "90px 0" }}>
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ fontFamily: FONT, fontSize: "38px", fontWeight: "700", color: DEEP }}
          >
            Our Healthcare Hiring Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontFamily: FONT,
              fontSize: "17px",
              color: MUTED,
              maxWidth: "820px",
              margin: "15px auto 55px",
            }}
          >
            Our structured hiring process ensures speed, compliance, and quality
            at every stage of healthcare recruitment.
          </motion.p>

          <div
            className="d-none d-lg-flex"
            style={{ position: "relative", gap: "0", marginTop: "20px" }}
          >
            <div className="hl-timeline-line" />
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
                style={{ flex: "1 1 0", position: "relative", zIndex: 1, padding: "0 14px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: TEAL,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT,
                    fontWeight: "700",
                    fontSize: "18px",
                    margin: "0 auto 18px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h6 style={{ fontFamily: FONT, color: DEEP, fontWeight: "700", marginBottom: "8px", fontSize: "15.5px" }}>
                  {step.title}
                </h6>

                <p style={{ fontFamily: FONT, fontSize: "13.5px", color: MUTED, lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="d-flex d-lg-none flex-column" style={{ marginTop: "20px", textAlign: "left" }}>
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="d-flex"
                style={{
                  gap: "18px",
                  paddingBottom: i < PROCESS_STEPS.length - 1 ? "28px" : 0,
                  borderLeft: i < PROCESS_STEPS.length - 1 ? "2px solid #cfe3ea" : "2px solid transparent",
                  marginLeft: "24px",
                  paddingLeft: "24px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-25px",
                    top: 0,
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: TEAL,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT,
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ paddingTop: "6px" }}>
                  <h6 style={{ fontFamily: FONT, color: DEEP, fontWeight: "700", marginBottom: "6px" }}>
                    {step.title}
                  </h6>
                  <p style={{ fontFamily: FONT, fontSize: "14.5px", color: MUTED, lineHeight: "1.7", marginBottom: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          padding: "120px 0",
          backgroundColor: "#ffffff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "380px",
            height: "380px",
            background: `linear-gradient(135deg, ${TEAL}, ${TEAL})`,
            transform: "rotate(45deg)",
            borderRadius: "40px",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-140px",
            left: "-140px",
            width: "420px",
            height: "420px",
            background: "linear-gradient(135deg, #cfe9f4, #ffffff)",
            transform: "rotate(45deg)",
            borderRadius: "60px",
          }}
        />

        <div className="container position-relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "70px 60px",
              boxShadow: "0 30px 80px rgba(1,86,112,0.15)",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Tag>Healthcare Workforce Solutions</Tag>

            <h2 style={{ fontFamily: FONT, fontSize: "40px", fontWeight: 700, color: INK, marginBottom: "20px" }}>
              Partner with HRIFY Healthcare
            </h2>

            <p
              style={{
                fontFamily: FONT,
                maxWidth: "820px",
                margin: "0 auto 40px",
                fontSize: "17px",
                lineHeight: "1.8",
                color: MUTED,
              }}
            >
              Build a resilient, compliant, and future-ready healthcare
              workforce with HRIFY. From doctors and nurses to allied health
              and healthcare IT, we deliver talent you can trust.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 18px 40px rgba(0,150,178,0.35)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "inline-block",
                padding: "16px 48px",
                background: `linear-gradient(135deg, ${TEAL} 0%, ${DEEP} 100%)`,
                color: "#ffffff",
                fontFamily: FONT,
                fontSize: "15px",
                fontWeight: 600,
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Partner with Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Industry_HL;