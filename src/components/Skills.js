import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const skillsData = [
    {
      id: 1,
      title: "Développement Back-End",
      category: "backend",
      level: 90,
      icon: "⚙️",
      color: "#AA367C",
      description: "Java, JEE, Spring Boot, Spring Security, Spring Cloud, Spring Data, Keycloak, NodeJs, Express"
    },
    {
      id: 2,
      title: "IA Générative & LLM",
      category: "ai",
      level: 85,
      icon: "🤖",
      color: "#4ECDC4",
      description: "LLM, Prompt Engineering, RAG, IA multimodale, OpenAI API, LLaMA, Spring AI"
    },
    {
      id: 3,
      title: "Agents IA & Automatisation",
      category: "ai",
      level: 82,
      icon: "🧠",
      color: "#7C4DFF",
      description: "IA agentique, Model Context Protocol (MCP), orchestration de workflows, Tool Calling"
    },
    {
      id: 4,
      title: "Développement Front-End",
      category: "frontend",
      level: 85,
      icon: "💻",
      color: "#45B7D1",
      description: "Angular, ReactJs, Next.js, HTML, Tailwind CSS, Bootstrap"
    },
    {
      id: 5,
      title: "DevOps & Cloud",
      category: "devops",
      level: 80,
      icon: "🐳",
      color: "#F39C12",
      description: "Docker, Kubernetes, Kafka, GitLab CI/CD, Jenkins"
    },
    {
      id: 6,
      title: "Bases de Données",
      category: "database",
      level: 88,
      icon: "🗄️",
      color: "#E74C3C",
      description: "MySQL, SQL Server, MongoDB, Oracle Database, PostgreSQL"
    },
    {
      id: 7,
      title: "Architecture Logicielle",
      category: "architecture",
      level: 83,
      icon: "🏗️",
      color: "#2ECC71",
      description: "Microservices, Event Driven Architecture, Event Sourcing, CQRS, Saga Pattern, OAuth2.0, REST APIs, GraphQL, DDD"
    },
    {
      id: 8,
      title: "Soft Skills",
      category: "soft-skills",
      level: 90,
      icon: "🌟",
      color: "#1ABC9C",
      description: "Communication, Esprit d'équipe, Capacité d'Adaptation, Ponctualité, Autonomie"
    }
  ];

  const categories = [
    { id: "all", label: "Tous", icon: "🚀" },
    { id: "backend", label: "Back-End", icon: "⚙️" },
    { id: "frontend", label: "Front-End", icon: "💻" },
    { id: "ai", label: "IA & LLM", icon: "🤖" },
    { id: "devops", label: "DevOps", icon: "🐳" },
    { id: "database", label: "Bases de Données", icon: "🗄️" },
    { id: "architecture", label: "Architecture", icon: "🏗️" },
    { id: "soft-skills", label: "Soft Skills", icon: "🌟" }
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const handleCardAnimation = (skillId) => {
    setAnimatedCards(prev => new Set([...prev, skillId]));
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>Mes Compétences</h2>
                    <p>
                      Découvrez mon expertise technique acquise à travers mes expériences en développement backend, 
                      frontend, intelligence artificielle et architecture logicielle. Chaque compétence représente 
                      des années d'apprentissage et de pratique dans des projets concrets.
                    </p>

                    <div className="skill-categories">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          <span className="category-icon">{category.icon}</span>
                          <span className="category-label">{category.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="skills-grid">
                      {filteredSkills.map((skill, index) => (
                        <TrackVisibility key={skill.id} partialVisibility={true}>
                          {({ isVisible }) => {
                            if (isVisible && !animatedCards.has(skill.id)) {
                              setTimeout(() => handleCardAnimation(skill.id), index * 100);
                            }
                            return (
                              <div
                                className={`skill-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                                style={{
                                  animationDelay: `${index * 0.1}s`,
                                  '--skill-color': skill.color
                                }}
                              >
                                <div className="skill-icon">{skill.icon}</div>
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>

                                <div className="skill-level">
                                  <div className="level-label">
                                    <span>Niveau</span>
                                    <span>{skill.level}%</span>
                                  </div>
                                  <div className="progress-bar">
                                    <div
                                      className="progress-fill"
                                      style={{
                                        width: isVisible ? `${skill.level}%` : '0%',
                                        backgroundColor: skill.color,
                                        transition: 'width 1.5s ease-in-out'
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </TrackVisibility>
                      ))}
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
