import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Parcours Académique</h2>
                  <p>Ma formation académique qui a construit mes bases solides en ingénierie logicielle.</p>

                  <div className="education-timeline">
                    <div className="education-card">
                      <div className="education-year">2022 — 2025</div>
                      <div className="education-content">
                        <h3>Ingénierie en Développement Logiciel</h3>
                        <h4>Institut National des Postes et Télécommunications (INPT)</h4>
                        <p>Formation approfondie en conception et réalisation de solutions logicielles, développement backend/frontend, bases de données et intégration applicative.</p>
                        <div className="education-tags">
                          <span>Java</span><span>Spring Boot</span><span>Angular</span>
                          <span>Microservices</span><span>IA</span>
                        </div>
                      </div>
                    </div>

                    <div className="education-card">
                      <div className="education-year">2020 — 2022</div>
                      <div className="education-content">
                        <h3>CPGE — Classes Préparatoires MP</h3>
                        <h4>Lycée Réda Slaoui · Agadir</h4>
                        <p>Classes préparatoires aux grandes écoles, filière Mathématiques et Physique. Formation intensive en mathématiques, physique et algorithmique.</p>
                        <div className="education-tags">
                          <span>Mathématiques</span><span>Physique</span><span>Algorithmique</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};