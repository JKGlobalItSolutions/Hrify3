import { useState } from "react";
import img1 from "../assets/Internship/img1.png";
import img2 from "../assets/Internship/img2.png";
import img3 from "../assets/Internship/img3.png";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";

// ---- Brand tokens ----
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

const DOMAIN_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Data Analytics",
  "Digital Marketing",
  "HR & Talent Acquisition",
];

function Eyebrow({ children }) {
  return <div className="hr-eyebrow">{children}</div>;
}

function HighlightCard({ number, icon, title, desc }) {
  return (
    <div className="hr-highlight-card">
      <div className="hr-highlight-top">
        <span className="hr-highlight-number">{number}</span>
        <span className="hr-highlight-icon">{icon}</span>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <span className="hr-highlight-arrow">
        <ArrowRight size={18} />
      </span>
    </div>
  );
}

function DomainCard({ number, title, subtitle }) {
  return (
    <div className="hr-domain-card">
      <span className="hr-domain-number">{number}</span>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <span className="hr-domain-explore">
        Explore <ArrowRight size={16} />
      </span>
    </div>
  );
}

function BenefitItem({ children }) {
  return (
    <div className="hr-benefit-item">
      <span className="hr-benefit-check">✓</span>
      <span>{children}</span>
    </div>
  );
}

function StoryCard({ initials, name, role, quote, badge }) {
  return (
    <div className="hr-story-card">
      <div className="hr-story-top">
        <div className="hr-story-avatar">{initials}</div>
        {badge && <span className="hr-story-badge">{badge}</span>}
      </div>
      <p className="hr-story-quote">"{quote}"</p>
      <div className="hr-story-name">{name}</div>
      <div className="hr-story-role">{role}</div>
    </div>
  );
}

