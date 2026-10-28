import React, { useState, useEffect } from "react";

import img1 from "../assets/Contact/img1.jpeg"

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// ---- Same brand tokens as Internship.jsx / Referal.jsx / Revive.jsx ----
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

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [loginError, setLoginError] = useState("");
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    workMode: "",
    description: "",
    salaryRange: "",
    benefits: "",
    responsibilities: "",
    requiredSkills: "",
    education: "",
    experience: "",
    techSkills: "",
    softSkills: ""
  });

  // Fetch all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("https://hrify-backend-g2t4.onrender.com/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new job
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://hrify-backend-g2t4.onrender.com/api/jobs", {
        ...formData,
        benefits: formData.benefits.split(",").map(s => s.trim()),
        responsibilities: formData.responsibilities.split(",").map(s => s.trim()),
        requiredSkills: formData.requiredSkills.split(",").map(s => s.trim()),
        techSkills: formData.techSkills.split(",").map(s => s.trim()),
        softSkills: formData.softSkills.split(",").map(s => s.trim())
      });
      // Reset form
      setFormData({
        title: "",
        company: "",
        location: "",
        workMode: "",
        description: "",
        salaryRange: "",
        benefits: "",
        responsibilities: "",
        requiredSkills: "",
        education: "",
        experience: "",
        techSkills: "",
        softSkills: ""
      });
      fetchJobs();
    } catch (err) {
      console.error("Error adding job:", err);
    }
  };

  // Delete a job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://hrify-backend-g2t4.onrender.com/api/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  // If not logged in, show login form
  if (!isLoggedIn) {
    return (
      <div className="container-fluid p-0" style={{ minHeight: "100vh" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

          .admin-login-root, .admin-login-root * {
            font-family: 'Poppins', sans-serif;
            box-sizing: border-box;
          }
          .admin-login-card {
            background: ${C.white};
            border: 1px solid ${C.border};
            border-radius: 18px;
            box-shadow: 0 20px 44px rgba(11,42,59,0.10);
            padding: 44px 40px;
            width: 100%;
            max-width: 400px;
          }
          .admin-login-eyebrow {
            font-weight: 700;
            font-size: 12.5px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: ${C.accent};
            margin-bottom: 10px;
          }
          .admin-login-title {
            font-weight: 800;
            font-size: 28px;
            color: ${C.navy};
            margin-bottom: 6px;
          }
          .admin-login-subtitle {
            font-size: 14.5px;
            color: ${C.muted};
            margin-bottom: 30px;
          }
          .admin-login-label {
            font-weight: 600;
            font-size: 13.5px;
            color: ${C.navy};
            margin-bottom: 6px;
          }
          .admin-login-input {
            border: 1px solid ${C.border};
            border-radius: 10px;
            padding: 11px 14px;
            font-size: 15px;
            background: ${C.bg};
          }
          .admin-login-input:focus {
            border-color: ${C.accent};
            box-shadow: 0 0 0 3px rgba(14,165,160,0.12);
            background: ${C.white};
          }
          .admin-login-forgot {
            font-size: 13px;
            color: ${C.teal};
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
          }
          .admin-login-btn {
            background: ${C.accent};
            color: ${C.navy};
            font-weight: 700;
            border-radius: 10px;
            padding: 12px;
            border: none;
            box-shadow: 0 10px 22px rgba(14,165,160,0.25);
            transition: transform 0.2s ease;
          }
          .admin-login-btn:hover {
            transform: translateY(-1px);
            color: ${C.navy};
          }
          .admin-login-footnote {
            font-size: 13px;
            color: ${C.muted};
            text-align: center;
            margin-top: 24px;
          }
          .admin-login-visual {
            position: relative;
            height: 100vh;
          }
          .admin-login-visual img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .admin-login-visual-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(0deg, rgba(11,42,59,0.75) 0%, rgba(11,42,59,0.15) 45%, rgba(11,42,59,0.05) 100%);
            display: flex;
            align-items: flex-end;
            padding: 48px;
          }
          .admin-login-visual-tagline {
            color: ${C.white};
            font-weight: 700;
            font-size: 26px;
            line-height: 1.35;
            max-width: 420px;
          }
          .admin-login-visual-tagline span {
            color: #6EE7DE;
          }
        `}</style>

        <div className="row g-0 h-100 admin-login-root">

          {/* LEFT LOGIN FORM */}
          <div className="col-md-5 d-flex align-items-center justify-content-center" style={{ background: C.bg, minHeight: "100vh" }}>
            <div className="admin-login-card">
              <div className="admin-login-eyebrow">HRIFY Admin</div>
              <div className="admin-login-title">Welcome Back</div>
              <div className="admin-login-subtitle">Sign in to your HRIFY account</div>

              {loginError && (
                <div className="alert alert-danger py-2">{loginError}</div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="admin-login-label">Username</label>
                  <input
                    type="text"
                    className="form-control admin-login-input"
                    name="username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                  />
                </div>

                <div className="mb-2">
                  <label className="admin-login-label">Password</label>
                  <input
                    type="password"
                    className="form-control admin-login-input"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                </div>

                <div className="text-end mb-3">
                  <span className="admin-login-forgot">Forgot password?</span>
                </div>

                <button
                  type="submit"
                  className="btn w-100 admin-login-btn"
                >
                  Login
                </button>
              </form>

              <div className="admin-login-footnote">
                Don't have an account? Contact admin
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-md-7 d-none d-md-block p-0 admin-login-visual">
            <img
              src={img1}   // <-- change image path if needed
              alt="Login"
            />
            <div className="admin-login-visual-overlay">
              <div className="admin-login-visual-tagline">
                Empowering <span>Smarter</span> Workforce Solutions.
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Admin Dashboard</h2>

      {/* Add Job Form */}
      <div className="card p-3 mb-4 shadow-sm">
        <h5>Add New Job</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-2">
            <div className="col-md-6">
              <input
                className="form-control"
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="workMode"
                placeholder="Work Mode (Remote/Onsite)"
                value={formData.workMode}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="salaryRange"
                placeholder="Salary Range"
                value={formData.salaryRange}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="experience"
                placeholder="Experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="benefits"
                placeholder="Benefits (comma separated)"
                value={formData.benefits}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="responsibilities"
                placeholder="Responsibilities (comma separated)"
                value={formData.responsibilities}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="requiredSkills"
                placeholder="Required Skills (comma separated)"
                value={formData.requiredSkills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="techSkills"
                placeholder="Tech Skills (comma separated)"
                value={formData.techSkills}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                name="softSkills"
                placeholder="Soft Skills (comma separated)"
                value={formData.softSkills}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Add Job
          </button>
        </form>
      </div>

      {/* Jobs List */}
      <div className="card p-3 shadow-sm">
        <h5>All Jobs</h5>
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.salaryRange}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {jobs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No jobs available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}