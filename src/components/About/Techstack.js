import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithubBadge,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiHtml5 size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">HTML</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiCss3 size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">CSS</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiGit size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">Git</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiGithubBadge size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">GitHub</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiJavascript1 size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">JavaScript</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiReact size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">React.js</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <FaReact size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">React Native</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiNodejs size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">Node.js</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <DiMongodb size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">MongoDB</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <SiTailwindcss size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">Tailwind CSS</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <SiJsonwebtokens size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">JWT</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <SiNextdotjs size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">Next.js</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4} lg={3} className="mb-4">
        <Card className="h-100">
          <Card.Body className="d-flex align-items-center">
            <SiFirebase size={40} className="me-1 text-primary" />
            <Card.Title className="mb-0 purple">Firebase</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Techstack;
