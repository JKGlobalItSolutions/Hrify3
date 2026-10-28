import React, { useRef } from "react";
import { Search, Briefcase, MapPin } from "lucide-react";

// ---- Same brand tokens as Internship.jsx / Revive.jsx ----
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

const Navbar = ({ onSearch }) => {
  const jobTitleRef = useRef();
  const countryRef = useRef();

  const handleSearch = () => {
    const search = jobTitleRef.current.value;
    const location = countryRef.current.value;
    onSearch({ search, location });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="cj-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .cj-root {
          font-family: 'Poppins', sans-serif;
          color: ${C.text};
        }
        .cj-root * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .cj-eyebrow {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          margin-bottom: 14px;
        }

        /* ---- Hero (light, matches RISE-page style) ---- */
        .cj-hero {
          position: relative;
          overflow: hidden;
          padding: 110px 0 80px;
          text-align: center;
          background:
            radial-gradient(circle at 85% 30%, rgba(14,165,160,0.08), transparent 35%),
            ${C.bg};
        }
        .cj-hero .container {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }
        .cj-hero h1 {
          color: ${C.navy};
          font-weight: 800;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }
        .cj-hero p {
          color: ${C.muted};
          font-size: 16.5px;
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ---- Floating search card ---- */
        .cj-search-wrap {
          margin-top: -40px;
          position: relative;
          z-index: 3;
        }
        .cj-search-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          box-shadow: 0 18px 45px rgba(6,44,65,0.1);
          padding: 12px;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .cj-search-card { flex-direction: column; }
        }
        .cj-search-field {
          flex: 1 1 260px;
          display: flex;
          align-items: center;
          background: ${C.bg};
          border: 1px solid ${C.border};
          border-radius: 10px;
          padding: 0 16px;
        }
        .cj-search-field input,
        .cj-search-field select {
          border: none;
          background: transparent;
          outline: none;
          width: 100%;
          padding: 14px 0;
          font-size: 15px;
          color: ${C.text};
        }
        .cj-search-icon {
          color: ${C.teal};
          margin-right: 10px;
          display: flex;
        }
        .cj-search-btn {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: ${C.teal};
          color: ${C.white};
          font-weight: 700;
          font-size: 15px;
          border: none;
          border-radius: 10px;
          padding: 0 34px;
          min-height: 52px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .cj-search-btn:hover {
          transform: translateY(-2px);
          background: ${C.navy};
        }
      `}</style>

      {/* ================= HERO ================= */}
      <div className="cj-hero">
        <div className="container">
          <div className="cj-eyebrow">Careers at HRIFY</div>
          <h1>Find your next opportunity.</h1>
          <p>
            Build meaningful work with a team that values people, ideas,
            and continuous growth.
          </p>
        </div>
      </div>

      {/* ================= FLOATING SEARCH CARD ================= */}
      <div className="container cj-search-wrap">
        <div className="cj-search-card">
          <div className="cj-search-field">
            <span className="cj-search-icon">
              <Briefcase size={18} />
            </span>
            <input
              ref={jobTitleRef}
              type="text"
              placeholder="Job title, keyword or skill"
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="cj-search-field">
            <span className="cj-search-icon">
              <MapPin size={18} />
            </span>
            <select ref={countryRef} defaultValue="">
              <option value="">All locations</option>
              <option>Argentina</option>
              <option>Brazil</option>
              <option>Canada</option>
              <option>India</option>
              <option>United States</option>
            </select>
          </div>

          <button onClick={handleSearch} className="cj-search-btn">
            <Search size={16} /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;