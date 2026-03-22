import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} sm={12} className="footer-brand">
            <img src={logo2} alt="Mohamed Aghnaou" className="footer-logo" />
            <h4>MOHAMED AGHNAOU</h4>
            <p className="footer-subtitle">Ingénieur en Développement Logiciel</p>
            <p className="footer-description">
              Passionné par le développement logiciel, l'IA Générative et les architectures modernes.
              À la recherche d'une opportunité pour contribuer à des projets innovants et à fort impact.
            </p>
          </Col>

          <Col lg={4} md={6} sm={12} className="footer-contact">
            <h5>Contact</h5>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:aghnaoumohamed@gmail.com">aghnaoumohamed@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+212762557446">+212 762 557 446</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Maroc</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/mohamed-aghnaou" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/mohamed-aghnaou
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <span>INPT — Ingénierie en Développement Logiciel</span>
              </div>
            </div>
          </Col>

          <Col lg={4} md={12} sm={12} className="footer-links">
            <h5>Opportunités</h5>
            <div className="opportunity-status">
              <div className="status-indicator">
                <span className="status-dot available"></span>
                <span>Disponible pour emploi</span>
              </div>
              <p className="status-description">
                Je recherche activement une opportunité dans le domaine du développement logiciel,
                idéalement à l'intersection du logiciel et de l'intelligence artificielle.
              </p>
            </div>

            <h5>Navigation</h5>
            <ul className="footer-nav">
              <li><a href="#home">Accueil</a></li>
                <li><a href="#education">Formation</a></li>
              <li><a href="#experiences">Expériences</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#connect">Contact</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col md={6} className="footer-social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-aghnaou" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Aghnaou" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:aghnaoumohamed@gmail.com">
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
          </Col>
          <Col md={6} className="footer-copyright">
            <p>&copy; 2025 Mohamed Aghnaou. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
