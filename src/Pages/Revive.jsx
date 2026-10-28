import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, BookOpen, Users, ShieldCheck } from "lucide-react";
import heroImage from "../assets/Carrer/img3.jpeg";
import aboutImg from "../assets/Carrer/rise-about-image.jpg";

// ---- Same brand tokens as Internship.jsx / Referal.jsx ----
const C = {
  navy: "#0B2A3B",
  teal: "#015670",
  accent: "#0EA5A0",
  text: "#1B2733",
  muted: "#5B6B76",
  bg: "#F6F9FA",
  border: "#E4E9EC",
  white: "#FFFFFF",
};

/* ================= COUNT UP HOOK ================= */
const useCountUp = (end, duration = 1500) => {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const increment = end / (duration / 16);

        const animate = () => {
          start += increment;
          if (start < end) {
            setCount(Math.floor(start));
            requestAnimationFrame(animate);
          } else setCount(end);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Eyebrow({ children }) {
  return <div className="rv-eyebrow">{children}</div>;
}

const FEATURE_STRIP = [
  {
    icon: <Briefcase size={22} />,
    title: "Career Restart",
    desc: "Re-enter with confidence",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Skill Refresh",
    desc: "Update and upskill",
  },
  {
    icon: <Users size={22} />,
    title: "Mentorship",
    desc: "Guidance from experts",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Work-Life Balance",
    desc: "Supportive environment",
  },
];

const Revive = () => {
  return (
    <div className="rv-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .rv-root {
          font-family: 'Poppins', sans-serif;
          color: ${C.text};
        }
        .rv-root * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .rv-eyebrow {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          margin-bottom: 14px;
        }

        .rv-h2 {
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 700;
          color: ${C.navy};
          line-height: 1.25;
        }

        .rv-copy {
          font-size: 16px;
          line-height: 1.8;
          color: ${C.muted};
        }

        /* ---- Hero (light background, matches Talent-page-style hero) ---- */
        .rv-hero {
          position: relative;
          overflow: hidden;
          padding: 110px 0 60px;
          background:
            radial-gradient(circle at 85% 35%, rgba(0,166,166,0.08), transparent 35%),
            ${C.bg};
        }
        .rv-hero .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
        }
        .rv-hero .row {
          --bs-gutter-x: 70px;
        }

        .rv-hero-badge {
          display: inline-block;
          border: 1px solid ${C.accent};
          background: transparent;
          border-radius: 50px;
          padding: 7px 18px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${C.teal};
          margin-bottom: 22px;
        }
        .rv-hero h1 {
          color: ${C.navy};
          font-size: clamp(44px, 4.5vw, 58px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }
        .rv-hero-accent { color: ${C.teal}; }
        .rv-hero-underline {
          width: 56px;
          height: 4px;
          border-radius: 4px;
          background: ${C.accent};
          margin: 18px 0 22px;
        }
        .rv-hero p {
          color: ${C.muted};
          font-size: 16.5px;
          line-height: 1.8;
          max-width: 480px;
        }
        .rv-btn-primary {
          background: ${C.accent};
          color: ${C.navy};
          font-weight: 700;
          padding: 14px 30px;
          border-radius: 50px;
          border: none;
          box-shadow: 0 10px 24px rgba(14,165,160,0.25);
          transition: transform 0.2s ease;
        }
        .rv-btn-primary:hover { transform: translateY(-2px); }
        .rv-hero-learn-more {
          color: ${C.teal};
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .rv-hero-image-wrapper {
          padding-left: 10px;
        }
        .rv-hero-image {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(6,44,65,0.10);
        }

        .rv-about-image {
          width: 100%;
          max-width: 460px;
          height: 340px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 16px 36px rgba(6,44,65,0.10);
        }
        @media (max-width: 991px) {
          .rv-about-image {
            max-width: 100%;
            height: 280px;
          }
        }

        /* ---- Feature strip ---- */
        .rv-feature-strip {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 20px;
          max-width: 1120px;
          margin: 20px auto 0;
          padding: 28px 32px;
          box-shadow: 0 14px 34px rgba(11,42,59,0.06);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 992px) {
          .rv-feature-strip { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
          .rv-feature-strip { grid-template-columns: 1fr; }
        }
        .rv-feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .rv-feature-icon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 12px;
          background: ${C.bg};
          color: ${C.teal};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rv-feature-item h6 {
          color: ${C.navy};
          font-weight: 700;
          margin-bottom: 4px;
          font-size: 15px;
        }
        .rv-feature-item p {
          color: ${C.muted};
          font-size: 13.5px;
          margin: 0;
        }

        /* ---- Cards ---- */
        .rv-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 30px 24px;
          box-shadow: 0 10px 26px rgba(11,42,59,0.06);
          height: 100%;
        }

        /* ---- Step cards ---- */
        .rv-step-card {
          position: relative;
          padding-top: 20px;
        }
        .rv-step-circle {
          position: absolute;
          top: -16px;
          left: 24px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: ${C.navy};
          color: ${C.white};
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rv-step-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: ${C.bg};
          color: ${C.teal};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }
        .rv-step-card h6 {
          color: ${C.navy};
          font-weight: 700;
          margin-bottom: 8px;
        }

        /* ---- Stat cards ---- */
        .rv-stat-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 18px;
          padding: 40px 20px;
          text-align: center;
          box-shadow: 0 14px 30px rgba(11,42,59,0.06);
          height: 100%;
        }
        .rv-stat-num {
          font-size: 44px;
          font-weight: 800;
          color: ${C.teal};
          margin-bottom: 6px;
        }
        .rv-stat-label {
          font-size: 15px;
          font-weight: 500;
          color: ${C.muted};
        }

        /* ---- Toolkit cards ---- */
        .rv-toolkit-card h6 {
          color: ${C.navy};
          font-weight: 700;
        }
        .rv-toolkit-card p {
          color: ${C.muted};
          margin-top: 8px;
          margin-bottom: 0;
        }

        /* ---- Final CTA ---- */
        .rv-final-cta {
          background: linear-gradient(135deg, ${C.navy} 0%, ${C.teal} 100%);
          padding: 90px 0;
          text-align: center;
        }
        .rv-final-cta h2 { color: ${C.white}; }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="rv-hero">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="rv-hero-badge">
                HRIFY RISE Program
              </motion.div>

              <motion.h1 variants={fadeUp} className="fw-bold">
                Restart Your Career <br />
                with <span className="rv-hero-accent">RISE</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="rv-hero-underline" />

              <motion.p variants={fadeUp}>
                A structured returnship program supporting women
                professionals to confidently return to the workforce.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-4 d-flex align-items-center gap-4 flex-wrap"
              >
                <button className="rv-btn-primary">Apply Now →</button>
                <a href="#about-rise" className="rv-hero-learn-more">
                  Learn more →
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-6 mt-5 mt-lg-0 rv-hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroImage}
                alt="RISE Program"
                className="rv-hero-image"
              />
            </motion.div>
          </div>

          <motion.div
            className="rv-feature-strip"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {FEATURE_STRIP.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="rv-feature-item">
                <div className="rv-feature-icon">{item.icon}</div>
                <div>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT RISE ================= */}
      <section className="py-5" style={{ background: C.white }} id="about-rise">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Eyebrow>About the Program</Eyebrow>
              <h2 className="rv-h2 mb-3">RISE Program</h2>

              <p className="rv-copy">
                RISE by HRIFY is a support program created for women
                professionals who want to return to work after a career
                break. It helps you rebuild confidence, refresh your skills,
                and move forward at your own pace.
              </p>
              <p className="rv-copy">
                RISE respects your past experience and understands that
                career breaks happen for many reasons — motherhood,
                caregiving, personal priorities, or life transitions.
              </p>
              <p className="rv-copy">
                With guidance, mentoring, and real exposure, RISE helps you
                feel ready to step back into your career when you choose.
              </p>
              <p className="fw-semibold mt-3" style={{ color: C.teal }}>
                Because a career break does not mean the end of your career.
              </p>
            </motion.div>

            <motion.div
              className="col-lg-6 text-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImg}
                alt="RISE Support"
                className="rv-about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-5" style={{ background: C.bg }}>
        <div className="container py-5 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Eyebrow>The Journey</Eyebrow>
            <h2 className="rv-h2">
              How <span style={{ color: C.teal }}>RISE</span> Works
            </h2>
            <p className="rv-copy mb-5">
              A simple four-step journey to restart your career
            </p>
          </motion.div>

          <motion.div
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              ["1", "bi-clipboard-check", "Apply & Skill Assessment", "Personalized evaluation to understand your strengths"],
              ["2", "bi-mortarboard", "Structured Upskilling", "Targeted learning aligned to industry needs"],
              ["3", "bi-briefcase", "Client Project Experience", "Hands-on work with real client projects"],
              ["4", "bi-rocket-takeoff", "Career Transition", "Support to move into contract or full-time roles"],
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-lg-3 col-md-6"
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="rv-card rv-step-card text-start">
                  <div className="rv-step-circle">{item[0]}</div>
                  <div className="rv-step-icon">
                    <i className={`bi ${item[1]}`}></i>
                  </div>
                  <h6>{item[2]}</h6>
                  <p className="text-muted small mb-0">{item[3]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAM OVERVIEW ================= */}
      <section className="py-5" style={{ background: C.white }}>
        <div className="container py-5 text-center">
          <Eyebrow>By The Numbers</Eyebrow>
          <motion.h2
            className="rv-h2 mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Program <span style={{ color: C.teal }}>Overview</span>
          </motion.h2>

          <div className="row g-4">
            <StatCard value={12} label="Week Program" />
            <StatCard value={100} label="Remote & Hybrid" suffix="+" />
            <StatCard value={4} label="Industry Domains" />
            <StatCard value={85} label="Conversion Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* ================= TOOLKIT ================= */}
      <section className="py-5" style={{ background: C.bg }}>
        <div className="container py-5">
          <div className="text-center">
            <Eyebrow>What You Get</Eyebrow>
            <h2 className="rv-h2 mb-5">
              The <span style={{ color: C.teal }}>RISE Toolkit</span>
            </h2>
          </div>

          <div className="row g-4">
            {[
              ["Confidence Rebuilding", "Gentle mentoring to overcome self-doubt", "bi-emoji-smile"],
              ["Skill Refresh Support", "Revisit and strengthen existing skills", "bi-lightbulb"],
              ["Resume & Profile Guidance", "Update resume & professional profiles", "bi-file-earmark-text"],
              ["Career Direction Clarity", "Identify suitable roles & career paths", "bi-signpost-split"],
              ["Interview Readiness", "Communicate your career break confidently", "bi-chat-dots"],
              ["Mentorship & Community", "Access mentors & supportive peer network", "bi-people"],
            ].map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="rv-card rv-toolkit-card">
                  <div className="rv-step-icon">
                    <i className={`bi ${item[2]}`}></i>
                  </div>
                  <h6>{item[0]}</h6>
                  <p>{item[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="rv-final-cta">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            RISE is here to support your comeback.
          </h2>
          <button className="rv-btn-primary">Apply for RISE →</button>
        </div>
      </section>
    </div>
  );
};

/* ================= STAT CARD ================= */
const StatCard = ({ value, label, suffix = "" }) => {
  const { count, ref } = useCountUp(value);

  return (
    <div className="col-lg-3 col-md-6" ref={ref}>
      <div className="rv-stat-card">
        <div className="rv-stat-num">
          {count}
          {suffix}
        </div>
        <div className="rv-stat-label">{label}</div>
      </div>
    </div>
  );
};

export default Revive;