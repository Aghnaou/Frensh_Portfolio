import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profil from "../assets/img/profil3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Backend Developer", "Fullstack Developer", "AI Engineer"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum, period])

  return (
    <section className="banner modern-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <div className="banner-content">
                  <button onClick={() => {
                    const link = document.createElement('a');
                    link.href = 'Mohamed-Aghnaou-CV-FRANCAIS.pdf';
                    link.download = 'Mohamed-Aghnaou-CV-FRANCAIS.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }} className="cv-download-btn">
                    <span className="tagline">📄 Télécharger CV</span>
                  </button>

                  <h1 className="modern-title">
                    <span className="greeting">Salut! Je suis</span>
                    <span className="name-highlight">MOHAMED AGHNAOU</span>
                    <span className="role-container">
                      <span className="txt-rotate" dataPeriod="1000" data-rotate='["Backend Developer", "Fullstack Developer", "AI Engineer"]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </span>
                  </h1>

                  <div className="description-container">
                    <p className="main-description">
                      Ingénieur en <strong>Développement Logiciel</strong> diplômé de l'<strong>INPT</strong>, compétent en développement <strong>Backend & Frontend</strong>, conception de bases de données et intégration applicative. Expérimenté en <strong>Java/Spring Boot</strong>, <strong>Angular</strong>, <strong>IA Générative (RAG, MCP)</strong> et architectures <strong>Microservices</strong>.
                    </p>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="profile-image-container">
                    <img src={profil} alt="Mohamed Aghnaou Profile" className="profile-image"/>
                    <div className="image-decoration"></div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
