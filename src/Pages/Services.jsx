import "bootstrap/dist/css/bootstrap.min.css";

import HrifyLogo from "../assets/Navbar/logo.png";

import video1 from "../assets/Services/hero-video.mp4";
import img1 from "../assets/Services/img1.png";
import img2 from "../assets/Services/img2.png";
import img3 from "../assets/Services/img3.png";
import img4 from "../assets/Services/img4.png";
import img5 from "../assets/Services/img5.png";
import img11 from "../assets/Services/img11.png";
import img12 from "../assets/Services/img12.png";
import img13 from "../assets/Services/img13.png";
import img14 from "../assets/Services/img14.png";
import img15 from "../assets/Services/img15.png";
import img16 from "../assets/Services/img16.png";
import img17 from "../assets/Services/img17.png";
import img18 from "../assets/Services/img18.png";
import img19 from "../assets/Services/img19.png";
import img20 from "../assets/Services/img20.png";
import img21 from "../assets/Services/img21.png";
import img22 from "../assets/Services/img22.png";
import bgimg1 from "../assets/Services/bgimg1.png";
import React, { useEffect, useState } from "react";
import Form from "../Components/Form";

/* ================= DATA ================= */
// One entry per HRIFY service. Swap image/text here — the layout below
// just maps over this list, alternating the image side like VDart does.
const EXPERTISE = [
  {
    img: img11,
    title: "Software Development",
    desc: "Our software development services turn your ideas into scalable, efficient solutions tailored to your business needs.",
    link: "/services/software-development",
  },
  {
    img: img12,
    title: "Web Development",
    desc: "We offer cutting-edge web development services to enhance your digital presence.",
    link: "/services/web-development",
  },
  {
    img: img13,
    title: "App Development",
    desc: "We deliver innovative app solutions to elevate your digital presence.",
    link: "/services/app-development",
  },
  {
    img: img14,
    title: "System Integration",
    desc: "We unify your business systems for seamless connectivity and secure IT operations.",
    link: "/services/system-integration",
  },
  {
    img: img15,
    title: "Networking Solutions",
    desc: "Robust networking solutions including infrastructure, security, and cloud connectivity.",
    link: "/services/networking-solutions",
  },
  {
    img: img16,
    title: "Cyber Security",
    desc: "Comprehensive security solutions to protect systems, data, and digital assets.",
    link: "/services/cyber-security",
  },
  {
    img: img17,
    title: "Blockchain",
    desc: "Secure, transparent, and decentralized blockchain solutions for modern businesses.",
    link: "/services/blockchain",
  },
  {
    img: img18,
    title: "AI & ML",
    desc: "AI & ML powered solutions to automate processes and enable smarter decisions.",
    link: "/services/ai-ml",
  },
  {
    img: img19,
    title: "Manual Services",
    desc: "Reliable manual services to streamline business processes and operations.",
    link: "/services/manual-services",
  },
  {
    img: img20,
    title: "Enterprise Solutions",
    desc: "Technology-driven enterprise solutions to scale and transform businesses.",
    link: "/services/enterprise-solutions",
  },
  {
    img: img21,
    title: "Quality Engineering",
    desc: "Ensuring high performance, reliability, and superior user experience.",
    link: "/services/quality-engineering",
  },
];

// Industries HRIFY serves — swap copy/images for your real client verticals.
const INDUSTRIES = [
  {
    img: img4,
    title: "Technology & SaaS",
    desc: "Helping product teams ship faster with dependable engineering and QA support.",
  },
  {
    img: img5,
    title: "Enterprise & Finance",
    desc: "Secure, compliant systems and integrations for large-scale operations.",
  },
  {
    img: bgimg1,
    title: "Startups & Growth Teams",
    desc: "Lean, scalable builds that let founders move from idea to launch quickly.",
  },
];

const fadeUpStyle = {
  animation: "fadeUp 1.2s ease-out forwards",
  opacity: 0,
};

const arrowStyle = {
  fontSize: "50px",
  display: "inline-block",
  animation: "arrowMove 1.5s ease-in-out infinite",
};

