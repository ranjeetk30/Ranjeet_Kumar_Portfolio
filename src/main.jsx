import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const experience = [
  {
    company: "Infosys Limited",
    role: "Technology Lead",
    location: "Gurgaon, India",
    period: "Mar 2022 – Present",
    technologies: ["C#", ".NET Core", "SQL Server", "Aerospike", "Bitbucket", "Harness", "Bamboo"],
    points: [
      "Involved across the full SDLC — requirement analysis, design, implementation, and testing — for client engagements.",
      "Developed and maintained a Data Loader application acting as a mediator service, ingesting user data and loading it into multiple database types.",
      "Enhanced the application based on evolving client requirements and resolved production issues to maintain system stability.",
      "Collaborated with cross-functional teams under Agile methodologies to deliver on client priorities."
    ]
  },
  {
    company: "DXC Technology",
    role: "Professional 1 – Application Developer",
    location: "Noida, India",
    period: "Dec 2018 – Mar 2022",
    technologies: ["C#", "VB.NET", "ASP.NET", "MVC", "WCF", "Web Services", "Angular", "SQL Server", "Oracle", "Git"],
    points: [
      "Developed and supported the Billing module for a healthcare client, handling core functionality and enhancements.",
      "Migrated a full application from .NET 2.0 to .NET 4.7.2, modernizing the codebase and improving maintainability.",
      "Built proof-of-concepts for new functionality requiring integration across multiple existing modules.",
      "Implemented SOAP-based messaging using WCF and Web Services to enable data transfer between systems.",
      "Built SPA features using Angular Material, with backend data handled via Robo 3T.",
      "Designed and implemented role-based authorization across the entire application.",
      "Customized data grid components and worked with Telerik controls to build interactive, high-performance UI.",
      "Managed customer interactions to understand feature requirements and consistently delivered on schedule, earning recognition from senior management and clients."
    ]
  }
];

const projects = [
  {
    name: "PAT-Dinobots",
    period: "Mar 2022 – Present",
    domain: "Portfolio Accounting",
    description: "Portfolio Accounting Technology platform for Charles Schwab, providing banking, brokerage, and financial advisory services.",
    points: [
      "Built the data loader application using C#, .NET Core, and Aerospike.",
      "Managed source control and deployment pipelines via Bitbucket, Harness, and Bamboo."
    ],
    tech: ["C#", ".NET Core", "Aerospike", "Bitbucket", "Harness", "Bamboo"],
    accent: "mint"
  },
  {
    name: "Care Suite Personas",
    period: "May 2020 – Mar 2022",
    domain: "Healthcare",
    description: "Healthcare product for Apollo Hospital supporting inpatient workflows for nurses and doctors from admission through discharge.",
    points: [
      "Developed modules and features using Angular, C#, Oracle, FHIR, and Postman."
    ],
    tech: ["Angular", "C#", "Oracle", "FHIR", "Postman", "Robo 3T", "Web API"],
    accent: "blue"
  },
  {
    name: "Med Mantra",
    period: "Dec 2018 – May 2020",
    domain: "Healthcare",
    description: "End-to-end healthcare solution for Apollo Hospitals covering patient registration through discharge, including billing and maintenance services.",
    points: [
      "Built an end-to-end healthcare solution covering patient registration through discharge."
    ],
    tech: [".NET", "Oracle", "SQL", "HTML", "CSS", "Web Services"],
    accent: "violet"
  }
];

