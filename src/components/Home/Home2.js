import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className=""> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a{" "}
              <i>
                <b className="purple">
                  MERN (MongoDB, Express.js, React, Node.js)
                </b>
              </i>{" "}
              Developer, specializing in crafting the visual and interactive
              components of web applications to enhance their overall success.
              <br />
              <br />
              My expertise lies in creating dynamic, responsive, and visually
              appealing user interfaces that provide an exceptional user
              experience. I thrive on solving complex problems and implementing
              efficient solutions using modern web technologies.
              <br />
              <br />
              In addition to my proficiency with the MERN stack, I have a strong
              foundation in{" "}
              <i>
                <b className="purple">HTML</b>
              </i>
              ,{" "}
              <i>
                <b className="purple">CSS</b>
              </i>
              , and{" "}
              <i>
                <b className="purple">JavaScript</b>
              </i>
              . I am passionate about staying up-to-date with the latest
              industry trends and continuously improving my skills to deliver
              cutting-edge web applications.
              <br />
              <br />
              I enjoy collaborating with cross-functional teams to develop
              scalable and robust web applications. Whether it's building a
              sleek front-end or designing a powerful back-end architecture, I
              am committed to delivering high-quality code and a seamless user
              experience.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <i>
                <b className="purple">Node.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">CHECK OUT MY PROFILE ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/techjmi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-shamim-akhter-b12624193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
