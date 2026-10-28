import heroVideo from "../assets/Talent_management/hero-video.mp4";
import Form from "../Components/Form";
import img1 from "../assets/Talent_management/img1.png";
import img2 from "../assets/Talent_management/img2.jpeg";
import img3 from "../assets/Talent_management/img3.jpeg";
import img5 from "../assets/Talent_management/img5.png";
import logo1 from "../assets/Services/logo1.png";
import logo2 from "../assets/Services/logo2.png";
import logo3 from "../assets/Services/logo3.png";
import logo4 from "../assets/Services/logo4.png";
import logo5 from "../assets/Services/logo5.png";
import logo6 from "../assets/Services/logo6.png";

/* ================= DATA ================= */
const SOLUTIONS = [
  {
    title: "Contract Staffing and Placement",
    desc: "Contract Staffing and Placement connects businesses in the IT sector with skilled professionals to meet their specific project and operational needs. Our tailored services ensure the right tech talent is matched with the right opportunities, enabling organizations to build a dynamic and effective workforce. Our recruiters have made screening and hiring for short-term contracts easier for our clients, helping them meet short-term staffing requirements and seasonal changes without losing momentum.",
  },
  {
    title: "Contract to Hire",
    desc: "Contract to Hire lets you bring on additional talent for a defined period with the option to convert them to full-time employment. It's built for roles that need to be filled immediately but with an eye on long-term growth, giving both you and the candidate a real trial period before committing — so you know it's the right fit before making it permanent.",
  },
  {
    title: "Permanent Staffing",
    desc: "Our permanent staffing solutions for the IT sector focus on sourcing top-tier talent that aligns seamlessly with your organization's culture, technical requirements, and long-term objectives. We take the time to study your business requirements, industry skill sets, and workforce market so every candidate we place is a strategic, lasting fit — saving you time and cost on rehiring down the line.",
  },
  {
    title: "Supplier Rationalization",
    desc: "Backed by a proven track record of successful collaborations with industry leaders, our supplier rationalization services help manage tail spending, achieve cost efficiencies within existing contractor agreements, and reduce direct and indirect supplier layers. We specialize in customized contract negotiation, compliance, and governance — acting as a trusted intermediary between clients and providers to streamline vendor relationships for sustainable growth.",
  },
  {
    title: "Hire, Train & Deploy",
    desc: "Our HTD (Hire, Train & Deploy) solutions redefine talent acquisition, development, and deployment for the IT industry. Through customized training — accent-neutral communication, technical upskilling, and cultural alignment — we build a consistent pipeline of talent from entry-level to specialized roles. From background checks to payroll management, we handle the operational complexities so you get a hassle-free, ready-to-deploy workforce.",
  },
];

const SECTORS = [
  {
    img: img3,
    title: "Cloud & SaaS Talent",
    desc: "Specialists across cloud platforms and SaaS ecosystems who help organizations connect systems and customers for growth.",
  },
  {
    img: img1,
    title: "ERP (SAP & Oracle)",
    desc: "ERP specialists who help businesses extract insight from their systems and make faster, smarter operational decisions.",
  },
  {
    img: img5,
    title: "Business Intelligence & Infrastructure",
    desc: "Talent that keeps data accessible and infrastructure reliable, so teams can work smarter and stay ahead.",
  },
  {
    img: img2,
    title: "AI & Automation",
    desc: "Engineers and analysts who bring AI and automation expertise to modernize workflows and unlock efficiency.",
  },
];

const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const SECTION_PAD = { paddingTop: "96px", paddingBottom: "96px" };

const NAV_LINKS = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Talent Management Solutions", href: "#talent-solutions" },
  { label: "Digital Sectors", href: "#digital-sectors" },
];