function Internship() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    domain: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your submission endpoint
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hr-root {
          font-family: 'Poppins', sans-serif;
          color: ${C.text};
        }
        .hr-root * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .hr-section { padding: 90px 0; }
        @media (max-width: 768px) { .hr-section { padding: 56px 0; } }

        .hr-eyebrow {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          margin-bottom: 14px;
        }

        .hr-h2 {
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700;
          color: ${C.navy};
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .hr-copy {
          font-size: 16px;
          line-height: 1.8;
          color: ${C.muted};
        }

        /* ---- HERO ---- */
        .hr-hero {
          position: relative;
          min-height: 92vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 110px;
          background-image: url(${img1});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .hr-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(11,42,59,0.95) 0%, rgba(1,86,112,0.88) 50%, rgba(11,42,59,0.8) 100%);
          z-index: 1;
        }
        .hr-hero-content {
          position: relative;
          z-index: 2;
          color: ${C.white};
          padding: 40px 0;
          animation: hrFadeUp 0.9s ease-out both;
        }
        .hr-hero-badge {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.08);
          border-radius: 50px;
          padding: 7px 18px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hr-hero h1 {
          font-size: clamp(38px, 5.2vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 20px;
        }
        .hr-hero h3 {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 400;
          opacity: 0.88;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hr-hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 56px; }
        .hr-btn-primary {
          background: ${C.accent};
          color: ${C.navy};
          font-weight: 700;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 10px 24px rgba(14,165,160,0.35);
        }
        .hr-btn-primary:hover { transform: translateY(-2px); color: ${C.navy}; }
        .hr-btn-ghost {
          border: 1px solid rgba(255,255,255,0.5);
          color: ${C.white};
          font-weight: 600;
          padding: 15px 30px;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s ease;
        }
        .hr-btn-ghost:hover { background: rgba(255,255,255,0.1); color: ${C.white}; }

        .hr-hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 28px;
          max-width: 640px;
        }
        .hr-stat-num { font-size: 30px; font-weight: 800; }
        .hr-stat-label { font-size: 13px; opacity: 0.75; }

        @keyframes hrFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- Program overview image (reduced height) ---- */
        .hr-overview-frame {
          border-radius: 18px;
          overflow: hidden;
          max-height: 340px;
          box-shadow: 0 16px 32px rgba(11,42,59,0.12);
        }
        .hr-overview-frame img {
          width: 100%;
          height: 100%;
          max-height: 340px;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 992px) {
          .hr-overview-frame, .hr-overview-frame img { max-height: 260px; }
        }

        /* ---- Highlight cards (premium corporate) ---- */
        .hr-highlight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 44px;
        }
        @media (max-width: 992px) { .hr-highlight-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 576px) { .hr-highlight-grid { grid-template-columns: 1fr; } }
        .hr-highlight-card {
          position: relative;
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 18px;
          padding: 30px 26px 34px;
          box-shadow: 0 4px 14px rgba(11,42,59,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .hr-highlight-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(11,42,59,0.1);
          border-color: ${C.accent};
        }
        .hr-highlight-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .hr-highlight-number {
          font-size: 14px;
          font-weight: 700;
          color: ${C.border};
          letter-spacing: 0.05em;
        }
        .hr-highlight-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: ${C.bg};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${C.accent};
        }
        .hr-highlight-card h4 {
          font-size: 16.5px;
          font-weight: 700;
          color: ${C.navy};
          margin-bottom: 8px;
        }
        .hr-highlight-card p {
          font-size: 14.5px;
          line-height: 1.6;
          color: ${C.muted};
          margin: 0;
        }
        .hr-highlight-arrow {
          position: absolute;
          bottom: 24px;
          right: 24px;
          color: ${C.accent};
          display: flex;
        }

        /* ---- Domains offered (premium corporate cards) ---- */
        .hr-domain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 32px;
        }
        @media (max-width: 992px) { .hr-domain-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 576px) { .hr-domain-grid { grid-template-columns: 1fr; } }
        .hr-domain-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 4px 14px rgba(11,42,59,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .hr-domain-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(11,42,59,0.1);
          border-color: ${C.accent};
        }
        .hr-domain-number {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: ${C.accent};
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }
        .hr-domain-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: ${C.navy};
          margin-bottom: 8px;
        }
        .hr-domain-card p {
          font-size: 14px;
          color: ${C.muted};
          margin-bottom: 18px;
        }
        .hr-domain-explore {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: ${C.navy};
        }

        /* ---- Benefits ---- */
        .hr-benefit-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }
        .hr-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15.5px;
          color: ${C.text};
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 12px;
          padding: 16px 18px;
        }
        .hr-benefit-check {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border-radius: 50%;
          background: ${C.accent};
          color: ${C.white};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
        }

        .hr-mockup-frame {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 32px rgba(11,42,59,0.14);
        }
        .hr-mockup-frame img {
          width: 100%;
          min-height: 420px;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 992px) {
          .hr-mockup-frame img { min-height: 300px; }
        }

        /* ---- Success stories ---- */
        .hr-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 40px;
        }
        @media (max-width: 768px) { .hr-story-grid { grid-template-columns: 1fr; } }
        .hr-story-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 10px 26px rgba(11,42,59,0.06);
        }
        .hr-story-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .hr-story-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${C.navy};
          color: ${C.white};
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .hr-story-badge {
          background: ${C.bg};
          border: 1px solid ${C.border};
          color: ${C.navy};
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 50px;
        }
        .hr-story-quote {
          font-size: 15.5px;
          line-height: 1.7;
          color: ${C.text};
          margin-bottom: 16px;
        }
        .hr-story-name { font-weight: 700; color: ${C.navy}; font-size: 15px; }
        .hr-story-role { font-size: 13.5px; color: ${C.muted}; }

        /* ---- Final CTA ---- */
        .hr-final-cta {
          background: linear-gradient(135deg, ${C.navy} 0%, ${C.teal} 100%);
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
          color: ${C.white};
        }
        .hr-final-cta h2 { color: ${C.white}; }
        .hr-final-cta p { color: rgba(255,255,255,0.8); }

        /* ---- Inquiry form ---- */
        .hr-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .hr-form-grid { grid-template-columns: 1fr; }
        }
        .hr-form-desc {
          font-size: 16px;
          line-height: 1.8;
          color: ${C.muted};
          max-width: 440px;
        }
        .hr-form-card {
          background: ${C.white};
          border-radius: 20px;
          padding: 44px 40px;
          box-shadow: 0 16px 40px rgba(11,42,59,0.08);
        }
        @media (max-width: 576px) {
          .hr-form-card { padding: 32px 24px; }
        }
        .hr-form-card-title {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          color: ${C.navy};
          margin-bottom: 28px;
        }
        .hr-form-field { margin-bottom: 20px; }
        .hr-form-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: ${C.text};
          margin-bottom: 8px;
        }
        .hr-form-input,
        .hr-form-select,
        .hr-form-textarea {
          width: 100%;
          border: 1px solid ${C.border};
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14.5px;
          color: ${C.text};
          background: ${C.white};
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hr-form-input:focus,
        .hr-form-select:focus,
        .hr-form-textarea:focus {
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(14,165,160,0.12);
        }
        .hr-form-textarea {
          resize: vertical;
          min-height: 110px;
        }
        .hr-form-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235B6B76' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }
        .hr-form-submit {
          width: 100%;
          border: none;
          border-radius: 10px;
          padding: 15px;
          font-size: 15px;
          font-weight: 700;
          color: ${C.white};
          background: linear-gradient(135deg, ${C.navy} 0%, ${C.teal} 100%);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hr-form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(11,42,59,0.2);
        }
        .hr-form-success {
          text-align: center;
          color: ${C.accent};
          font-weight: 600;
          font-size: 15px;
          margin-top: 16px;
        }
      `}</style>

      <div className="hr-root">
        {/* ================= HERO ================= */}
        <section className="hr-hero">
          <div className="hr-hero-overlay" />
          <div className="container hr-hero-content">
            <div className="hr-hero-badge">HRIFY Internship Program</div>
            <h1>Internship</h1>
            <h3>Real-world experience, future-ready skills.</h3>
            <div className="hr-hero-ctas">
              <a href="#apply" className="hr-btn-primary">
                Apply Now →
              </a>
              <a href="#program" className="hr-btn-ghost">
                Explore Program
              </a>
            </div>
            <div className="hr-hero-stats">
              <div>
                <div className="hr-stat-num">6+</div>
                <div className="hr-stat-label">Domains Offered</div>
              </div>
              <div>
                <div className="hr-stat-num">100%</div>
                <div className="hr-stat-label">Hands-on Projects</div>
              </div>
              <div>
                <div className="hr-stat-num">1:1</div>
                <div className="hr-stat-label">Mentorship</div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: C.bg }}>
          {/* ================= PROGRAM OVERVIEW ================= */}
          <section className="hr-section" id="program">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-7">
                  <Eyebrow>HRIFY Internship Program</Eyebrow>
                  <h2 className="hr-h2">
                    Unlock real potential with real-world experience.
                  </h2>
                  <p className="hr-copy">
                    At HRIFY, our internship program is designed to unlock
                    the true potential of students and young professionals
                    through a structured, hands-on training experience. It's
                    a gateway to understanding industry practices while
                    enhancing individual capabilities — we nurture talent,
                    spark innovation, and help interns discover their
                    strengths.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="hr-overview-frame">
                    <img src={img2} alt="HRIFY Internship Program" />
                  </div>
                </div>
              </div>

              {/* Program highlights as premium corporate cards */}
              <div className="hr-highlight-grid">
                <HighlightCard
                  number="01"
                  icon={<Briefcase size={20} />}
                  title="Live Projects"
                  desc="Work on real-time projects in tech, design, marketing or operations."
                />
                <HighlightCard
                  number="02"
                  icon={<Users size={20} />}
                  title="Mentorship"
                  desc="One-on-one sessions with experienced professionals to refine your skills."
                />
                <HighlightCard
                  number="03"
                  icon={<TrendingUp size={20} />}
                  title="Performance Reviews"
                  desc="Weekly feedback and assessments to track improvement and readiness."
                />
                <HighlightCard
                  number="04"
                  icon={<Award size={20} />}
                  title="Certifications"
                  desc="Recognized certification of completion with individual performance insights."
                />
              </div>
            </div>
          </section>

          {/* ================= DOMAINS OFFERED ================= */}
          <section className="hr-section" style={{ background: C.white, paddingTop: 0 }}>
            <div className="container">
              <Eyebrow>Domains Offered</Eyebrow>
              <h2 className="hr-h2">Choose the track that fits your goals.</h2>
              <div className="hr-domain-grid">
                <DomainCard
                  number="01"
                  title="Frontend Development"
                  subtitle="React • JavaScript • HTML/CSS • Bootstrap"
                />
                <DomainCard
                  number="02"
                  title="Backend Development"
                  subtitle="Node.js • Express • MongoDB"
                />
                <DomainCard
                  number="03"
                  title="UI/UX Design"
                  subtitle="Figma • Adobe XD"
                />
                <DomainCard
                  number="04"
                  title="Data Analytics"
                  subtitle="Python • Power BI • Excel"
                />
                <DomainCard
                  number="05"
                  title="Digital Marketing"
                  subtitle="SEO • Google Ads • Social Strategy"
                />
                <DomainCard
                  number="06"
                  title="HR & Talent Acquisition"
                  subtitle="Recruitment Tools • HR Analytics"
                />
              </div>
            </div>
          </section>

          {/* ================= KEY BENEFITS ================= */}
          <section className="hr-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6 order-lg-1 order-2">
                  <Eyebrow>Key Benefits</Eyebrow>
                  <h2 className="hr-h2">Built around your career growth.</h2>
                  <div className="hr-benefit-list">
                    <BenefitItem>Work-from-home flexibility with structured timelines</BenefitItem>
                    <BenefitItem>Capstone projects you can add to your resume or GitHub</BenefitItem>
                    <BenefitItem>Performance-based benefits for top-performing interns</BenefitItem>
                    <BenefitItem>Chance to receive a PPO from HRIFY or partner companies</BenefitItem>
                    <BenefitItem>Access to career-building webinars and expert-led workshops</BenefitItem>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1">
                  <div className="hr-mockup-frame">
                    <img src={img3} alt="Key Benefits" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SUCCESS STORIES ================= */}
          <section className="hr-section" style={{ background: C.white }}>
            <div className="container">
              <div className="text-center" style={{ maxWidth: 640, margin: "0 auto" }}>
                <Eyebrow>Success Stories</Eyebrow>
                <h2 className="hr-h2">From internship to industry impact.</h2>
                <p className="hr-copy">
                  Many of our interns have transitioned into full-time roles
                  at HRIFY or leading startups and MNCs. Their journeys
                  started at HRIFY, and yours can too.
                </p>
              </div>
              <div className="hr-story-grid">
                <StoryCard
                  initials="PK"
                  name="Priya Kumar"
                  role="Data Analytics Intern"
                  badge="Global Analytics Firm"
                  quote="The internship gave me the real-world data exposure that no classroom could — I now work with a global analytics firm."
                />
                <StoryCard
                  initials="AM"
                  name="Arjun Menon"
                  role="Frontend Intern"
                  badge="Ed-tech Startup"
                  quote="Building a React portfolio during my internship is exactly what got me hired at an ed-tech startup."
                />
              </div>
            </div>
          </section>

          {/* ================= FINAL CTA + FORM ================= */}
          <section className="hr-section" id="apply">
            <div className="container">
              <div className="hr-final-cta">
                <h2 className="hr-h2">Let's bring your vision to life.</h2>
                <p>
                  Your journey toward innovation and success starts here.
                  Connect with us to explore how we can collaborate to
                  achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* ================= INQUIRY FORM ================= */}
          <section className="hr-section" id="inquiry-form">
            <div className="container">
              <div className="hr-form-grid">
                <div>
                  <Eyebrow>Let's Talk</Eyebrow>
                  <h2 className="hr-h2">
                    Ready to start your internship journey?
                  </h2>
                  <p className="hr-form-desc">
                    Tell us a bit about yourself and the domain you're
                    interested in — our team will get back to you shortly
                    with the next steps.
                  </p>
                </div>

                <div className="hr-form-card">
                  <h3 className="hr-form-card-title">Submit Your Inquiry</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="hr-form-field">
                      <label className="hr-form-label" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="hr-form-input"
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="hr-form-field">
                      <label className="hr-form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="hr-form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="hr-form-field">
                      <label className="hr-form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="hr-form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="hr-form-field">
                      <label className="hr-form-label" htmlFor="domain">
                        Domain Interested
                      </label>
                      <select
                        className="hr-form-select"
                        id="domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select a domain
                        </option>
                        {DOMAIN_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="hr-form-field">
                      <label className="hr-form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="hr-form-textarea"
                        id="message"
                        name="message"
                        placeholder="Tell us more about your goals"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="hr-form-submit">
                      Submit
                    </button>

                    {submitted && (
                      <div className="hr-form-success">
                        Thanks! We've received your inquiry.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Internship;