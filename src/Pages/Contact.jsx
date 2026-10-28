import img2 from "../assets/Contact/img2.jpeg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

/* ================= DESIGN TOKENS ================= */
const DEEP = "#015670";
const BRAND = "#006b8f";
const MUTED = "#6a7378";
const BORDER = "#e2e8ea";

const labelStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: DEEP,
  marginBottom: "6px",
  display: "block",
};

const inputStyle = {
  borderRadius: "8px",
  height: "44px",
  border: `1px solid ${BORDER}`,
  boxShadow: "none",
};

const radioStyle = {
  accentColor: BRAND,
};

/* Fill these in with the real inbox / number / handles */
const CONTACT_INFO = {
  email: "info@hrify.com",
  phone: "+91 00000 00000",
  address: "Annai Parvathi Nagar, Opp. Collector Office, Vengikkal, Tiruvannamalai – 606604",
};

function Contact() {
  return (
    <>
      {/* ================= HERO ================= */}
      <div className="container-fluid p-0">
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "46vh",
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(1,86,112,0.85), rgba(0,107,143,0.6))",
            }}
          />

          <div className="container text-center" style={{ position: "relative", zIndex: 2, padding: "60px 20px" }}>
            <p
              style={{
                color: "#bdeeff",
                fontWeight: 600,
                letterSpacing: "2px",
                fontSize: "13px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Get In Touch
            </p>
            <h1 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(32px, 4.5vw, 50px)", marginBottom: "10px" }}>
              Contact Us
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "17px", maxWidth: "540px", margin: "0 auto" }}>
              We'd love to hear about your business — reach out and let's talk.
            </p>
          </div>
        </div>
      </div>

      {/* ================= QUICK CONTACT STRIP ================= */}
      <div className="container" style={{ marginTop: "-46px", position: "relative", zIndex: 3 }}>
        <div className="row g-3">
          {[
            { icon: <FaEnvelope />, label: "Email Us", value: CONTACT_INFO.email },
            { icon: <FaPhoneAlt />, label: "Call Us", value: CONTACT_INFO.phone },
            { icon: <FaMapMarkerAlt />, label: "Visit Us", value: CONTACT_INFO.address },
          ].map((item) => (
            <div className="col-md-4" key={item.label}>
              <div
                className="d-flex align-items-start"
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 14px 34px rgba(1,86,112,0.12)",
                  padding: "22px",
                  gap: "16px",
                  height: "100%",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    minWidth: "44px",
                    borderRadius: "10px",
                    background: "#e6f5fa",
                    color: BRAND,
                    fontSize: "17px",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: "#8a9296", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>
                    {item.label}
                  </p>
                  <p style={{ color: DEEP, fontWeight: 600, fontSize: "14.5px", marginBottom: 0, lineHeight: 1.5 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="container text-center" style={{ paddingTop: "80px", paddingBottom: "10px" }}>
        <h2 style={{ color: DEEP, fontWeight: 800 }}>
          Ready to Take Your Business to New Heights? Partner with HRIFY!
        </h2>
        <p className="mx-auto" style={{ color: "#8f8f8f", maxWidth: "680px" }}>
          Thank you for considering HRIFY as your trusted partner. Fill out the form
          below, and our team will get back to you promptly to explore how we can
          support your business goals.
        </p>
      </div>

      {/* ================= FORM + INFO ================= */}
      <div className="container" style={{ paddingTop: "40px", paddingBottom: "90px" }}>
        <div className="row g-4">
          {/* FORM */}
          <div className="col-lg-8">
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "40px",
                borderRadius: "16px",
                boxShadow: "0 10px 34px rgba(0,0,0,0.06)",
                border: `1px solid ${BORDER}`,
              }}
            >
              <div className="row mb-3">
                <div className="col-md-6">
                  <label style={labelStyle}>Full Name</label>
                  <input type="text" className="form-control" style={inputStyle} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" className="form-control" style={inputStyle} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label style={labelStyle}>Phone Number</label>
                  <input type="text" className="form-control" style={inputStyle} />
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Company Name</label>
                  <input type="text" className="form-control" style={inputStyle} />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label style={labelStyle}>Industry</label>
                  <select className="form-control" style={inputStyle}>
                    <option></option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label style={labelStyle}>Inquiry Reason For</label>
                  <select className="form-control" style={inputStyle}>
                    <option></option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label style={labelStyle}>Services Interest</label>
                <div className="row">
                  {[
                    "IT Solutions & Consulting",
                    "Talent Management Services",
                    "Staffing Solutions",
                    "Payroll Management",
                    "Custom Software Development",
                    "Other",
                  ].map((item, index) => (
                    <div className="col-md-4 mb-2" key={index}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="services"
                          style={radioStyle}
                        />
                        <label className="form-check-label" style={{ fontSize: "14px" }}>
                          {item}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label style={labelStyle}>Attachment</label>
                <input type="file" className="form-control" style={inputStyle} />
              </div>

              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" style={radioStyle} />
                <label className="form-check-label" style={{ fontSize: "14px", color: "#005f7f" }}>
                  I confirm that the information provided is accurate and that I have
                  obtained the candidate's consent to share their details with HRIFY.
                </label>
              </div>

              <div className="text-center">
                <button
                  style={{
                    backgroundColor: BRAND,
                    color: "#fff",
                    padding: "12px 40px",
                    border: "none",
                    borderRadius: "999px",
                    fontWeight: "700",
                    fontSize: "15px",
                    boxShadow: "0 10px 24px rgba(0,107,143,0.25)",
                  }}
                >
                  Send Message
                </button>
              </div>

              <p className="text-center mt-3" style={{ fontSize: "13px", color: "#888", marginBottom: 0 }}>
                "Thank you for reaching out to HRIFY! We've received your details and
                will contact you shortly."
              </p>
            </div>
          </div>

          {/* GET IN TOUCH PANEL */}
          <div className="col-lg-4">
            <div
              style={{
                background: `linear-gradient(160deg, ${DEEP}, ${BRAND})`,
                borderRadius: "16px",
                padding: "36px 30px",
                color: "#fff",
                height: "100%",
              }}
            >
              <h5 style={{ fontWeight: 700, marginBottom: "14px" }}>Let's Connect</h5>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14.5px", lineHeight: 1.7, marginBottom: "28px" }}>
                Prefer to reach us directly? Use the details below, or drop your
                message in the form and we'll follow up within one business day.
              </p>

              <div className="d-flex align-items-start mb-3" style={{ gap: "12px" }}>
                <FaEnvelope style={{ marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px" }}>{CONTACT_INFO.email}</span>
              </div>
              <div className="d-flex align-items-start mb-3" style={{ gap: "12px" }}>
                <FaPhoneAlt style={{ marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px" }}>{CONTACT_INFO.phone}</span>
              </div>
              <div className="d-flex align-items-start mb-4" style={{ gap: "12px" }}>
                <FaMapMarkerAlt style={{ marginTop: "3px" }} />
                <span style={{ fontSize: "14.5px", lineHeight: 1.6 }}>{CONTACT_INFO.address}</span>
              </div>

              <div style={{ height: "1px", background: "rgba(255,255,255,0.25)", margin: "20px 0" }} />

              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", marginBottom: "14px" }}>
                Follow us
              </p>
              <div className="d-flex" style={{ gap: "12px" }}>
                {[FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram].map((Icon, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.15)",
                    }}
                  >
                    <Icon size={15} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;