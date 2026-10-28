import React, { useState, useEffect } from "react";
import {
  MapPin,
  Building2,
  ArrowRight,
  TrendingUp,
  Users,
  Lightbulb,
} from "lucide-react";
import JobDetail from "./JobDetail";

// ---- Same brand tokens as Internship.jsx / Revive.jsx / Navbarjob.jsx ----
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

const CATEGORIES = ["All", "Technology", "HR", "Consulting", "Marketing"];

const WHY_HRIFY = [
  {
    number: "01",
    icon: <TrendingUp size={22} />,
    title: "Growth",
    desc: "Clear paths to grow your career, backed by mentorship and real ownership.",
  },
  {
    number: "02",
    icon: <Users size={22} />,
    title: "People",
    desc: "A team that values collaboration, respect, and genuine support.",
  },
  {
    number: "03",
    icon: <Lightbulb size={22} />,
    title: "Innovation",
    desc: "Work on projects that push you to learn, experiment, and build better.",
  },
];

const SkeletonCard = () => (
  <div className="col-12 col-md-6 col-lg-4">
    <div className="cj-job-card">
      <div className="skeleton-line" style={{ width: "70%", height: "18px", marginBottom: "14px" }} />
      <div className="skeleton-line" style={{ width: "45%", height: "13px", marginBottom: "18px" }} />
      <div className="skeleton-line" style={{ width: "100%", height: "12px", marginBottom: "8px" }} />
      <div className="skeleton-line" style={{ width: "90%", height: "12px", marginBottom: "8px" }} />
      <div className="skeleton-line" style={{ width: "60%", height: "12px" }} />
    </div>
  </div>
);

