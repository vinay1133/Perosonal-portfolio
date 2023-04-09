import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  //submit function
  // const handleSubmit = async (e) => {
  //   if (result.code === 200) {
  //     setStatus({ success: true, message: "Message sent successfully" });
  //   } else {
  //     setStatus({
  //       success: false,
  //       message: "Something went wrong, please try again later.",
  //     });
  //   }
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_xe3mxeo",
        "template_9sdsag4",
        form.current,
        "_gBFvTWQ8S_QZXOUC"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          if (result.text === "OK") {
            setButtonText("Send");
            setStatus({ success: true, message: "Message sent successfully" });
          } else {
            setStatus({
              success: false,
              message: "Something went wrong, please try again later.",
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us"></img>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="First Name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" name="phone" placeholder="Phone No." />
                </Col>
                <Col className="px-1">
                  <textarea
                    row="6"
                    name="message"
                    placeholder="Message"
                    style={{ resize: "none" }}
                    required
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              <Row>
                {/* incase we get an error or msg is sent successfully */}
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
