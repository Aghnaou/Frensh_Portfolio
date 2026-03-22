import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Développeur Java - Research Assistant",
      company: "Oracle",
      location: "Casablanca, Maroc",
      period: "Janvier 2025 - Septembre 2025",
      type: "Stage PFE",
      description: [
        "Conception et implémentation d'une fonctionnalité backend permettant aux utilisateurs de dissocier les Intercompany Cross Charge Journals (ICCJs) directement depuis l'interface NetSuite.",
        "Assuré l'intégrité des données financières en respectant les contraintes de périodes comptables, les règles de permissions, et en garantissant l'atomicité des opérations de base de données.",
        "Mis en place une stratégie de tests complète : tests unitaires, tests de composants et tests E2E, assurant la fiabilité de la fonctionnalité en environnement de production."
      ],
      technologies: ["Java", "NetSuite ERP", "SuiteQL", "Oracle Database", "JUnit", "Mockito", "Git", "GitLab", "Jira", "TeamCity"]
    },
    {
      id: 2,
      title: "Développeur Fullstack",
      company: "Royal Air Maroc",
      location: "Casablanca, Maroc",
      period: "Juin 2024 - Août 2024",
      type: "Stage",
      description: [
        "Mise en place d'une application web visant à promouvoir le tourisme durable et les destinations naturelles.",
        "Exploration et réservation de voyages écologiques via des itinéraires interactifs.",
        "Gestion des utilisateurs avec authentification sécurisée et avis en temps réel.",
        "Intégration de paiements en ligne sécurisés pour les réservations."
      ],
      technologies: ["NodeJs", "Express", "MongoDB", "Mongoose", "Pug", "Visual Studio", "Git", "Github"]
    }
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Expériences Professionnelles</h2>
                  <p>
                    Découvrez mon parcours professionnel à travers mes expériences chez Oracle et Royal Air Maroc. 
                    Chaque mission m'a permis de développer des compétences solides en développement logiciel, 
                    de la conception backend à l'intégration de systèmes complexes.
                  </p>

                  <div className="experience-content">
                    <Row>
                      <Col md={4}>
                        <div className="experience-tabs">
                          {experiences.map((exp, index) => (
                            <div
                              key={exp.id}
                              className={`experience-tab ${selectedExp === index ? 'active' : ''}`}
                              onClick={() => setSelectedExp(index)}
                            >
                              <h5>{exp.title}</h5>
                              <span className="company">{exp.company}</span>
                              <span className="period">{exp.period}</span>
                            </div>
                          ))}
                        </div>
                      </Col>

                      <Col md={8}>
                        <div className="experience-details">
                          <div className="experience-header">
                            <h3>{experiences[selectedExp].title}</h3>
                            <div className="experience-meta">
                              <span className="company-name">{experiences[selectedExp].company}</span>
                              <span className="location">{experiences[selectedExp].location}</span>
                              <span className="period">{experiences[selectedExp].period}</span>
                              <span className="type">{experiences[selectedExp].type}</span>
                            </div>
                          </div>

                          <div className="experience-description">
                            <h4>Missions réalisées :</h4>
                            <ul>
                              {experiences[selectedExp].description.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="experience-technologies">
                            <h4>Technologies utilisées :</h4>
                            <div className="tech-tags">
                              {experiences[selectedExp].technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
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
