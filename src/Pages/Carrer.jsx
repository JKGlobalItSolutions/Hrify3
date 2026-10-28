// import img1 from "../assets/Carrer/hero-video.mp4"
import img2 from "../assets/Carrer/img2.png"
import  {React, useState } from "react";
import video1 from "../assets/Carrer/hero-video.mp4";


import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Video,
  Linkedin,
  CheckCircle,
} from "lucide-react";


function Carrer() {
const toolkitFeatures = [
  {
    icon: FileText,
    title: "Resume & LinkedIn Rebuild",
    description:
      "Templates and guides to showcase your career break positively",
  },
  {
    icon: Video,
    title: "Interview Readiness",
    description:
      "Practice questions and confidence-building exercises",
  },
  {
    icon: CheckCircle,
    title: "Skill Gap Assessment",
    description:
      "Identify and bridge the gaps in your professional skills",
  },
  {
    icon: Linkedin,
    title: "Real Returner Success Insights",
    description:
      "Learn from those who've successfully made their comeback",
  },
];


    const [hover, setHover] = useState(false);

    const primaryColor = "#015670";
    const hoverColor = "#0081A7";


    return (

        <>
              
                 <div className="container-fluid p-0">
                        <div
                          className="d-flex justify-content-center align-items-start"
                          style={{
                            position: "relative",
                            minHeight: "100vh",
                            overflow: "hidden",
                          }}
                        >
                          {/* Fixed Background Video */}
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                              position: "fixed",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              zIndex: -2,
                            }}
                          >
                            <source src={video1} type="video/mp4" />
                          </video>
                
                          {/* Overlay */}
                          <div
                            style={{
                              position: "fixed",
                              inset: 0,
                              backgroundColor: "rgba(0,0,0,0.4)",
                              zIndex: -1,
                            }}
                          ></div>
                
                          {/* Hero Content */}
                          <div
                            className="container-fluid"
                            style={{
                              position: "relative",
                              paddingTop: "350px",
                              paddingBottom: "80px",
                              color: "#fff",
                            }}
                          >
                            <div className="container">
                              <h1
                                style={{
                                  fontSize: "75px",
                                  paddingLeft: "30px",
                                  marginBottom: "10px",
                                }}
                              >
                                <b>Career</b>
                              </h1>
                
                              <h3
                                style={{
                                  paddingLeft: "30px",
                                  fontSize: "32px",
                                  fontWeight: "400",
                                  marginTop: 0,
                                }}
                              >
                                Empowering People, Shaping Exceptional Careers.
                              </h3>
                              <p style={{
                                paddingLeft: "30px",
                               fontSize: "50px"
                              }}>→</p>
                
                              {/* small scroll space only */}
                              <div style={{ height: "40vh" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      
<div style={{paddingTop:"25px", backgroundColor:"#fff"}}>

<div style={{backgroundColor:"#fff"}} >


            {/* <div className="container-fluid p-0">
                <img
                    src={img2}
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                    }}
                />
            </div> */}



              <section
      style={{
        padding: "120px 0",
        backgroundColor: "#f5f7fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blur circles */}
      <motion.div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(13,110,253,0.08)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,193,7,0.12)",
          filter: "blur(90px)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 16px",
                borderRadius: "50px",
                background: "rgba(13,110,253,0.1)",
                color: "#015670",
                fontSize: "14px",
                marginBottom: "16px",
              }}
            >
              Free Resource
            </span>

            <h2 style={{ fontSize: "48px", fontWeight: 700 }}>
              RISE <span style={{ color: "#015670" }}>Toolkit</span>
            </h2>

            <p style={{ fontSize: "18px", color: "#6c757d" }}>
              Get everything you need to prepare for your career comeback.
              Designed specifically for returners.
            </p>

            <div className="mt-4">
              {toolkitFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  className="d-flex mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "015670",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "16px",
                    }}
                  >
                    <item.icon size={20} color="#015670" />
                  </div>
                  <div>
                    <h6 style={{ marginBottom: "4px", fontWeight: 600 }}>
                      {item.title}
                    </h6>
                    <p style={{ margin: 0, fontSize: "14px", color: "#6c757d" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className="btn mt-4 px-4 py-3 rounded-pill" style={{backgroundColor:"#015670", color:"white"}}
            >
              <Download size={18} className="me-2" />
              Download Free Toolkit
            </button>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: "30px",
                padding: "50px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  border: "2px dashed #015670",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Download size={36} color="#015670" />
              </motion.div>

              <h4 style={{ fontWeight: 700 }}>
                Free Returnship Toolkit
              </h4>
              <p style={{ color: "#6c757d" }}>
                PDF + Video Guides + Templates
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>  


            <div className="container mt-4 mb-3 text-center">
                <h2 style={{ color: "#015670", fontFamily:"'Outfit', sans-serif", fontSize:"36px" }}><b>Join Our Team and Help Us Shape the Future</b></h2>
                <p style={{ color: "#949494", fontFamily:"'Outfit', sans-serif", fontSize:"20px" }}>Fill out the form below to express your interest in a career with us. We’re looking for passionate, skilled
                    professionals for roles in Talent Management, consulting, talent management, and more.</p>

            </div>


            <div className="container py-5">
                <div
                    className="mx-auto p-4 shadow rounded"
                    style={{ maxWidth: "900px", backgroundColor: "#ffffff" }}
                >
                    <div className="row g-4">

                        {/* Full Name */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Full Name</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Email Address</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Phone */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Phone Number</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Location */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Location</label>
                            <div className="input-group">
                                <input className="form-control" style={{ borderColor: primaryColor }} />
                                <span className="input-group-text" style={{ color: primaryColor }}>▼</span>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">LinkedIn Profile</label>
                            <input className="form-control" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Resume */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Resume Upload</label>
                            <div className="input-group">
                                <input type="file" className="form-control" />
                                <span className="input-group-text" style={{ color: primaryColor }}>⬆</span>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Professional Experience</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Why Us */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Why Do You Want to Work With Us?</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Position */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">
                                Position You're Interested In
                            </label>

                            <select
                                className="form-select"
                                style={{ borderColor: primaryColor }}
                            >
                                <option value="">Select Position</option>
                                <option value="it-solutions">IT Solutions & Consulting</option>
                                <option value="talent-management">Talent Management</option>
                                <option value="it-staffing">IT Staffing</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="col-md-6">
                            <label className="fw-semibold mb-1">Preferred Job Type</label>

                            <select
                                className="form-select"
                                style={{ borderColor: primaryColor }}
                            >
                                <option value="">Select Job Type</option>
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="contract">Contract</option>
                                <option value="temporary">Temporary</option>
                                <option value="remote">Remote</option>
                                <option value="on-site">On-Site</option>
                            </select>
                        </div>

                        {/* Additional Info */}
                        <div className="col-12">
                            <label className="fw-semibold mb-1">Additional Information</label>
                            <textarea className="form-control" rows="4" style={{ borderColor: primaryColor }} />
                        </div>

                        {/* Button */}
                        <div className="col-12 text-center mt-4">
                            <button
                                className="btn px-5 py-2 text-white"
                                style={{
                                    backgroundColor: hover ? hoverColor : primaryColor,
                                    borderRadius: "25px",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Submit
                            </button>
                        </div>

                        {/* Footer */}
                        <div className="col-12 text-center mt-3">
                            <small className="text-muted">
                                By submitting your application, you consent to the processing of your
                                personal information as per our privacy policy.
                            </small>
                        </div>

                    </div>
                </div>
            </div>



</div>
</div>

        </>
    );
}




export default Carrer
