import img1 from "../assets/About/img1.png";
import whoWeAreImg from "../assets/About/img2.png";
import bgimg1 from "../assets/About/bgimg1.png";
import img3 from "../assets/About/img3.png";
import img4 from "../assets/About/img4.png";
import HrifyLogo from "../assets/Navbar/logo.png";
import Form from "../Components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/Services/logo1.png";
import logo2 from "../assets/Services/logo2.png";
import logo3 from "../assets/Services/logo3.png";
import logo4 from "../assets/Services/logo4.png";
import logo5 from "../assets/Services/logo5.png";
import logo6 from "../assets/Services/logo6.png";
import logo7 from "../assets/Services/logo7.JPG";
import logo8 from "../assets/Services/logo8.png";
import logo9 from "../assets/Services/logo9.png";
import logo10 from "../assets/Services/logo10.png";

import { motion } from "framer-motion";

/* ================= DESIGN TOKENS ================= */
const INK = "#0B2533";
const TEAL = "#0096b2";
const DEEP = "#015670";
const MUTED = "#5a6a72";
const SOFT_BG = "#f6fbfd";

const SECTION_PAD = { paddingTop: "100px", paddingBottom: "100px" };

const CLIENT_LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const SERVICES = [
  {
    title: "Talent Management",
    desc: "Strategic talent solutions designed to attract, develop, and retain high-performing professionals across industries.",
    items: [
      "Contract & Permanent Hiring",
      "Contract-to-Hire",
      "On-demand Workforce",
      "Leadership & Executive Hiring",
      "Campus Recruitment Programs",
      "Employee Training & Development",
      "Talent Pipeline Building",
    ],
  },
  {
    title: "IT Services",
    desc: "Technology-driven services helping businesses build, scale, and modernize their digital ecosystem.",
    items: [
      "Design & Development",
      "Business Solutions",
      "Networking Solutions",
      "Cybersecurity",
      "Blockchain",
      "Enterprise Solutions",
      "AI & ML",
      "Managed Services",
      "Quality Engineering",
    ],
  },
];

const VALUES = [
  {
    title: "Client-First",
    desc: "Every engagement starts with understanding your goals, not fitting you into a template.",
  },
  {
    title: "Quality-Driven",
    desc: "We vet for skill and cultural fit, so placements last beyond the first ninety days.",
  },
  {
    title: "Built on Trust",
    desc: "Long-term partnerships over one-off placements — we stay accountable after the hire.",
  },
  {
    title: "People-First Growth",
    desc: "We build careers, not just fill roles, through initiatives like our REVIVE program.",
  },
];

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

/* ================= SMALL UI HELPERS ================= */
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
      }}
    >
      {children}
    </span>
  </div>
);

