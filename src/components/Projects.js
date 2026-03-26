import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Enterprise Knowledge Management AI Assistant",
      shortDescription: "Employees ask questions — the AI answers from internal docs instantly",
      fullDescription: "A company had tons of internal documentation that nobody could search efficiently. Built an AI assistant using RAG that lets employees query all company knowledge in plain English — dramatically reducing time spent searching for information.",
      imgUrl: projImg1,
      githubUrl: "#",
      liveUrl: "#",
      category: "ai",
      isMobile: false,
      technologies: ["Java", "Spring Boot", "Spring AI", "OpenAI API", "MCP", "RAG", "Angular", "Python", "Node.js"],
      status: "Completed",
      year: "2025",
      difficulty: "Expert",
      features: [
        "Natural language Q&A from unstructured internal documents",
        "RAG pipeline enriching queries with relevant context",
        "AI agent using MCP protocol to orchestrate multiple data sources",
        "Seamless integration with existing company systems"
      ]
    },
    {
  id: 2,
  title: "BiblioManager — Système de Gestion de Bibliothèque avec IA",
  shortDescription: "Une plateforme bibliothèque boostée par un chatbot RAG qui répond aux questions sur les livres en langage naturel",
  fullDescription: "Développement d'un système de gestion de bibliothèque fullstack avec intégration d'un chatbot IA Générative basé sur RAG (Retrieval-Augmented Generation). L'assistant comprend les questions en langage naturel, conserve le contexte de la conversation grâce à la mémoire de chat, et récupère les livres les plus pertinents via des embeddings vectoriels depuis une base de données MySQL en temps réel. Compatible Google Gemini et OpenAI — interchangeables sans modifier le code. Développé entièrement en Java avec LangChain4j — une rareté dans le monde du freelance IA.",
  imgUrl: projImg2,
  githubUrl: "#",
  liveUrl: "#",
  category: "fullstack",
  isMobile: false,
  technologies: ["ReactJs", "Spring Boot", "Java", "LangChain4j", "Google Gemini API", "RAG", "Vector Embeddings", "MySQL", "REST APIs"],
  status: "Terminé",
  year: "2025",
  difficulty: "Expert",
  features: [
    "Chatbot RAG répondant aux questions en langage naturel sur le catalogue de livres",
    "Mémoire de conversation maintenant le contexte sur plusieurs échanges",
    "Embeddings vectoriels sémantiques pour la recherche intelligente de livres depuis MySQL",
    "Support multi-LLM — Gemini et OpenAI interchangeables sans modifier le code",
    "Gestion du catalogue de livres, réservations et avis utilisateurs"
  ]
},
    {
      id: 3,
      title: "ReserveINPT — Mobile Booking App",
      shortDescription: "Campus facility booking app — from request to confirmation in seconds",
      fullDescription: "Students at INPT wasted time trying to reserve sports fields and rooms. Built a native Android app that lets them book, reschedule or cancel reservations instantly — with an admin panel for facility management.",
      imgUrl: projImg3,
      githubUrl: "#",
      liveUrl: "#",
      category: "mobile",
      isMobile: true,
      technologies: ["Java", "Android Studio", "Android SDK"],
      status: "Completed",
      year: "2023",
      difficulty: "Intermediate",
      features: [
        "Real-time facility availability and booking",
        "Create, edit and cancel reservations in seconds",
        "Admin panel for managing facilities and student accounts",
        "Clean native Android UI with smooth navigation"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀", count: projects.length },
    { id: "ai", label: "AI & RAG", icon: "🤖", count: projects.filter(p => p.category === "ai").length },
    { id: "fullstack", label: "Fullstack", icon: "💻", count: projects.filter(p => p.category === "fullstack").length },
    { id: "mobile", label: "Mobile", icon: "📱", count: projects.filter(p => p.category === "mobile").length }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);
  const getDifficultyColor = (d) => ({ "Intermediate": "#F39C12", "Advanced": "#E74C3C", "Expert": "#9B59B6" }[d] || "#95A5A6");
  const getStatusColor = (s) => ({ "Completed": "#2ECC71" }[s] || "#95A5A6");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="project-header">
                    <h2>Recent Work</h2>
                    <p>Real projects, real problems solved. Here's a selection of what I've built — each one delivered with clean code, proper testing and production-ready quality.</p>
                  </div>
                  <div className="project-categories">
                    {categories.map((c) => (
                      <button key={c.id} className={`category-filter ${activeFilter === c.id ? 'active' : ''}`} onClick={() => setActiveFilter(c.id)}>
                        <span className="category-icon">{c.icon}</span>
                        <span className="category-label">{c.label}</span>
                        <span className="category-count">({c.count})</span>
                      </button>
                    ))}
                  </div>
                  <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                      <TrackVisibility key={project.id} partialVisibility={true}>
                        {({ isVisible }) => (
                          <div
                            className={`project-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            {/* ---- IMAGE AREA ---- */}
                            <div className={`project-image ${project.isMobile ? 'mobile-mockup' : ''}`}>
                              <img src={project.imgUrl} alt={project.title} />
                              <div className="project-overlay">
                                <div className="project-links">
                                  {project.githubUrl !== "#" && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link"><span>📂</span> Code</a>}
                                  {project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link"><span>🚀</span> Demo</a>}
                                </div>
                              </div>
                            </div>

                            <div className="project-content">
                              <div className="project-meta">
                                <span className="project-year">{project.year}</span>
                                <span className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>{project.status}</span>
                                <span className="project-difficulty" style={{ backgroundColor: getDifficultyColor(project.difficulty) }}>{project.difficulty}</span>
                              </div>
                              <h3>{project.title}</h3>
                              <p className="project-short-desc">{project.shortDescription}</p>
                              {hoveredProject === project.id && (
                                <div className="project-details animate__animated animate__fadeIn">
                                  <p className="project-full-desc">{project.fullDescription}</p>
                                  <div className="project-features">
                                    <h5>What was delivered:</h5>
                                    <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                                  </div>
                                </div>
                              )}
                              <div className="project-technologies">
                                {project.technologies.map((tech, i) => <span key={i} className="tech-badge">{tech}</span>)}
                              </div>
                            </div>
                          </div>
                        )}
                      </TrackVisibility>
                    ))}
                  </div>
                  <div className="project-stats">
                    <div className="stat-item"><h4>{projects.length}+</h4><p>Projects delivered</p></div>
                    <div className="stat-item"><h4>$20</h4><p>Hourly rate</p></div>
                    <div className="stat-item"><h4>{new Set(projects.flatMap(p => p.technologies)).size}+</h4><p>Technologies</p></div>
                    <div className="stat-item"><h4>3</h4><p>Languages spoken</p></div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};