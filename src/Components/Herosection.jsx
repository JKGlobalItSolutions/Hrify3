import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  navy: "#0B2533",
  gold: "#F5B942",
};

/*
  Replace these with your own licensed photos (Unsplash / Pexels — free, commercial use OK).
  Save into src/assets/Home/ and update the imports + paths below.
*/
import slideImg1 from "../assets/Home/slide1.png";
import slideImg2 from "../assets/Home/slide2.png";
import slideImg3 from "../assets/Home/slide3.png";

const slides = [
  {
    img: slideImg1,
    heading: "Empowering Talent.",
    subheading: "Enabling Growth.",
    text: "Connecting exceptional talent with businesses that inspire growth. End-to-end HR and workforce solutions built for today's evolving businesses.",
  },
  {
    img: slideImg2,
    heading: "Workforce Solutions.",
    subheading: "Built to Scale.",
    text: "End-to-end workforce management designed for growing businesses — from staffing to strategy.",
  },
  {
    img: slideImg3,
    heading: "Strategic HR.",
    subheading: "Real Outcomes.",
    text: "HR consulting rooted in business results — compliance, performance, and people, aligned.",
  },
];

const AUTO_SLIDE_MS = 5500;

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => setIndex(i), []);
  const nextSlide = useCallback(() => setIndex((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(nextSlide, AUTO_SLIDE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, nextSlide]);

  const active = slides[index];

  return (
    <section
      style={{
        background: "#ffffff",
        paddingTop: "110px",
        paddingBottom: "60px",
      }}
    >
      {/* OUTER wrapper enforces the white side-margins, like VDart */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            position: "relative",
            minHeight: "600px",
            height: "clamp(560px, 62vh, 600px)",
            borderRadius: "4px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center", // vertically centered, VDart-style
            padding: "0 40px",
          }}
        >
          {/* background photo, crossfades per slide */}
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${active.img})`,
                backgroundSize: "cover",
                backgroundPosition: "60% center",
              }}
            />
          </AnimatePresence>

          {/* dark overlay — stronger left (text side), lighter right (image side) */}
          <div
            style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(100deg, rgba(5,20,27,0.97) 0%, rgba(11,37,51,0.82) 40%, rgba(11,37,51,0.3) 100%)`,
            }}
          />

          <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px", flexWrap: "wrap" }}>
              {/* ================= LEFT: bold heading + text ================= */}
              <div style={{ flex: "1 1 500px", color: "#fff" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1
                      style={{
                        fontSize: "clamp(30px, 4.6vw, 60px)", fontWeight: 900,
                        lineHeight: 1.05, marginBottom: "20px", letterSpacing: "-0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {active.heading}
                      <br />
                      <span style={{ color: COLORS.gold }}>{active.subheading}</span>
                    </h1>

                    <p
                      style={{
                        fontSize: "16px", lineHeight: "1.75", color: "rgba(255,255,255,0.8)",
                        maxWidth: "520px", marginBottom: "30px",
                      }}
                    >
                      {active.text}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <motion.button
                  className="explore-cta"
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "16px",
                    background: "transparent", border: "none", cursor: "pointer",
                    color: "#fff", fontSize: "15px", fontWeight: 700, letterSpacing: "0.5px",
                  }}
                >
                  Explore Services
                  <span
                    className="explore-cta-circle"
                    style={{
                      width: "50px", height: "50px", borderRadius: "50%",
                      border: `1.5px solid ${COLORS.gold}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: COLORS.gold, fontSize: "18px", flexShrink: 0,
                      transition: "background 0.3s ease, color 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    →
                  </span>
                </motion.button>
              </div>

              {/* ================= RIGHT: vertical slide numbers ================= */}
              <div
                className="slide-numbers"
                style={{
                  display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "20px",
                  paddingBottom: "4px",
                }}
              >
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: "10px", padding: "4px 0",
                    }}
                  >
                    {i === index && (
                      <span style={{ width: "24px", height: "1.5px", background: COLORS.gold, display: "inline-block" }} />
                    )}
                    <span
                      style={{
                        fontSize: i === index ? "15px" : "12.5px",
                        fontWeight: i === index ? 800 : 500,
                        color: i === index ? COLORS.gold : "rgba(255,255,255,0.45)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      0{i + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .explore-cta:hover .explore-cta-circle {
            background: ${COLORS.gold};
            color: ${COLORS.navy};
            transform: translateX(4px);
          }
          @media (max-width: 768px) {
            .slide-numbers { flex-direction: row !important; }
          }
        `}
      </style>
    </section>
  );
}

export default HeroSection;