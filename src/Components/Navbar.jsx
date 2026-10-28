import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/Navbar/logo.png";
import logo2 from "../assets/Navbar/logo2.png";

const COLORS = {
  navy: "#0B2533",
  teal: "#087E8B",
  gold: "#F5B942",
};

function Navbar() {
  const location = useLocation();
  const healthcareRoutes = ["/industries/Industry_HL"];
  const isHealthcarePage = healthcareRoutes.includes(location.pathname);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Talent", path: "/talent_management" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(11,37,51,0.08)",
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
        padding: "16px clamp(16px, 4vw, 48px)",
        zIndex: 1050,
      }}
    >
      <div className="container-fluid px-0">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={isHealthcarePage ? logo2 : logo}
            alt="HRIFY Logo"
            style={{ height: "40px" }}
          />
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hrifyNavbar"
          style={{ borderColor: "rgba(11,37,51,0.3)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="hrifyNavbar">
          <ul
            className="navbar-nav mx-auto mb-2 mb-lg-0"
            style={{ gap: "32px", fontSize: "15px", fontWeight: 500, whiteSpace: "nowrap" }}
          >
            {menuItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <li className="nav-item" key={i}>
                  <Link
                    className="nav-link"
                    to={item.path}
                    style={{
                      color: COLORS.navy,
                      borderBottom: isActive ? `2px solid ${COLORS.gold}` : "2px solid transparent",
                      paddingBottom: "4px",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                data-bs-toggle="dropdown"
                style={{ color: COLORS.navy }}
              >
                Solutions
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sonachala">Sonachala</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{ color: COLORS.navy, textDecoration: "none" }}
              >
                Industries
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/industries/Industry_AM">Automotive & Mobility</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_HL">Healthcare & Life Sciences</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_EU">Energy & Utilities</Link></li>
                <li><Link className="dropdown-item" to="/industries/Industry_BF">Banking & Finance</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/opportunities" style={{ color: COLORS.navy }}>
                Opportunities
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                data-bs-toggle="dropdown"
                style={{ color: COLORS.navy, textDecoration: "none" }}
              >
                Careers
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/prohub/Carrer">Career</Link></li>
                <li><Link className="dropdown-item" to="/prohub/internship">Internship</Link></li>
                <li><Link className="dropdown-item" to="/prohub/referal">Referral Program</Link></li>
                <li><Link className="dropdown-item" to="/prohub/revive">Rise Program</Link></li>
              </ul>
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="d-flex gap-3 mt-3 mt-lg-0 align-items-center">
            <Link
              to="/contact"
              className="btn"
              style={{
                background: "transparent",
                color: COLORS.teal,
                border: `1.5px solid ${COLORS.teal}`,
                borderRadius: "6px",
                fontWeight: 500,
                fontSize: "14.5px",
                padding: "9px 22px",
              }}
            >
              Contact us
            </Link>

            <Link
              to="/admin"
              style={{
                color: COLORS.navy,
                fontWeight: 500,
                fontSize: "14.5px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;