function Services() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="container-fluid p-0">
        <div
          className="d-flex align-items-center"
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
            <source src={video1} type="video/mp4" />
          </video>

          {/* Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.15))",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 2,
              color: "#fff",
              paddingTop: "120px",
              paddingBottom: "60px",
              paddingLeft: "30px",
              ...fadeUpStyle,
            }}
          >
            <h1 style={{ fontSize: "75px", fontWeight: "700" }}>Services</h1>
            <h3 style={{ fontSize: "32px", fontWeight: "400" }}>
              Smart IT Solutions. Limitless Potential.
            </h3>
            <p style={arrowStyle}>→</p>
          </div>

          <style>
            {`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes arrowMove {
                0% { transform: translateX(0); }
                50% { transform: translateX(20px); }
                100% { transform: translateX(0); }
              }
            `}
          </style>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff" }}>
        {/* ================= INTRO ================= */}
        <div
          className="container-fluid py-5 mt-0"
          style={{
            background: "linear-gradient(135deg, #CFF4FF 0%, #FFFFFF 100%)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-8 mb-4 mb-md-0">
                <h2
                  style={{
                    fontWeight: "700",
                    marginBottom: "20px",
                    color: "#015670",
                    fontSize: "24px",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Empowering Businesses with Cutting-Edge IT Solutions
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  HRIFY is a comprehensive management solutions platform
                  designed to enhance efficiency and drive growth. With two
                  specialized divisions, HRIFY seamlessly integrates
                  cutting-edge technology with expert talent management.
                  HRIFY Digital offers exceptional software, web, and app
                  development, advanced networking solutions, and expert IT
                  services and consulting to future-proof your business.
                </p>
              </div>

              <div className="col-12 col-md-4 text-center">
                <div
                  style={{
                    padding: "20px",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={img2}
                    alt="IT Solutions"
                    className="img-fluid"
                    style={{ borderRadius: "10px", mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WHAT WE DO ================= */}
        <div className="container text-center mt-5">
          <h1
            style={{
              color: "#015670",
              fontSize: "36px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <b>What We Do</b>
          </h1>
          <p
            style={{
              color: "#5a5a5a",
              maxWidth: "720px",
              margin: "16px auto 0",
              fontSize: "18px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Getting you ready for technological shifts — our teams analyze,
            architect, deliver, and support, so you can adapt and transform
            quickly, solve challenges, and capture the opportunities digital
            transformation is creating today.
          </p>
        </div>

        {/* ================= EXPERTISE LIST (VDart-style alternating rows) ================= */}
        <div
          className="container"
          style={{
            marginTop: "60px",
            opacity: showContent ? 1 : 0,
            transform: showContent ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s ease",
          }}
        >
          {EXPERTISE.map((item, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={item.title}
                className="row align-items-center mb-5 pb-4"
                style={{ borderBottom: "1px solid #eef2f4" }}
              >
                <div
                  className={`col-12 col-md-5 mb-4 mb-md-0 ${
                    imageFirst ? "order-md-1" : "order-md-2"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div
                  className={`col-12 col-md-7 ${
                    imageFirst ? "order-md-2" : "order-md-1"
                  }`}
                  style={{ paddingLeft: "clamp(0px, 4vw, 48px)", paddingRight: "clamp(0px, 4vw, 48px)" }}
                >
                  <h3 style={{ color: "#0b5c75", fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "17px", color: "#3d3d3d", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    style={{
                      fontSize: "26px",
                      color: "#0b5c75",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                    aria-label={`Learn more about ${item.title}`}
                  >
                    →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="container-fluid py-2">
          <div
            className="container p-5 mb-0"
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}
          >
            <div className="text-center mb-5">
              <h2 style={{ fontWeight: "700", color: "#015670" }}>
                Why Choose Us?
              </h2>
              <p style={{ color: "#000", maxWidth: "600px", margin: "0 auto" }}>
                We combine innovation, security, and support to deliver
                exceptional digital solutions.
              </p>
            </div>

            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="mb-4">
                  <h5 style={{ color: "#015670", fontWeight: "600" }}>
                    Agile Development Process
                  </h5>
                  <p style={{ color: "#000" }}>
                    We deliver results faster by breaking projects into
                    manageable phases.
                  </p>
                </div>
                <div>
                  <h5 style={{ color: "#015670", fontWeight: "600" }}>
                    Secure and Scalable Solutions
                  </h5>
                  <p style={{ color: "#000" }}>
                    Built with robust security protocols and scalable
                    architecture.
                  </p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 30px rgba(13, 149, 253, 0.4)",
                  }}
                >
                  <img
                    src={HrifyLogo}
                    alt="Logo"
                    style={{ width: "90px", height: "90px", objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-4">
                  <h5 style={{ color: "#015670", fontWeight: "600" }}>
                    End-to-End Support
                  </h5>
                  <p style={{ color: "#000" }}>
                    From consultation to deployment, we provide continuous
                    assistance.
                  </p>
                </div>
                <div>
                  <h5 style={{ color: "#015670", fontWeight: "600" }}>
                    Latest Technologies
                  </h5>
                  <p style={{ color: "#000" }}>
                    We use cutting-edge tools to keep your business ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div className="container mt-5 pt-4 text-center">
          <h2
            style={{
              color: "#015670",
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Cross-Industry Innovation
          </h2>
          <p
            style={{
              color: "#5a5a5a",
              maxWidth: "700px",
              margin: "12px auto 40px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            We work across industries, offering specialist expertise to solve
            specific needs and sharing ideas across teams to deliver
            out-of-the-box solutions.
          </p>

          <div className="row g-4">
            {INDUSTRIES.map((ind) => (
              <div className="col-12 col-md-4" key={ind.title}>
                <div
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    height: "100%",
                  }}
                >
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="img-fluid"
                    style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  />
                  <div className="p-4 text-start">
                    <h5 style={{ color: "#0b5c75", fontWeight: 700 }}>
                      {ind.title}
                    </h5>
                    <p style={{ color: "#3d3d3d", marginBottom: 0 }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SOLUTIONS WE PROVIDE ================= */}
        <div className="container mb-5 mt-5">
          <div className="d-flex justify-content-center align-items-start">
            <div
              className="container-fluid"
              style={{
                position: "relative",
                marginTop: "40px",
                backgroundColor: "rgba(10, 157, 231, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                padding: "2.5rem",
              }}
            >
              <div
                className="container p-4"
                style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}
              >
                <div className="row align-items-center">
                  <div className="col-md-5 text-center mb-4 mb-md-0">
                    <img
                      src={img22}
                      alt="Solution"
                      className="img-fluid"
                      style={{
                        borderRadius: "12px",
                        maxHeight: "320px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="col-md-1 d-flex justify-content-center">
                    <div
                      style={{
                        width: "4px",
                        height: "220px",
                        backgroundColor: "#015670",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <h2 style={{ color: "#015670", fontWeight: "700" }}>
                      Solutions We Provide
                    </h2>
                    <p
                      style={{
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "#000",
                        lineHeight: "1.7",
                      }}
                    >
                      <b>
                        We offer comprehensive solutions tailored to meet your
                        unique business needs. From IT infrastructure and
                        cloud services to digital marketing and staffing
                        solutions, our expert team ensures seamless execution
                        and measurable results. With a client-first approach,
                        we focus on quality, reliability, and innovation to
                        help you grow faster and smarter.
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LET'S TALK / FORM ================= */}
        {/* mirrors VDart's "Let's Talk / Ready to embrace the future?" layout:
            eyebrow + heading on the left, form fields on the right, on a
            light grey corporate background. Kept in this page's own
            Outfit font + #015670 teal so it stays consistent with the
            rest of Services.jsx. */}
        <div id="form" style={{ background: "#f4f7f8", marginTop: "40px" }}>
          <div className="container py-5">
            <div className="row g-5 py-4">
              <div className="col-lg-5 col-md-12">
                <p
                  style={{
                    color: "#0b9de7",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginBottom: "14px",
                  }}
                >
                  Let's Talk
                </p>
                <h2
                  style={{
                    color: "#015670",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(32px, 4vw, 46px)",
                    lineHeight: 1.2,
                    marginBottom: "20px",
                  }}
                >
                  Ready to Start Your Project?
                </h2>
                <p
                  style={{
                    color: "#3d3d3d",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "16.5px",
                    lineHeight: 1.75,
                    maxWidth: "420px",
                    marginBottom: 0,
                  }}
                >
                  We're here to help you transform your ideas into reality.
                  Reach out to discuss how we can work together.
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

export default Services;