function Talent_management() {
  return (
    <div className="hrify-talent-page">
      {/* Bulletproof text color/font — scoped + high-specificity so it
          reliably beats any global CSS (e.g. a global `p { color: ... }`
          rule) that was previously turning body copy blue-ish. */}
      <style>
        {`
          .hrify-talent-page .hrify-copy {
            color: #33424a !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .hrify-talent-page .hrify-heading {
            color: #101820 !important;
            font-family: 'Poppins', sans-serif !important;
          }
          .hrify-talent-page .wwd-heading {
            color: #101820 !important;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 500 !important;
          }
          .hrify-talent-page .wwd-copy {
            color: #2b2b2b !important;
            font-family: 'Poppins', sans-serif !important;
            font-weight: 400 !important;
          }
          .hrify-talent-page a {
            color: inherit;
          }
          .hrify-hero-cta:hover {
            transform: translateY(-2px);
            opacity: 0.92;
          }
          .hrify-hero-nav a:hover {
            border-bottom-color: rgba(255,255,255,0.95) !important;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
        <div
          className="d-flex align-items-end"
          style={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={img1}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15))",
              zIndex: 1,
            }}
          />

          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              paddingTop: "160px",
              paddingBottom: "72px",
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
              HRIFY / Talent Management
            </p>

            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(42px, 6vw, 75px)",
                fontWeight: 700,
                lineHeight: 1.08,
                marginBottom: "20px",
              }}
            >
              Talent Management
            </h1>

            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(18px, 2.4vw, 26px)",
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: "620px",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "40px",
              }}
            >
              Nurturing success with talent that grows beside you
            </h3>

            <a
              href="#form"
              className="hrify-hero-cta"
              style={{
                display: "inline-block",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#101820",
                background: "#fff",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                marginBottom: "56px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
              }}
            >
              Schedule a Call with Us →
            </a>

            <div
              className="d-flex flex-wrap hrify-hero-nav"
              style={{
                gap: "36px",
                borderTop: "1px solid rgba(255,255,255,0.25)",
                paddingTop: "28px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.5)",
                    paddingBottom: "4px",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }}>
        {/* ================= WHAT WE DO ================= */}
        <div id="what-we-do" style={{ background: "#f5f7f9" }}>
          <div className="container" style={SECTION_PAD}>
            <div className="row align-items-start g-5">
              <div className="col-lg-7 col-md-12">
                <p
                  style={{
                    color: "#8a8a8a",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    fontSize: "13px",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  What We Do
                </p>
                <h3
                  className="mb-4 wwd-heading"
                  style={{
                    fontSize: "clamp(28px, 3.6vw, 38px)",
                    lineHeight: 1.25,
                  }}
                >
                  Innovative Talent Strategies for Future-Ready Organizations
                </h3>

                <p
                  className="mb-3 wwd-copy"
                  style={{
                    fontSize: "16.5px",
                    lineHeight: 1.75,
                  }}
                >
                  HRIFY is a trusted talent management partner, sourcing, developing,
                  and retaining exceptional IT professionals through Contract
                  Staffing, Contract-to-Hire, Permanent Staffing, Supplier
                  Rationalization, and Hire, Train &amp; Deploy programs.
                </p>
                <p
                  className="wwd-copy"
                  style={{
                    fontSize: "16.5px",
                    lineHeight: 1.75,
                    marginBottom: 0,
                  }}
                >
                  We adapt to every organization's needs — startup or enterprise —
                  using data-driven insights to help you build agile, future-ready
                  teams with the right people, in the right roles, at the right time.
                </p>
              </div>

              <div className="col-lg-5 col-md-12">
                <img
                  src={img2}
                  alt="Talent Management"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3.1",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= TALENT MANAGEMENT SOLUTIONS ================= */}
        <div id="talent-solutions" className="container" style={SECTION_PAD}>
          <div className="mb-5" style={{ maxWidth: "720px" }}>
            <p
              className="hrify-copy"
              style={{
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              Talent Management Solutions
            </p>
            <h2
              className="mb-3 hrify-heading"
              style={{
                fontWeight: "700",
                fontSize: "clamp(30px, 4vw, 44px)",
              }}
            >
              Building enduring relationships.
            </h2>
            <p
              className="hrify-copy"
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                marginBottom: 0,
              }}
            >
              Transforming the industry requires the right skills for the proper role at
              the right time. We provide a range of solutions tailored to each client's
              needs to ensure they have the available resources per their convenience and
              requirements.
            </p>
          </div>

          <div>
            {SOLUTIONS.map((s, i) => (
              <div key={s.title}>
                <div className="row py-4">
                  <div className="col-md-4 col-12 mb-2 mb-md-0">
                    <h5
                      className="hrify-heading"
                      style={{
                        fontWeight: 700,
                        marginBottom: 0,
                      }}
                    >
                      {s.title}
                    </h5>
                  </div>
                  <div className="col-md-8 col-12">
                    <p
                      className="hrify-copy"
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.9,
                        marginBottom: 0,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
                {i < SOLUTIONS.length - 1 && (
                  <hr style={{ borderTop: "1px solid #dcdcdc", margin: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= DIGITAL SECTORS ================= */}
        <div id="digital-sectors" className="container" style={SECTION_PAD}>
          <div className="mb-5" style={{ maxWidth: "760px" }}>
            <p
              style={{
                color: "#8a8a8a",
                fontWeight: 600,
                letterSpacing: "1px",
                fontSize: "13px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Digital Sectors
            </p>
            <h3
              className="mb-3"
              style={{
                color: "#101820",
                fontWeight: "500",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(28px, 3.6vw, 38px)",
                lineHeight: 1.25,
              }}
            >
              Unique skills for unique solutions
            </h3>
            <p
              style={{
                fontSize: "16.5px",
                fontFamily: "'Poppins', sans-serif",
                color: "#2b2b2b",
                fontWeight: 400,
                lineHeight: 1.75,
                marginBottom: 0,
              }}
            >
              By sourcing and placing exceptional talent in a rapidly changing digital
              landscape, we help our clients solve complex challenges and transform their
              businesses.
            </p>
          </div>

          <div className="row" style={{ rowGap: "56px" }}>
            {SECTORS.map((sec) => (
              <div className="col-12 col-md-6" key={sec.title}>
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    objectFit: "cover",
                  }}
                />
                <h5
                  className="mt-4 mb-2"
                  style={{
                    color: "#101820",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {sec.title}
                </h5>
                <p
                  style={{
                    color: "#2b2b2b",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.75,
                    marginBottom: 0,
                    maxWidth: "520px",
                  }}
                >
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PARTNER LOGOS ================= */}
        <div className="container-fluid" style={{ ...SECTION_PAD, background: "#fafcfd" }}>
          <div className="container">
            <h2
              className="text-center mb-5 hrify-heading"
              style={{ fontWeight: "700" }}
            >
              Our Trusted Partners
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "56px",
              }}
            >
              <img src={logo1} alt="logo1" style={{ height: "64px", objectFit: "contain" }} />
              <img src={logo2} alt="logo2" style={{ height: "64px", objectFit: "contain" }} />
              <img src={logo3} alt="logo3" style={{ height: "64px", objectFit: "contain" }} />
              <img src={logo4} alt="logo4" style={{ height: "64px", objectFit: "contain" }} />
              <img src={logo5} alt="logo5" style={{ height: "64px", objectFit: "contain" }} />
              <img src={logo6} alt="logo6" style={{ height: "64px", objectFit: "contain" }} />
            </div>
          </div>
        </div>

        {/* ================= LET'S TALK / FORM ================= */}
        {/* mirrors VDart's "Let's Talk / Ready to embrace the future?" layout:
            eyebrow + heading on the left, form fields on the right, on a
            light grey corporate background */}
        <div id="form" style={{ background: "#f5f7f9" }}>
          <div className="container" style={SECTION_PAD}>
            <div className="row g-5">
              <div className="col-lg-5 col-md-12">
                <p
                  className="hrify-copy"
                  style={{
                    fontSize: "16px",
                    marginBottom: "14px",
                  }}
                >
                  Let's Talk
                </p>
                <h2
                  className="hrify-heading"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(32px, 4vw, 46px)",
                    lineHeight: 1.2,
                    marginBottom: "20px",
                  }}
                >
                  Ready to embrace the future?
                </h2>
                <p
                  className="hrify-copy"
                  style={{
                    fontSize: "16.5px",
                    lineHeight: 1.75,
                    maxWidth: "420px",
                    marginBottom: 0,
                  }}
                >
                  Tell us what you're looking for and our team will get back to
                  you shortly with the right talent solution.
                </p>
              </div>

              <div className="col-lg-7 col-md-12">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talent_management;