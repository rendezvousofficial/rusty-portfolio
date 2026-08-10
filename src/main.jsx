import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  Code2,
  Cpu,
  Database,
  Globe,
  Server,
  Wifi,
  ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Rusty C. Carson",
  role: "BSIT Student • Web & IoT Developer",
  location: "Bukidnon, Philippines",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
  cv: "/cv.pdf"
};

const projects = [
  {
    title: "Smart Solar-Powered Drying Rack",
    category: "IoT • Embedded Systems",
    description:
      "Designed an automated solar-powered drying rack that detects rain and environmental conditions, then controls a motorized rack to protect clothes from unpredictable weather.",
    stack: ["ESP32", "C/C++", "Sensors", "Solar Power", "DC Motor", "Node.js", "React", "WebSocket"],
    featured: true
  },
  {
    title: "Smart Inventory Tracking System",
    category: "Web Application",
    description:
      "Developed an inventory and sales management system for monitoring stock, recording purchases, tracking transactions, and generating sales reports.",
    stack: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
    featured: true
  },
  {
    title: "MeatShop POS & Inventory",
    category: "Laravel • SaaS",
    description:
      "Planned a multi-tenant POS and inventory platform with tenant onboarding, database provisioning, authentication, central administration, and reporting workflows.",
    stack: ["Laravel", "PHP", "MySQL", "Multi-tenancy", "REST API"],
    featured: true
  },
  {
    title: "Smart Solar Scarecrow",
    category: "IoT • Agriculture",
    description:
      "Created an IoT agriculture concept using ultrasonic sensors, speakers, solar power, and battery storage to help deter animals from crops.",
    stack: ["ESP32", "Ultrasonic Sensors", "Solar Power", "Embedded Systems"],
    featured: false
  },
  {
    title: "BOARDTRACK",
    category: "C Programming",
    description:
      "Built a boarding-house tenant tracking concept focused on organizing tenant records and improving day-to-day monitoring.",
    stack: ["C", "Data Structures", "File Handling"],
    featured: false
  },
  {
    title: "VegieCraft",
    category: "UI/UX • Marketplace",
    description:
      "Designed a marketplace concept connecting customers with vegetables and local handicrafts using a clean, accessible visual system.",
    stack: ["UI/UX", "React", "Marketplace", "Figma"],
    featured: false
  }
];

const skills = [
  { name: "Web Development", icon: Globe, items: "React, Vite, HTML, CSS, JavaScript, PHP, Laravel" },
  { name: "Backend & Database", icon: Server, items: "Node.js, Express, MySQL, MongoDB, REST APIs" },
  { name: "IoT & Embedded", icon: Cpu, items: "ESP32, Arduino, sensors, motors, WebSocket, automation" },
  { name: "Networking", icon: Wifi, items: "Cisco Packet Tracer, VLAN, DHCP, OSPF, SNMPv3" },
  { name: "Programming", icon: Code2, items: "C, C++, JavaScript, PHP" },
  { name: "Data", icon: Database, items: "MySQL, MongoDB, database design and reporting" }
];

function App() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const close = () => setOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <a href="#home" className="brand" onClick={close}>
          RC<span>.</span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          ))}
          <a className="nav-cta" href={profile.cv} download>Download CV</a>
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☼" : "☾"}
          </button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Open menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Building useful <span>digital solutions</span> with code, hardware, and creativity.</h1>
            <p className="hero-text">
              I'm {profile.name}, an IT student focused on web development, software systems,
              networking, and IoT. I enjoy turning real-world problems into practical technology solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="button primary">View my work <ArrowUpRight size={18} /></a>
              <a href={`mailto:${profile.email}`} className="button secondary"><Mail size={18} /> Contact me</a>
            </div>
            <div className="quick-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="avatar">RC</div>
            <p>IT • WEB • IoT</p>
            <strong>Problem Solver</strong>
            <span>Always learning. Always building.</span>
          </div>
          <a className="scroll" href="#about"><ChevronDown size={18} /> Explore</a>
        </section>

        <section id="about" className="section split">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Technology with a purpose.</h2>
          </div>
          <div className="about-copy">
            <p>
              I am a Bachelor of Science in Information Technology student with hands-on experience
              building academic and personal projects across web applications, databases, networking,
              and Internet of Things systems.
            </p>
            <p>
              My strongest projects combine software and hardware. I have worked with ESP32-based
              systems, sensors, motors, web dashboards, databases, and server-side technologies.
              I am interested in opportunities where I can learn from experienced teams while contributing
              practical development and problem-solving skills.
            </p>
            <div className="facts">
              <div><strong>BSIT</strong><span>Information Technology</span></div>
              <div><strong>6+</strong><span>Featured projects</span></div>
              <div><strong>IoT + Web</strong><span>Core interests</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECHNICAL SKILLS</p>
              <h2>Tools I work with.</h2>
            </div>
            <p>From embedded hardware to full-stack web systems.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, icon: Icon, items }) => (
              <article className="skill-card" key={name}>
                <Icon size={25} />
                <h3>{name}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects that show how I build.</h2>
            </div>
            <p>Academic and personal projects focused on practical solutions.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  {project.featured && <span className="featured-label">FEATURED</span>}
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an opportunity in mind?</h2>
          <p>
            I'm open to internships, entry-level roles, freelance work, and projects where I can
            contribute while continuing to grow as a technology professional.
          </p>
          <a className="button primary big" href={`mailto:${profile.email}`}>
            <Mail size={20} /> {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite • Deployed with Vercel</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
