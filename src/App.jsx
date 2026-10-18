import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
<div className="ambient ambient-one" aria-hidden="true"></div>
<div className="ambient ambient-two" aria-hidden="true"></div>
<header className="site-header" id="top">
<a className="brand" href="#home" aria-label="Go to homepage">yuhansi<span>.</span></a>
<button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? "✕" : "☰"}</button>
<nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation" onClick={event => { if (event.target.closest("a")) setMenuOpen(false) }}><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact" className="nav-contact">Let's Talk ↗</a></nav>
</header>
<main>
<section className="hero section" id="home">
<div className="hero-copy" data-reveal="">
<p className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES</p>
<p className="hello">Hello, I'm <span>Yuhansi Karunaratna</span> <span className="wave">✳</span></p>
<h1>Turning <em>ideas</em><br />into digital<br /><span className="gradient-text">experiences.</span></h1>
<p className="hero-description">I’m a <strong>Creative Developer & Designer</strong> who loves building thoughtful, beautiful and high-performing digital experiences.</p>
<div className="hero-actions"><a className="btn btn-primary" href="#projects">Explore My Work <span>↗</span></a><a className="btn btn-secondary" href="#contact">Get in Touch <span>→</span></a></div>
<div className="hero-meta"><span><strong>Frontend</strong> Development</span><i></i><span><strong>Backend</strong> Development</span><i></i><span><strong>Problem</strong> Solving</span></div>
</div>
<div className="hero-visual" data-reveal="">
<div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="visual-glow"></div>
<div className={`avatar-card${photoLoaded ? " has-photo" : ""}`}>
  {/* Personal portrait is bundled at public/my-photo.jpeg */}
  <img
    className="profile-photo"
    src="/my-photo.jpeg"
    alt="My profile portrait"
    onLoad={() => setPhotoLoaded(true)}
    onError={() => setPhotoLoaded(false)}
  />
  {/* Show the illustration only if the image cannot load. */}
  {!photoLoaded && (
    <div className="avatar-illustration">
      <span className="avatar-face">☺</span>
      <div className="avatar-laptop"><span>Y.</span></div>
    </div>
  )}
  <div className="avatar-stars">✦</div>
  <div className="avatar-bottom">DESIGN × CODE × CREATE</div>