function About() {
  return (
    <>
      <style>
        {`
          body { margin: 0; padding: 0; }

          .glass-card{
            background: rgba(255,255,255,0.95);
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(1,86,112,0.08);
            height: 100%;
          }

          .gradient-text{
            background: linear-gradient(90deg,#0dcaf0,#015670);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hover-lift{
            transition: all 0.3s ease;
          }
          .hover-lift:hover{
            transform: translateY(-8px);
            box-shadow: 0 26px 60px rgba(1,86,112,0.14);
          }

          .clean-list{
            list-style: none;
            padding-left: 0;
            margin: 20px 0 0;
          }
          .clean-list li{
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: #3d4a52;
            font-size: 15.5px;
            line-height: 1.5;
          }
          .clean-list li::before{
            content: "✓";
            position: absolute;
            left: 0;
            top: 0;
            color: #0096b2;
            font-weight: 700;
          }

          .value-card{
            border-left: 3px solid #0096b2;
            padding: 6px 0 6px 20px;
            transition: border-color 0.25s ease;
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes logoScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .logo-track:hover .logo-track-inner { animation-play-state: paused; }
          .logo-item:hover { transform: scale(1.08); }

          .about-hero-card { animation: fadeUp 1.1s ease-out forwards; opacity: 0; }

          /* ===== Full-bleed split layout (Option 1) ===== */
          .full-bleed-split{
            display: flex;
            align-items: stretch;
            width: 100%;
            min-height: 560px;
          }
          .full-bleed-split.reverse{
            flex-direction: row-reverse;
          }
          .full-bleed-media{
            flex: 1 1 50%;
            position: relative;
            overflow: hidden;
          }
          .full-bleed-media img{
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .full-bleed-text{
            flex: 1 1 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 80px clamp(24px, 6vw, 90px);
          }

          @media (max-width: 768px) {
            .about-hero-card { margin-top: -70px !important; padding: 28px !important; max-width: 92% !important; }
            .logo-track-inner { gap: 40px; }
            .logo-item img { height: 50px; }

            .full-bleed-split, .full-bleed-split.reverse{
              flex-direction: column;
              min-height: unset;
            }
            .full-bleed-media{
              min-height: 320px;
            }
            .full-bleed-text{
              padding: 44px 24px;
            }
          }
          @media (max-width: 480px) {
            .logo-track-inner { gap: 28px; }
            .logo-item img { height: 40px; }
          }
        `}
      </style>

      {/* ================= HERO ================= */}
      <div className="container-fluid p-0" style={{ background: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "88px 16px 0" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "60vh",
              minHeight: "420px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={img1}
              alt="HRIFY About Hero"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Dark gradient scrim for text readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                padding: "40px clamp(24px, 5vw, 64px)",
                maxWidth: "640px",
              }}
            >
              <h1 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                About Us
              </h1>
              <p style={{ fontSize: "17px", color: "#e6edf0", lineHeight: 1.6, margin: 0 }}>
                Connecting talent with opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div style={{ backgroundColor: "#fff", position: "relative", zIndex: 2 }}>
        {/* Intro */}
        <div className="container text-center" style={{ paddingTop: "80px", paddingBottom: "20px" }}>
          <Eyebrow center>Our Story</Eyebrow>
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Outfit', sans-serif", color: INK }}
          >
            Streamlining Talent Management for Business Growth
          </h2>
          <p
            className="mx-auto"
            style={{
              color: MUTED,
              fontSize: "18px",
              fontFamily: "'Outfit', sans-serif",
              maxWidth: "700px",
              lineHeight: 1.8,
            }}
          >
            HRIFY specializes in providing comprehensive talent management services
            tailored to meet diverse business needs, with a focus on IT staffing. We
            offer flexible solutions built around how your business actually works.
          </p>
        </div>

        {/* ================= WHO WE ARE (full-bleed split) ================= */}
        <div style={{ background: SOFT_BG }}>
          <div className="full-bleed-split">
            <motion.div
              className="full-bleed-media"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <img src={whoWeAreImg} alt="Who We Are HRIFY" />
            </motion.div>

            <motion.div
              className="full-bleed-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <Eyebrow>Who We Are</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  color: INK,
                  marginBottom: "22px",
                }}
              >
                Empowering Businesses Through People
              </h2>

              <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3d4a52", marginBottom: "16px" }}>
                HRIFY is a people-first IT staffing and talent solutions company
                dedicated to helping organizations build high-performing teams. We
                specialize in IT staffing, strategic talent management, and
                technology services that enable businesses to scale faster and
                smarter.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3d4a52", marginBottom: "16px" }}>
                With a deep understanding of the evolving tech landscape, we connect
                skilled professionals with the right opportunities through flexible
                hiring models, quality-driven recruitment, and long-term
                partnerships. From startups to enterprises, we act as a trusted
                partner in aligning talent, technology, and business goals.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.85, color: "#3d4a52", marginBottom: 0 }}>
                At HRIFY, we don't just fill roles — we build careers, empower
                diversity through initiatives like our REVIVE program, and deliver
                workforce solutions that drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= OUR SERVICES ================= */}
        <motion.div
          className="container"
          style={SECTION_PAD}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-center mb-5">
            <Eyebrow center>What We Do</Eyebrow>
            <h2
              className="gradient-text fw-bold"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontFamily: "'Outfit', sans-serif" }}
            >
              Our Services
            </h2>
          </div>

          <div className="row g-4">
            {SERVICES.map((s) => (
              <div className="col-md-6" key={s.title}>
                <div className="glass-card p-4 p-lg-5 hover-lift">
                  <h4 style={{ color: INK, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                    {s.title}
                  </h4>
                  <p style={{ color: MUTED, fontSize: "16px", lineHeight: 1.7, marginBottom: 0 }}>
                    {s.desc}
                  </p>
                  <ul className="clean-list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= VISION & MISSION ================= */}
        <div
          style={{
            background: "linear-gradient(90deg, #CFF4FF 0%, #FFFFFF 100%)",
            ...SECTION_PAD,
          }}
        >
          <div className="container">
            <div className="row align-items-start g-5">
              {/* Profile */}
              <div className="col-lg-4 col-md-12 text-center">
                <div
                  className="glass-card p-4 mx-auto"
                  style={{ maxWidth: "320px" }}
                >
                  <img
                    src={img3}
                    alt="Founder & CEO"
                    className="img-fluid"
                    style={{ borderRadius: "14px", marginBottom: "18px" }}
                  />
                  <h5 className="fw-semibold mb-1" style={{ color: DEEP }}>
                    Jayakrishnan J
                  </h5>
                  <p style={{ color: MUTED, marginBottom: "14px", fontSize: "15px" }}>
                    Founder &amp; CEO
                  </p>
                  <div
                    style={{
                      background: "#f5fbfd",
                      padding: "8px 18px",
                      borderRadius: "8px",
                      display: "inline-block",
                    }}
                  >
                    <img src={HrifyLogo} alt="HRIFY" style={{ height: "26px" }} />
                  </div>
                </div>
              </div>

              {/* Vision + Mission */}
              <div className="col-lg-8 col-md-12">
                <div className="value-card mb-5">
                  <Eyebrow>Vision</Eyebrow>
                  <p style={{ color: "#1c2b32", lineHeight: 1.9, fontSize: "17px", marginBottom: 0 }}>
                    Known for its innovative solutions and exceptional client service,
                    HRIFY Technologies sets the standard in{" "}
                    <strong>Talent Management, IT Services &amp; IT Consulting</strong>{" "}
                    through cutting-edge technologies and a strong commitment to
                    exceeding customer expectations.
                  </p>
                </div>

                <div className="value-card">
                  <Eyebrow>Mission</Eyebrow>
                  <p style={{ color: "#1c2b32", lineHeight: 1.9, fontSize: "17px", marginBottom: 0 }}>
                    Our mission is to partner with businesses across industries by
                    delivering reliable IT solutions through a strong network of
                    skilled teams, while ensuring client satisfaction and fostering a
                    positive, people-first work culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WHAT DRIVES US (full-bleed split) ================= */}
        <div
          style={{
            position: "relative",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.94), rgba(255,255,255,0.97)), url(${bgimg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="full-bleed-split">
            <motion.div
              className="full-bleed-media"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <img src={img4} alt="What Drives HRIFY" />
            </motion.div>

            <motion.div
              className="full-bleed-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <Eyebrow>What Drives Us</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(26px, 3.5vw, 36px)",
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  color: INK,
                  marginBottom: "28px",
                }}
              >
                The Values Behind Every Placement
              </h2>

              <div className="d-flex flex-column gap-4">
                {VALUES.map((v) => (
                  <div className="value-card" key={v.title}>
                    <h6 style={{ color: DEEP, fontWeight: 700, marginBottom: "6px" }}>
                      {v.title}
                    </h6>
                    <p style={{ color: MUTED, fontSize: "15.5px", lineHeight: 1.7, marginBottom: 0 }}>
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= CLIENTS ================= */}
        <section style={{ ...SECTION_PAD, backgroundColor: "#f8f9fa" }}>
          <div className="container">
            <div className="text-center mb-5">
              <Eyebrow center>Our Network</Eyebrow>
              <h2
                className="fw-bold"
                style={{ color: "#00566F", fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px, 4vw, 36px)" }}
              >
                Trusted By Our Clients
              </h2>
            </div>

            <div className="logo-track" style={{ overflow: "hidden", width: "100%" }}>
              <div
                className="logo-track-inner"
                style={{
                  display: "flex",
                  width: "max-content",
                  animation: "logoScroll 25s linear infinite",
                  gap: "60px",
                }}
              >
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                  <div
                    className="logo-item"
                    key={i}
                    style={{
                      flexShrink: 0,
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <img src={logo} alt="client logo" style={{ height: "70px", objectFit: "contain" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= LET'S TALK / FORM ================= */}
        <div style={{ background: SOFT_BG }}>
          <div className="container" style={SECTION_PAD}>
            <div className="row g-5">
              <div className="col-lg-5 col-md-12">
                <p
                  style={{
                    color: TEAL,
                    fontSize: "16px",
                    fontWeight: 600,
                    marginBottom: "14px",
                  }}
                >
                  Let's Talk
                </p>
                <h2
                  style={{
                    color: INK,
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(32px, 4vw, 46px)",
                    lineHeight: 1.2,
                    marginBottom: "20px",
                  }}
                >
                  Let's Bring Your Vision to Life
                </h2>
                <p
                  style={{
                    color: MUTED,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16.5px",
                    lineHeight: 1.75,
                    maxWidth: "420px",
                    marginBottom: 0,
                  }}
                >
                  Your journey toward innovation and success starts here. Connect
                  with us to explore how we can collaborate to achieve your goals.
                </p>
              </div>

              <div className="col-lg-7 col-md-12">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;