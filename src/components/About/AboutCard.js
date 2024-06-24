import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Greetings, I'm <span className="purple">Md Shamim Akhter</span>, a budding MERN (MongoDB, Express.js, React, Node.js) developer with a strong appetite for learning and a knack for problem-solving.
        <br />
        <br />
        As a fresher, I'm dedicated to crafting web applications with a unique, contemporary look-and-feel. My journey in web development has just begun, and I approach it with enthusiasm, ready to tackle challenges and create innovative solutions.
        <br />
        <br />
        Explore my work in the <Link to="/projects" className="purple">Projects</Link> section.
        <br />
        <br />
        You're welcome to connect with me on <a href="https://www.linkedin.com/in/md-shamim-akhter-b12624193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="purple">LinkedIn</a>.
        <br />
        <br />
        I'm open to job opportunities where I can contribute, learn, and grow. If you have a fitting opportunity, please feel free to <Button className="mt-3">
        <IoCallOutline className="me-2"/>
          Contact Me</Button>
      </p>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
