import img1 from "../assets/Referal/img1.png";

// ---- Same brand tokens as the Internship page, for consistency ----
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

function Eyebrow({ children }) {
  return <div className="rf-eyebrow">{children}</div>;
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="rf-info-card">
      <div className="rf-info-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}

function FormSection({ title, required, children }) {
  return (
    <div className="rf-form-section">
      <div className="rf-form-section-title">
        {title}
        {required ? <span className="rf-required">*</span> : null}
      </div>
      <div className="row mt-3">{children}</div>
    </div>
  );
}

function Field({ label, type = "text", col = "col-md-6" }) {
  return (
    <div className={`${col} mb-3`}>
      <label className="rf-label">{label}</label>
      <input type={type} className="form-control rf-input" />
    </div>
  );
}

function Referal() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .rf-root {
          font-family: 'Poppins', sans-serif;
          color: ${C.text};
        }
        .rf-root * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .rf-section { padding: 90px 0; }
        @media (max-width: 768px) { .rf-section { padding: 56px 0; } }

        .rf-eyebrow {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          margin-bottom: 14px;
        }

        .rf-h2 {
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700;
          color: ${C.navy};
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .rf-copy {
          font-size: 16px;
          line-height: 1.8;
          color: ${C.muted};
        }

        /* ---- HERO (image background — proven pattern, no video risk) ---- */
        .rf-hero {
          position: relative;
          min-height: 92vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-image: url(${img1});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .rf-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, rgba(11,42,59,0.92) 10%, rgba(11,42,59,0.55) 55%, rgba(11,42,59,0.25) 100%);
          z-index: 1;
        }
        .rf-hero-content {
          position: relative;
          z-index: 2;
          color: ${C.white};
          padding: 40px 0;
          animation: rfFadeUp 0.9s ease-out both;
        }
        .rf-hero-badge {
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
        .rf-hero h1 {
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .rf-hero h3 {
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 400;
          opacity: 0.88;
          max-width: 560px;
          margin-bottom: 36px;
        }
        .rf-btn-primary {
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
        .rf-btn-primary:hover { transform: translateY(-2px); color: ${C.navy}; }

        @keyframes rfFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ---- Info cards ---- */
        .rf-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 44px;
        }
        @media (max-width: 992px) { .rf-info-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 576px) { .rf-info-grid { grid-template-columns: 1fr; } }
        .rf-info-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 28px 24px;
          box-shadow: 0 8px 24px rgba(11,42,59,0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .rf-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(11,42,59,0.1);
        }
        .rf-info-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: ${C.bg};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
        }
        .rf-info-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: ${C.navy};
          margin-bottom: 8px;
        }
        .rf-info-card p {
          font-size: 14.5px;
          line-height: 1.65;
          color: ${C.muted};
          margin: 0;
        }

        /* ---- Policy panel ---- */
        .rf-policy-panel {
          background: ${C.navy};
          border-radius: 20px;
          padding: 48px 44px;
          color: ${C.white};
        }
        .rf-policy-panel h2 { color: ${C.white}; }
        .rf-policy-panel p { color: rgba(255,255,255,0.82); line-height: 1.8; }
        .rf-policy-note {
          margin-top: 24px;
          border-left: 3px solid ${C.accent};
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 16px 20px;
          font-size: 14.5px;
          color: rgba(255,255,255,0.85);
        }

        /* ---- Framed banner (plain rectangular image) ---- */
        .rf-banner-frame {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(11,42,59,0.1);
        }
        .rf-banner-frame img { width: 100%; display: block; }

        /* ---- Final CTA ---- */
        .rf-final-cta {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
        }

        /* ---- Referral form card ---- */
        .rf-form-card {
          max-width: 900px;
          margin: 0 auto;
          background: ${C.white};
          border-radius: 18px;
          border: 1px solid ${C.border};
          box-shadow: 0 16px 40px rgba(11,42,59,0.08);
          padding: 40px;
        }
        @media (max-width: 576px) { .rf-form-card { padding: 26px; } }
        .rf-form-section + .rf-form-section { margin-top: 36px; }
        .rf-form-section-title {
          display: inline-block;
          background: ${C.bg};
          border: 1px solid ${C.border};
          color: ${C.navy};
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
        }
        .rf-required { color: ${C.accent}; margin-left: 4px; }
        .rf-label {
          font-size: 13.5px;
          font-weight: 600;
          color: ${C.navy};
          margin-bottom: 6px;
          display: block;
        }
        .rf-input {
          border: 1px solid ${C.border};
          border-radius: 8px;
          box-shadow: none;
          padding: 10px 14px;
        }
        .rf-input:focus {
          border-color: ${C.accent};
          box-shadow: 0 0 0 3px rgba(14,165,160,0.15);
        }
        .rf-confirm {
          margin-top: 28px;
          font-size: 14px;
          color: ${C.muted};
        }
        .rf-submit-wrap { text-align: center; margin-top: 28px; }
        .rf-submit-btn {
          background: ${C.accent};
          color: ${C.white};
          border: none;
          padding: 13px 46px;
          border-radius: 50px;
          font-weight: 700;
          box-shadow: 0 10px 24px rgba(14,165,160,0.3);
          transition: transform 0.2s ease;
        }
        .rf-submit-btn:hover { transform: translateY(-2px); }
        .rf-footnote {
          text-align: center;
          margin-top: 18px;
          font-size: 12.5px;
          color: ${C.muted};
        }
      `}</style>

      <div className="rf-root">
        {/* ================= HERO ================= */}
        <section className="rf-hero">
          <div className="rf-hero-overlay" />
          <div className="container rf-hero-content">
            <div className="rf-hero-badge">HRIFY Referral Program</div>
            <h1>Referral Program</h1>
            <h3>Recommend talent, reward success together.</h3>
            <a href="#referral-form" className="rf-btn-primary">
              Refer a Candidate →
            </a>
          </div>
        </section>

        <div style={{ background: C.bg }}>
          {/* ================= INTRO ================= */}
          <section className="rf-section" style={{ paddingBottom: 0 }}>
            <div className="container text-center" style={{ maxWidth: 720, margin: "0 auto" }}>
              <Eyebrow>Spot Great Talent?</Eyebrow>
              <h2 className="rf-h2">Refer them to HRIFY.</h2>
              <p className="rf-copy">
                We're always looking for talented individuals to join our
                dynamic team. If you know someone who would thrive in our
                innovative environment and align with our vision, refer them
                to us — let's create incredible opportunities together.
              </p>
            </div>
          </section>

          {/* ================= PROGRAM DETAILS AS CARDS ================= */}
          <section className="rf-section">
            <div className="container">
              <Eyebrow>Candidate Referral Program</Eyebrow>
              <h2 className="rf-h2">
                Help us find exceptional talent — and get rewarded for it.
              </h2>
              <p className="rf-copy">
                Introduce us to exceptional talent — a friend, former
                colleague, or family member with the right skills. We're
                always looking for skilled professionals across IT and
                non-IT roles, and every referral helps build a stronger,
                more dynamic team at HRIFY.
              </p>

              <div className="rf-info-grid">
                <InfoCard icon="💻" title="Specialized IT Talent">
                  We're expanding our network of IT professionals skilled in
                  React, Angular, Python, Java, AWS, DevOps and more — across
                  development, networking, cybersecurity and cloud.
                </InfoCard>
                <InfoCard icon="🎁" title="Referral Bonus">
                  Earn a one-time bonus when your referral is hired by HRIFY
                  or its clients — our way of thanking you for connecting us
                  with great candidates.
                </InfoCard>
                <InfoCard icon="✅" title="Eligibility">
                  The candidate shouldn't have been in contact with an HRIFY
                  recruiter in the past 3 months, keeping every referral
                  genuinely yours.
                </InfoCard>
                <InfoCard icon="📅" title="Employment Duration">
                  The referred candidate must complete 90 days of active
                  employment before the bonus is awarded, ensuring a fair
                  evaluation period.
                </InfoCard>
              </div>
            </div>
          </section>

          {/* ================= POLICY PANEL ================= */}
          <section className="rf-section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="rf-policy-panel">
                <Eyebrow>Policy Updates</Eyebrow>
                <h2 className="rf-h2">Referral Bonus Policy</h2>
                <p>
                  HRIFY values your referrals. You'll earn a referral bonus
                  once the candidate you refer is hired and successfully
                  completes 90 days of active employment — payouts are
                  processed promptly, keeping the process transparent and
                  trustworthy.
                </p>
                <div className="rf-policy-note">
                  <strong>Note:</strong> The referral bonus currently applies
                  only to candidates and referrers within the North America
                  region. We still encourage you to refer talented
                  professionals from any location — we're always eager to
                  connect with exceptional individuals.
                </div>
                <p style={{ marginTop: 20 }}>
                  Questions about the referral process? Reach out to our HR
                  team — we're here to make your experience seamless and
                  rewarding.
                </p>
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="rf-section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className="rf-final-cta">
                <Eyebrow>Get Started</Eyebrow>
                <h2 className="rf-h2">Let's bring your vision to life.</h2>
                <p className="rf-copy">
                  Your journey toward innovation and success starts here.
                  Connect with us to explore how we can collaborate to
                  achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* ================= REFERRAL FORM ================= */}
          <section className="rf-section" style={{ paddingTop: 0 }} id="referral-form">
            <div className="container">
              <div className="rf-form-card">
                <FormSection title="Your Details" required>
                  <Field label="Full Name" />
                  <Field label="Email Address" type="email" />
                  <Field label="Phone Number" />
                </FormSection>

                <FormSection title="Candidate Details">
                  <Field label="Full Name" />
                  <Field label="Email Address" type="email" />
                  <Field label="Phone Number" />
                  <Field label="Current Job Title" />
                  <Field label="Relevant Skills / Expertise" />
                  <div className="col-md-6 mb-3">
                    <label className="rf-label">Preferred Role / Department</label>
                    <select className="form-select rf-input">
                      <option></option>
                      <option>IT</option>
                      <option>Non-IT</option>
                      <option>HR</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <Field label="How do you know this candidate?" />
                  <Field label="Any comments or notes about the candidate" />
                  <Field label="Upload Resume" type="file" />
                </FormSection>

                <div className="form-check rf-confirm">
                  <input className="form-check-input" type="checkbox" id="confirm" />
                  <label className="form-check-label" htmlFor="confirm">
                    I confirm that the information provided is accurate and
                    that I have obtained the candidate's consent to share
                    their details with HRIFY.
                  </label>
                </div>

                <div className="rf-submit-wrap">
                  <button className="rf-submit-btn">Submit</button>
                </div>

                <p className="rf-footnote">
                  Thank you for your referral! We will review the
                  candidate's details and get in touch if there's a suitable
                  opportunity. Stay tuned for updates!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Referal;