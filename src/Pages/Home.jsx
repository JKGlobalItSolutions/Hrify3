import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import img2 from "../assets/Home/img2.jpg";
import img3 from "../assets/Home/img3.jpg";
import img4 from "../assets/Home/img4.jpg";
import futureImg from "../assets/Talent_management/img2.jpeg";
import { Users, Wallet, ClipboardCheck, Target, Settings, Laptop } from "lucide-react";
import HeroSection from "../Components/HeroSection";


import { motion } from "framer-motion";

const services = [
  { title: "Recruitment", icon: Users },
  { title: "Payroll Management", icon: Wallet },
  { title: "KYC & Compliance", icon: ClipboardCheck },
  { title: "Talent Management", icon: Target },
  { title: "Business Process Mgmt", icon: Settings },
  { title: "Digital Technology", icon: Laptop },
];

const serviceItems = [
  {
    img: img2,
    title: "Digital Technology Services",
    desc: "Our specialized digital services division, Hrify Digital, delivers exceptional digital solutions that empower clients to transform and revolutionize their businesses.",
    link: "Discover Our Digital Services",
    path: "/services",
  },
  {
    img: img3,
    title: "Talent Management",
    desc: "We enable clients to identify, recruit, and place specialized talent, ensuring success today while building a strong foundation for the future.",
    link: "Learn About Our Talent Expertise",
    path: "/talent_management",
  },
  {
    img: img4,
    title: "Business Process Management",
    desc: "We create robust digital business frameworks through continuous analysis, testing, and performance monitoring to drive long-term growth.",
    link: "Explore BPM Solutions",
    path: "/sonachala",
  },
];

const COLORS = {
  navy: "#0B2533",
  teal: "#087E8B",
  gold: "#F5B942",
  white: "#FFFFFF",
  lightBg: "#F4FAFB",
};

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        {/* ================= HERO SECTION ================= */}
        <HeroSection />

        {/* ================= SERVICES SLIDING STRIP ================= */}
        <div style={{ background: COLORS.lightBg, padding: "50px 0", overflow: "hidden" }}>
          <h3 style={{ textAlign: "center", color: COLORS.navy, fontWeight: 700, fontSize: "22px", marginBottom: "35px", letterSpacing: "0.5px" }}>
            What We Offer
          </h3>
          <div className="services-track-wrapper">
            <div className="services-track">
              {[...services, ...services].map((service, index) => {
                const Icon = service.icon;
                return (
                  <div className="service-card" key={index}>
                    <div className="service-icon">
                      <Icon size={32} color={COLORS.teal} strokeWidth={1.8} />
                    </div>
                    <p className="service-title">{service.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>
            {`
              .services-track-wrapper {
                width: 100%; overflow: hidden;
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              }
              .services-track { display: flex; gap: 24px; width: max-content; animation: scrollTrack 25s linear infinite; }
              .services-track-wrapper:hover .services-track { animation-play-state: paused; }
              .service-card {
                flex: 0 0 auto; width: 220px; background: #fff; border-radius: 16px;
                padding: 28px 20px; text-align: center; box-shadow: 0 8px 24px rgba(11,37,51,0.08);
                border: 1px solid rgba(11,37,51,0.06);
              }
              .service-icon { margin-bottom: 12px; display: flex; justify-content: center; }
              .service-title { font-weight: 600; color: ${COLORS.navy}; font-size: 15px; margin: 0; }
              @keyframes scrollTrack { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            `}
          </style>
        </div>
      </div>

      {/* ================= WHAT WE DO (VDart-style, simple) ================= */}
      <div style={{ background: "#fff", padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px", color: COLORS.teal, fontWeight: 600, marginBottom: "12px", letterSpacing: "0.5px" }}>
            What we do
          </p>
          <h2 style={{ fontSize: "34px", fontWeight: 700, color: COLORS.navy, marginBottom: "20px" }}>
            Your platform for success.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "rgba(11,37,51,0.75)", maxWidth: "750px", margin: 0 }}>
            HRIFY is a leading business and digital consulting firm, helping organizations
            overcome complex challenges and unlock new growth opportunities through
            innovative strategies and smart digital solutions.
          </p>
        </div>
      </div>

      {/* ================= SERVICES (VDart-style, image + text, no cards) ================= */}
      <div style={{ background: "#fff", padding: "60px 24px 100px" }}>
        <div
          style={{
            maxWidth: "1300px", margin: "0 auto", display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "50px",
          }}
        >
          {serviceItems.map((item, i) => (
            <div key={i}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%", height: "320px", objectFit: "cover",
                  borderRadius: "8px", marginBottom: "26px",
                }}
              />
              <h4 style={{ fontSize: "22px", fontWeight: 700, color: COLORS.navy, marginBottom: "14px" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "16px", lineHeight: "1.75", color: "#3d4a52", marginBottom: "18px" }}>
                {item.desc}
              </p>
              <Link
                to={item.path}
                style={{
                  fontSize: "15px", fontWeight: 600, color: COLORS.teal,
                  textDecoration: "none", borderBottom: `1.5px solid ${COLORS.teal}`, paddingBottom: "2px",
                }}
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REINVENTING THE FUTURE (VDart-style) ================= */}
      <div style={{ background: "#fff", padding: "0" }}>
        <div
          style={{
            maxWidth: "1300px", margin: "0 auto", padding: "60px 24px",
            display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap",
            position: "relative",
          }}
        >
          <div
            className="future-text"
            style={{
              flex: "1 1 400px", background: "#fff", padding: "40px",
              position: "relative", zIndex: 2, maxWidth: "500px",
            }}
          >
            <p style={{ fontSize: "14px", color: "rgba(11,37,51,0.5)", marginBottom: "12px" }}>
              How we can help you
            </p>
            <h2 style={{ fontSize: "34px", fontWeight: 400, color: COLORS.navy, marginBottom: "20px", lineHeight: 1.3 }}>
              Reinventing the future.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(11,37,51,0.75)", margin: 0 }}>
              Constantly evolving, our expertise in connecting people, processes, and
              technology helps our clients in building the right solutions for
              current needs and future growth.
            </p>
          </div>

          <div
            className="future-image"
            style={{
              flex: "1 1 500px", marginLeft: "-80px", zIndex: 1,
            }}
          >
            <img
              src={futureImg}
              alt="Reinventing the future"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        <style>
          {`
            @media (max-width: 900px) {
              .future-image { margin-left: 0 !important; order: -1; }
              .future-text { max-width: 100% !important; padding: 30px 0 !important; }
            }
          `}
        </style>
      </div>
    </>
  );
}

export default Home;