const skills = [
  { title: "Backend", icon: Server, items: ["C#", "VB.NET", "ASP.NET", "MVC", "Web API", "WCF", "Web Services", "ADO.NET", "Entity Framework"] },
  { title: "Frontend", icon: Code2, items: ["React", "Angular", "HTML5", "CSS3", "Angular Material", "SPA"] },
  { title: "Database", icon: Database, items: ["SQL Server", "Oracle", "Aerospike", "Robo 3T"] },
  { title: "Architecture", icon: Layers3, items: ["SOLID Principles", "Role-Based Authorization", "RESTful Services", "SPA"] },
  { title: "DevOps", icon: BriefcaseBusiness, items: ["TFS", "Git", "Bitbucket", "Harness", "Bamboo"] },
  { title: "Tools", icon: ShieldCheck, items: ["Jira", "Telerik Controls", "Postman", "Agile"] }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="grid-glow" />

      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("home")}>RK<span>.</span></button>

          <nav className={menu ? "nav-links open" : "nav-links"}>
            {["About", "Experience", "Projects", "Skills", "Education"].map((item) => (
              <button key={item} onClick={() => go(item.toLowerCase())}>{item}</button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="talk-btn" onClick={() => go("contact")}>
              Let's talk <ArrowUpRight size={16} />
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow"><span /> SENIOR .NET DEVELOPER · TECHNOLOGY LEAD</div>
            <h1>Building <em>enterprise software</em> that works at scale.</h1>
            <p className="hero-description">
              Full-stack .NET Developer with 7+ years of experience designing, developing,
              and maintaining enterprise applications across healthcare, banking, and financial services.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>
                Explore my work <ArrowUpRight size={17} />
              </button>
              <a className="secondary-btn" href="/Ranjeet_Kumar_Resume.docx" download>
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="hero-stats">
              <div><strong>7+</strong><span>Years experience</span></div>
              <div><strong>.NET</strong><span>Enterprise development</span></div>
              <div><strong>3</strong><span>Core domains</span></div>
            </div>
          </motion.div>

          <motion.div
            className="hero-profile"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-ring ring-one" />
            <div className="profile-ring ring-two" />
            <div className="profile-photo-wrap">
              <img src="/profile.jpg" alt="Ranjeet Kumar" />
            </div>
            <div className="tech-chip chip-net"><Code2 size={15} /> .NET</div>
            <div className="tech-chip chip-csharp"><span className="csharp-icon">C#</span> C#</div>
            <div className="tech-chip chip-sql"><Database size={15} /> SQL Server</div>
            <div className="tech-chip chip-react"><Sparkles size={15} /> React</div>
          </motion.div>
        </section>

        <section className="quick-strip">
          <div><CheckCircle2 size={16} /> Enterprise delivery</div>
          <div><CheckCircle2 size={16} /> Full-stack engineering</div>
          <div><CheckCircle2 size={16} /> Healthcare & banking</div>
          <div><CheckCircle2 size={16} /> Agile methodology</div>
        </section>

        <section id="about" className="section-wrap section">
          <SectionHeading number="01" eyebrow="PROFILE" title="Turning requirements into scalable software." />
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">I work at the intersection of <strong>engineering, delivery and business requirements.</strong></p>
              <p>
                Full-stack .NET Developer with 7+ years of experience designing, developing,
                and maintaining enterprise applications using C#, ASP.NET, MVC, Web API, WCF,
                Entity Framework, and SQL Server.
              </p>
              <p>
                Experienced in building RESTful services, role-based security, and SPA features,
                while delivering complex modules under Agile methodologies.
              </p>
            </div>

            <div className="about-cards">
              <InfoCard icon={BriefcaseBusiness} title="Technology Lead" text="Full SDLC involvement, technical delivery and cross-functional collaboration." />
              <InfoCard icon={Server} title="Backend Engineering" text="C#, .NET, ASP.NET, Web API, WCF and enterprise application development." />
              <InfoCard icon={ShieldCheck} title="Secure Systems" text="Role-based authorization and enterprise security-focused application design." />
              <InfoCard icon={Database} title="Data Platforms" text="SQL Server, Oracle, Aerospike and multi-database data loader applications." />
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap section">
          <SectionHeading number="02" eyebrow="CAREER" title="Professional experience." />
          <div className="timeline">
            {experience.map((job, index) => (
              <motion.article
                className="experience-card"
                key={job.company}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="experience-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="experience-content">
                  <div className="experience-top">
                    <div>
                      <span className="period">{job.period}</span>
                      <h3>{job.role}</h3>
                      <h4>{job.company}</h4>
                    </div>
                    <span className="location">{job.location}</span>
                  </div>
                  <ul>
                    {job.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <TechTags items={job.technologies} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap section">
          <SectionHeading number="03" eyebrow="SELECTED WORK" title="Projects from my career." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card ${project.accent}`}
                key={project.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveProject(project)}
              >
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <ExternalLink size={18} />
                </div>
                <span className="project-domain">{project.domain}</span>
                <h3>{project.name}</h3>
                <span className="project-period">{project.period}</span>
                <p>{project.description}</p>
                <TechTags items={project.tech.slice(0, 5)} />
                <button className="project-more">View details <ArrowUpRight size={15} /></button>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap section">
          <SectionHeading number="04" eyebrow="TECHNICAL STACK" title="Technologies I work with." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  className="skill-card"
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="skill-icon"><Icon size={19} /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section-wrap section">
          <SectionHeading number="05" eyebrow="EDUCATION & RECOGNITION" title="Academic background and milestones." />
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon"><GraduationCap /></div>
              <span className="card-label">BACHELOR OF ENGINEERING</span>
              <h3>Computer Science</h3>
              <p>JSS Academy of Technical Education, Bangalore</p>
              <small>Visvesvaraya Technological University (VTU) · 68.2%</small>
            </div>
            <div className="education-card">
              <div className="education-icon award"><Sparkles /></div>
              <span className="card-label">RECOGNITION</span>
              <h3>Achieve Excellence Together</h3>
              <p>Certificate · September 2021</p>
              <small>Also received a Spot Award during 2019–2020.</small>
            </div>
            <div className="education-card compact">
              <span className="card-label">INTERMEDIATE OF SCIENCE</span>
              <h3>68.8%</h3>
              <p>Krishak College Dheodha, Nawada (BSEB)</p>
            </div>
            <div className="education-card compact">
              <span className="card-label">HIGH SCHOOL</span>
              <h3>78.6%</h3>
              <p>High School Kawakol, Nawada (BSEB)</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div className="contact-card">
            <div>
              <div className="eyebrow"><span /> 06 · CONTACT</div>
              <h2>Let's build something useful.</h2>
              <p>Open to conversations around software engineering, technology delivery and professional opportunities.</p>
            </div>
            <div className="contact-buttons">
              <a href="mailto:ranjo220@gmail.com"><Mail size={17} /> Email me</a>
              <a href="https://linkedin.com/in/ranjeet220" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Ranjeet Kumar © {new Date().getFullYear()}</span>
        <span>Senior .NET Developer · Technology Lead</span>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setActiveProject(null)}><X /></button>
              <span className="project-domain">{activeProject.domain}</span>
              <h2>{activeProject.name}</h2>
              <span className="project-period">{activeProject.period}</span>
              <p>{activeProject.description}</p>
              <ul>{activeProject.points.map(point => <li key={point}>{point}</li>)}</ul>
              <TechTags items={activeProject.tech} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title }) {
  return (
    <div className="section-heading">
      <span className="heading-number">{number}</span>
      <div>
        <span className="heading-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="info-card">
      <div className="info-icon"><Icon size={18} /></div>
      <div><h3>{title}</h3><p>{text}</p></div>
    </div>
  );
}

function TechTags({ items }) {
  return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>;
}

createRoot(document.getElementById("root")).render(<App />);