</div>
<div className="floating-tag tag-one">✦ Creative mind</div><div className="floating-tag tag-two"><span className="dot"></span> Let's build something</div>
<div className="sparkle sparkle-one">✧</div><div className="sparkle sparkle-two">✳</div>
</div>
<a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
</section>
<section className="about section" id="about"><div className="section-heading" data-reveal=""><span className="section-index">01 / ABOUT ME</span><h2>More than just<br /><span className="gradient-text">pixels & code.</span></h2></div><div className="about-layout"><div className="about-lead" data-reveal=""><span className="asterisk">✳</span><p>I create things that <em>look great</em> and <em>feel even better</em> to use.</p></div><div className="about-body" data-reveal=""><p>Hey! I'm <strong>Yuhansi Karunaratna</strong> — a curious creator passionate about combining design, technology, and meaningful problem-solving. I enjoy bringing ideas to life, from the first sketch to the final interactive experience.</p><p>My approach is simple: build with intention, keep learning, and never settle for ordinary.</p><a className="text-link" href="#contact">A LITTLE MORE ABOUT ME <span>↗</span></a></div></div><div className="quick-stats" data-reveal=""><div><strong>01<span>+</span></strong><small>YEARS LEARNING</small></div><div><strong>05<span>+</span></strong><small>PROJECT IDEAS</small></div><div><strong>∞</strong><small>CURIOSITY</small></div></div></section>
<section className="skills section" id="skills"><div className="section-heading" data-reveal=""><span className="section-index">02 / MY TOOLKIT</span><h2>Skills that help me<br /><span className="gradient-text">make things happen.</span></h2></div><div className="skills-grid"><article className="skill-card" data-reveal=""><span className="skill-icon">⌘</span><h3>Frontend Development</h3><p>Building responsive, interactive, and user-friendly web interfaces.</p><div className="chip-row"><span>React.js</span><span>Flutter</span><span>JavaScript</span></div></article><article className="skill-card" data-reveal=""><span className="skill-icon">⌨</span><h3>Backend Development</h3><p>Developing server-side functionality and learning to build reliable applications.</p><div className="chip-row"><span>Node.js</span><span>Spring Boot</span><span>SQL</span><span>Java</span></div></article><article className="skill-card" data-reveal=""><span className="skill-icon">✧</span><h3>Problem Solving &amp; Creativity</h3><p>Approaching challenges with logical thinking, creativity, and attention to detail.</p><div className="chip-row"><span>Problem Solving</span><span>Debugging</span><span>Creative Thinking</span></div></article></div></section>
<section className="projects section" id="projects">
  <div className="section-heading projects-heading" data-reveal="">
    <div><span className="section-index">03 / SELECTED WORK</span><h2>A few things I've<br /><span className="gradient-text">been creating.</span></h2></div>
    <span className="projects-aside">FEATURED PROJECTS ↙</span>
  </div>
  <div className="project-grid">
    <article className="project-card" data-reveal="">
      <a href="https://github.com/Yuhansi07/TourFlow" target="_blank" rel="noopener noreferrer" aria-label="View TourFlow on GitHub" className="project-image-link">
        <div className="project-art project-shot"><img src="/tourflow.jpeg" alt="TourFlow smart tourism system sign-in screen" loading="lazy" /></div>
      </a>
      <div className="project-info">
        <div><span className="project-category">FULL-STACK WEB APPLICATION</span>
          <h3>TourFlow — Smart Tourism Management</h3>
          <p>A role-based destination and visitor management platform with capacity-aware bookings, time-slot management, QR ticketing and check-in, plus site operations and monitoring.</p>
          <div className="project-tech"><span>React</span><span>TypeScript</span><span>Spring Boot</span><span>Java</span><span>MySQL</span></div>
          <div className="project-links"><a href="https://github.com/Yuhansi07/TourFlow" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
        </div>
      </div>
    </article>
    <article className="project-card" data-reveal="">
      <a href="https://github.com/Yuhansi07/BookNest" target="_blank" rel="noopener noreferrer" aria-label="View BookNest Library Management System on GitHub" className="project-image-link">
        <div className="project-art project-shot"><img src="/library-management.jpeg" alt="BookNest library management system login page" loading="lazy" /></div>
      </a>
      <div className="project-info">
        <div><span className="project-category">FULL-STACK LIBRARY APPLICATION</span>
          <h3>BookNest — Library Management System</h3>
          <p>A role-based library workspace for administrators, librarians and members, bringing together books, circulation, reservations and reporting, with AI-assisted library insights and recommendations.</p>
          <div className="project-tech"><span>Flutter / Dart</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Python / FastAPI</span></div>
          <div className="project-links"><a href="https://github.com/Yuhansi07/BookNest" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
        </div>
      </div>
    </article>
  </div>
</section>
<section className="contact section" id="contact"><div className="contact-panel" data-reveal=""><span className="section-index">04 / LET'S CONNECT</span><div className="contact-spark">✳</div><h2>Have an idea?<br /><span className="gradient-text">Let's make it real.</span></h2><p>I'm always open to interesting projects, collaborations and good conversations.</p><a className="btn btn-primary" id="email-button" href="mailto:yuhansiyuthmi@gmail.com">Say Hello <span>↗</span></a><div className="social-links"><a href="https://github.com/Yuhansi07" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/yuhansi-karunaratn-it" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:yuhansiyuthmi@gmail.com">EMAIL ↗</a></div></div></section>
</main>
<footer className="footer"><span>© <span id="year">{new Date().getFullYear()}</span> YUHANSI KARUNARATNA. ALL RIGHTS RESERVED.</span><a href="#top">BACK TO TOP ↑</a><span>MADE WITH CURIOSITY ✳</span></footer>
    </>
  );
}
