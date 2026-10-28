import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Navbar/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [email, setEmail] = useState("");

    // show button after scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        // TODO: hook this up to actual newsletter API
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <>
            <footer
                style={{
                    background: "linear-gradient(180deg, #0A1B3D 0%, #081533 100%)",
                    color: "#d1d5db",
                    padding: "70px clamp(20px, 5vw, 60px) 0",
                }}
            >
                <div className="container-fluid" style={{ maxWidth: "1300px", margin: "0 auto" }}>
                    <div className="row gy-5">

                        {/* Brand + About */}
                        <div className="col-lg-3 col-md-6">
                            <img
                                src={logo}
                                alt="HRIFY Logo"
                                style={{
                                    height: "40px",
                                    background: "white",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                }}
                            />
                            <p
                                style={{
                                    marginTop: "16px",
                                    fontSize: "13.5px",
                                    lineHeight: "1.7",
                                    color: "#b8c0cc",
                                }}
                            >
                                HRIFY is a trusted partner in technology services and talent
                                solutions. We transform businesses with innovative solutions
                                and the right talent.
                            </p>
                            <div className="d-flex gap-2 mt-3">
                                <a href="https://www.facebook.com/share/16sPa1rCRq/" style={iconStyle} target="_blank" rel="noreferrer">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/hrifytechnologies/about/" style={iconStyle} target="_blank" rel="noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://wa.me/+918608600778" style={iconStyle} target="_blank" rel="noreferrer">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/hrifyofficial?igsh=MXFlYXl6MjMyZzZ4Nw==" style={iconStyle} target="_blank" rel="noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <h6 style={headingStyle}>Quick Links</h6>
                            <ul style={listStyle}>
                                <li><Link to="/" style={linkStyle}>Home</Link></li>
                                <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                                <li><Link to="/services" style={linkStyle}>Services</Link></li>
                                <li><Link to="/talent_management" style={linkStyle}>Talent Management</Link></li>
                                <li><Link to="/prohub/Carrer" style={linkStyle}>Careers</Link></li>
                                <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-lg-2 col-md-6">
                            <h6 style={headingStyle}>Services</h6>
                            <ul style={listStyle}>
                                <li style={plainItem}>IT Services & Consulting</li>
                                <li style={plainItem}>Talent Management</li>
                                <li style={plainItem}>Staffing Solutions</li>
                                <li style={plainItem}>Enterprise Solutions</li>
                                <li style={plainItem}>Digital Transformation</li>
                                <li style={plainItem}>Support & Maintenance</li>
                            </ul>
                        </div>

                        {/* Industries */}
                        <div className="col-lg-2 col-md-6">
                            <h6 style={headingStyle}>Industries</h6>
                            <ul style={listStyle}>
                                <li style={plainItem}>IT & Technology</li>
                                <li style={plainItem}>Healthcare</li>
                                <li style={plainItem}>Manufacturing</li>
                                <li style={plainItem}>BFSI</li>
                                <li style={plainItem}>Retail & E-commerce</li>
                                <li style={plainItem}>Education</li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="col-lg-1 col-md-6">
                            <h6 style={headingStyle}>Resources</h6>
                            <ul style={listStyle}>
                                <li style={plainItem}>Blog</li>
                                <li style={plainItem}>Case Studies</li>
                                <li style={plainItem}>Whitepapers</li>
                                <li style={plainItem}>Events</li>
                                <li style={plainItem}>News & Insights</li>
                                <li style={plainItem}>FAQs</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-lg-2 col-md-6">
                            <h6 style={headingStyle}>Newsletter</h6>
                            <p style={{ fontSize: "13px", color: "#b8c0cc", lineHeight: "1.6" }}>
                                Subscribe to our newsletter to get the latest updates and insights.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="d-flex" style={{ maxWidth: "220px" }}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    style={{
                                        flex: 1,
                                        padding: "8px 10px",
                                        fontSize: "13px",
                                        border: "none",
                                        borderRadius: "6px 0 0 6px",
                                        outline: "none",
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        background: "#0aa6c8",
                                        border: "none",
                                        borderRadius: "0 6px 6px 0",
                                        padding: "0 14px",
                                        color: "white",
                                    }}
                                >
                                    <i className="bi bi-send-fill"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* BOTTOM BAR */}
                    <div
                        className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2"
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            marginTop: "55px",
                            padding: "26px 0",
                            fontSize: "12.5px",
                            color: "#9aa3af",
                        }}
                    >
                        <span>© {new Date().getFullYear()} HRIFY. All Rights Reserved.</span>

                        <div className="d-flex gap-3">
                            <Link to="/privacy-policy" style={bottomLinkStyle}>Privacy Policy</Link>
                            <Link to="/terms-of-use" style={bottomLinkStyle}>Terms of Use</Link>
                            <Link to="/cookie-policy" style={bottomLinkStyle}>Cookie Policy</Link>
                        </div>

                        <span style={{ textAlign: "center" }}>
                            <i className="bi bi-geo-alt-fill me-1"></i>
                            Annai Parvathi Nagar, Opp. Collector Office, Vengikkal, Tiruvannamalai – 606604
                        </span>
                    </div>
                </div>
            </footer>

            {/* FLOATING BACK TO TOP BUTTON */}
            {showTopBtn && (
                <button
                    className="scroll-top-btn"
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "30px",
                        right: "30px",
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0aa6c8, #0077a3)",
                        border: "none",
                        color: "#fff",
                        fontSize: "18px",
                        cursor: "pointer",
                        zIndex: 999,
                        boxShadow: "0 20px 30px rgba(24, 187, 205, 0.3)",
                    }}
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </>
    );
}

const iconStyle = {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#0aa6c8",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    textDecoration: "none",
};

const headingStyle = {
    color: "white",
    marginBottom: "16px",
    fontSize: "14.5px",
    fontWeight: "600",
};

const listStyle = {
    lineHeight: "2",
    listStyleType: "none",
    paddingLeft: 0,
    fontSize: "13px",
};

const plainItem = {
    color: "#b8c0cc",
};

const linkStyle = {
    color: "#b8c0cc",
    textDecoration: "none",
};

const bottomLinkStyle = {
    color: "#9aa3af",
    textDecoration: "none",
};

export default Footer;