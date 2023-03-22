import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/Animation1-unscreen.gif";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resume from "../assets/Vinay's Resume.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Data Scientist", "Math Enthusiast", "Statistician"];
  const [text, setText] = useState("");
  const period = 2000;
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {"Hi I'm Vinay "}
                    <span className="wrap" style={{ color: "burlywood" }}>
                      {text}
                    </span>
                  </h1>
                  <p>
                    An independent and self-motivated under-graduate, also a
                    math enthusiast who is passionate about learning new things.
                    Love to learn some of the tips and tricks to solve math
                    problems. Also, like to play simulation games, read math
                    related quotes & even listening to music in leisure time.
                  </p>
                  <a href={resume} download="Vinay's Resume">
                    <button>
                      My Resume <ArrowRightCircle size={32} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" length="450" width={450} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
