import React, { useEffect, useState } from "react";
import "./App.css";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";

export default function Home() {
  /* ================= SLIDER DATA ================= */
  const slides = [
  {
    title: "Building Strong Communities",
    text: "Empowering youth, women, and communities through sustainable development.",
    image: banner1,   // ✅ use imported variable
  },
  {
    title: "Zamuka Mugore Program",
    text: "Since 2022, we have empowered over 100 women to become self-reliant.",
    image: banner2,   // ✅
  },
  {
    title: "Boys to Men Initiative",
    text: "Now in its 4th edition, supporting 150+ boys aged 11–16 years.",
    image: banner3,   // ✅
  },
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    
    <div>
      {/* ================= DEVELOPMENT BANNER ================= */}
<div className="dev-banner">
  🚧 This website is currently under development. Some features may be incomplete or updated frequently.
</div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">EquitBridge</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Initiatives</li>
          <li>Contact</li>
          <li className="donate">Donate</li>
        </ul>
      </nav>

      {/* ================= HERO SLIDER ================= */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <div className="hero-overlay">
          <h1 className="fade-in">{slides[index].title}</h1>
          <p className="fade-in">{slides[index].text}</p>

          <button className="btn">Join Us</button>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src="/assets/ngo-video.mp4" type="video/mp4" />
        </video>

        <div className="video-text">
          <h2>Our Impact in Communities</h2>
          <p>
            We work closely with communities to create sustainable change
            through education, empowerment, and development programs.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-vision">
        <div className="box slide-up">
          <h2>Our Mission</h2>
          <p>
            To empower vulnerable communities through education, health,
            women empowerment, and youth development programs.
          </p>
        </div>

        <div className="box slide-up">
          <h2>Our Vision</h2>
          <p>
            A society where every individual has equal opportunity to grow,
            succeed, and contribute to national development.
          </p>
        </div>
      </section>

      {/* ================= INITIATIVES ================= */}
      <section className="section">
        <h2 className="title">Our Initiatives</h2>

        <div className="cards">

          <div className="card hover-up">
            <img src="/assets/women.jpg" />
            <h3>Zamuka Mugore</h3>
            <p>
              Since 2022, we have empowered more than <b>100 women</b> through
              skills training, entrepreneurship, and financial independence.
            </p>
          </div>

          <div className="card hover-up">
            <img src="/assets/boys.jpg" />
            <h3>Boys to Men Program</h3>
            <p>
              Now in its 4th edition, we have supported over <b>150 boys</b>
              aged 11–16 in leadership and life skills development.
            </p>
          </div>

          <div className="card hover-up">
            <img src="/assets/education.jpg" />
            <h3>Education Support</h3>
            <p>
              Providing school materials, mentorship, and tuition support to
              vulnerable children.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="achievements">
        <h2>Our Achievements</h2>

        <div className="ach-grid">

          <div className="ach-card pop">
            <h3>100+ Women Empowered</h3>
            <p>Zamuka Mugore since 2022</p>
          </div>

          <div className="ach-card pop">
            <h3>150+ Boys Supported</h3>
            <p>4 editions of Boys to Men Program</p>
          </div>

          <div className="ach-card pop">
            <h3>Community Impact</h3>
            <p>Education, Health & Youth Development</p>
          </div>

        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="partners">
        <h2>Our Partners</h2>

        <div className="partner-logos">
          <img src="/assets/p1.png" />
          <img src="/assets/p2.png" />
          <img src="/assets/p3.png" />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 EquitBridge Initiative. All rights reserved.
      </footer>

    </div>
  );
}

