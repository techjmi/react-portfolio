import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaArrowDown } from "react-icons/fa";
const url="https://ideogram.ai/assets/image/lossless/response/ya3Qak5IRU-nwkWHJa63Fw"
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MD SHAMIM AKHTER</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
              <Button className="btn btn-primary cursor-pointer " style={{ marginLeft: "37px", marginBottom: "20px"}}>
      <FaArrowDown className="me-3" />
      Download Cv
    </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={url}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