const JobList = ({ searchParams }) => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // popup form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    workAuth: "",
    jobTitle: "",
    email: "",
    country: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
  });

  // fetch jobs
  const fetchJobs = () => {
    setLoading(true);
    const query = new URLSearchParams(searchParams).toString();
    fetch(`https://hrify-backend-g2t4.onrender.com/api/jobs?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, [searchParams]);

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter((job) =>
          `${job.title} ${job.description || ""}`
            .toLowerCase()
            .includes(activeCategory.toLowerCase())
        );

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://hrify-backend-g2t4.onrender.com/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Application sent successfully!");
      setShowForm(false);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        workAuth: "",
        jobTitle: "",
        email: "",
        country: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
      });
    } catch (err) {
      alert("Failed to send application");
    }
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

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .skeleton-line {
          background: ${C.border};
          border-radius: 6px;
          animation: pulse 1.4s ease-in-out infinite;
        }

        .cj-eyebrow {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${C.accent};
          margin-bottom: 10px;
        }
        .cj-h2 {
          color: ${C.navy};
          font-weight: 700;
          font-size: clamp(26px, 3vw, 34px);
          margin-bottom: 8px;
        }
        .cj-sub {
          color: ${C.muted};
          font-size: 16px;
          margin-bottom: 0;
        }

        /* ---- Filter pills ---- */
        .cj-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 28px 0 34px;
        }
        .cj-filter-pill {
          border: 1px solid ${C.border};
          background: ${C.white};
          color: ${C.muted};
          font-weight: 600;
          font-size: 14px;
          padding: 9px 20px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cj-filter-pill:hover {
          border-color: ${C.accent};
          color: ${C.navy};
        }
        .cj-filter-pill.active {
          background: #E8F7F7;
          border-color: ${C.accent};
          color: #008A9A;
        }

        /* ---- Job cards ---- */
        .cj-job-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 26px;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 20px rgba(11,42,59,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cj-job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(11,42,59,0.1);
          border-color: ${C.accent};
        }
        .cj-job-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
        }
        .cj-job-card-top h5 {
          color: ${C.navy};
          font-weight: 700;
          margin: 0;
        }
        .cj-job-card-arrow {
          color: ${C.accent};
          flex-shrink: 0;
          margin-top: 4px;
        }
        .cj-job-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 14px;
        }
        .cj-job-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${C.muted};
          font-size: 14px;
        }
        .cj-job-meta svg { color: ${C.teal}; }
        .cj-job-desc {
          font-size: 14px;
          color: ${C.muted};
          line-height: 1.7;
          margin-bottom: 18px;
          flex-grow: 1;
        }
        .cj-job-view {
          display: flex;
          align-items: center;
          gap: 6px;
          color: ${C.teal};
          font-weight: 600;
          font-size: 14px;
        }

        .cj-empty {
          text-align: center;
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 80px 20px;
          box-shadow: 0 6px 20px rgba(11,42,59,0.04);
        }
        .cj-empty h4 { color: ${C.navy}; font-weight: 700; margin-bottom: 8px; }
        .cj-empty p { color: ${C.muted}; margin-bottom: 0; }

        /* ---- Why HRIFY ---- */
        .cj-why-card {
          background: ${C.white};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 30px 26px;
          height: 100%;
          box-shadow: 0 6px 20px rgba(11,42,59,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cj-why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(11,42,59,0.1);
          border-color: ${C.accent};
        }
        .cj-why-number {
          font-size: 13px;
          font-weight: 700;
          color: ${C.border};
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          display: block;
        }
        .cj-why-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: ${C.bg};
          color: ${C.teal};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .cj-why-card h5 {
          color: ${C.navy};
          font-weight: 700;
          margin-bottom: 8px;
        }
        .cj-why-card p {
          color: ${C.muted};
          font-size: 14.5px;
          line-height: 1.6;
          margin: 0;
        }

        /* ---- Talent pool CTA ---- */
        .cj-cta {
          text-align: center;
          background: linear-gradient(135deg, ${C.navy}, ${C.teal});
          color: ${C.white};
          border-radius: 20px;
          padding: 56px 32px;
          box-shadow: 0 20px 45px rgba(11,42,59,0.2);
        }
        .cj-cta h4 { font-weight: 700; margin-bottom: 12px; }
        .cj-cta p {
          max-width: 560px;
          margin: 0 auto 24px;
          color: rgba(255,255,255,0.85);
          font-size: 16px;
          line-height: 1.7;
        }
        .cj-cta-btn {
          background: ${C.white};
          color: ${C.navy};
          font-weight: 700;
          border: none;
          border-radius: 999px;
          padding: 12px 36px;
          font-size: 15px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          transition: transform 0.2s ease;
        }
        .cj-cta-btn:hover { transform: translateY(-2px); }

        /* ---- Popup form ---- */
        .cj-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(6,20,28,0.55);
          z-index: 1050;
          padding: 16px;
        }
        .cj-modal-card {
          width: 100%;
          max-width: 660px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 18px;
          background: ${C.white};
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }
        .cj-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, ${C.navy}, ${C.teal});
          color: ${C.white};
          padding: 20px 26px;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }
        .cj-modal-header h5 { margin: 0; font-weight: 700; }
        .cj-modal-body { padding: 28px; }
        .cj-modal-body .form-label { font-weight: 600; color: ${C.text}; }
        .cj-modal-body .form-control,
        .cj-modal-body .form-select {
          border-radius: 8px;
          border: 1px solid ${C.border};
        }
        .cj-modal-submit {
          background: linear-gradient(135deg, ${C.teal}, ${C.navy});
          border: none;
          border-radius: 999px;
          color: ${C.white};
          font-weight: 700;
          font-size: 16px;
          padding: 12px 44px;
          box-shadow: 0 10px 24px rgba(1,86,112,0.25);
        }
      `}</style>

      {/* ================= OPEN POSITIONS ================= */}
      <div className="container" style={{ paddingTop: "70px", paddingBottom: "40px" }}>
        <div className="mb-4">
          <div className="cj-eyebrow">Open Positions</div>
          <h2 className="cj-h2">Explore opportunities at HRIFY</h2>
          {!loading && (
            <p className="cj-sub">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "role" : "roles"} available right now
            </p>
          )}
        </div>

        <div className="cj-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cj-filter-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="row g-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="row g-4">
            {filteredJobs.map((job) => (
              <div className="col-12 col-md-6 col-lg-4" key={job._id}>
                <div className="cj-job-card" onClick={() => setSelectedJob(job)}>
                  <div className="cj-job-card-top">
                    <h5>{job.title}</h5>
                    <span className="cj-job-card-arrow">
                      <ArrowRight size={18} />
                    </span>
                  </div>

                  <div className="cj-job-meta">
                    <span>
                      <Building2 size={14} /> {job.company}
                    </span>
                    <span>
                      <MapPin size={14} /> {job.location}
                    </span>
                  </div>

                  <p className="cj-job-desc">
                    {job.description.slice(0, 110)}...
                  </p>

                  <span className="cj-job-view">
                    View job <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cj-empty">
            <h4>No matching roles right now</h4>
            <p>
              Try a different keyword or location — or submit your resume below so
              we can reach out when something opens up.
            </p>
          </div>
        )}
      </div>

      {/* ================= WHY HRIFY ================= */}
      <div className="container" style={{ paddingBottom: "70px" }}>
        <div className="text-center mb-4">
          <div className="cj-eyebrow">Why HRIFY</div>
          <h2 className="cj-h2">More than a job. A place to grow.</h2>
        </div>
        <div className="row g-4">
          {WHY_HRIFY.map((item) => (
            <div className="col-12 col-md-4" key={item.number}>
              <div className="cj-why-card">
                <span className="cj-why-number">{item.number}</span>
                <div className="cj-why-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TALENT POOL CTA ================= */}
      <div className="container" style={{ paddingBottom: "72px" }}>
        <div className="cj-cta">
          <h4>Didn't find a role that matches your skills?</h4>
          <p>
            We'd like to stay connected. Join our talent pool, and our recruiters
            will reach out when a job matches your skills.
          </p>
          <button onClick={() => setShowForm(true)} className="cj-cta-btn">
            Submit Resume
          </button>
        </div>
      </div>

      {/* ================= POPUP FORM ================= */}
      {showForm && (
        <div className="d-flex align-items-center justify-content-center cj-modal-overlay">
          <div className="cj-modal-card">
            <div className="cj-modal-header">
              <h5>Apply For Job</h5>
              <button
                className="btn-close btn-close-white"
                onClick={() => setShowForm(false)}
              ></button>
            </div>

            <form onSubmit={handleFormSubmit} className="row g-3 cj-modal-body">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Middle Name</label>
                <input
                  name="middleName"
                  type="text"
                  className="form-control"
                  value={formData.middleName}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Mobile No</label>
                <input
                  name="mobile"
                  type="text"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Work Authorization</label>
                <select
                  name="workAuth"
                  className="form-select"
                  value={formData.workAuth}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Citizen">Citizen</option>
                  <option value="Green Card">Green Card</option>
                  <option value="Work Visa">Work Visa</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Job Title</label>
                <input
                  name="jobTitle"
                  type="text"
                  className="form-control"
                  value={formData.jobTitle}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input
                  name="country"
                  type="text"
                  className="form-control"
                  value={formData.country}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  value={formData.address}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">State</label>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  value={formData.state}
                  onChange={handleFormChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  value={formData.city}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Zipcode</label>
                <input
                  name="zipcode"
                  type="text"
                  className="form-control"
                  value={formData.zipcode}
                  onChange={handleFormChange}
                />
              </div>

              <div className="col-12 text-center mt-3">
                <button type="submit" className="cj-modal-submit">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;