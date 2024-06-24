import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png"
import curd from "../../Assets/Projects/curd.png"
import flipkart from "../../Assets/Projects/flipkart.png"
import notes from "../../Assets/Projects/notes.png"
import recipe from "../../Assets/Projects/reciep.png"
import food from "../../Assets/Projects/food.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              // isBlog={true}
              title="Blog Application"
              description="A blog application built with MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, posting, commenting, liking posts, and an admin dashboard for managing users and posts."
              ghLink="https://github.com/techjmi/blog__mern"
              demoLink="https://blog-mern-cfpm.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
    <ProjectCard
      imgPath={food}
      isBlog={false}
      title="Food Web Application"
      description="A food ordering web application built using MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse food items, place orders, and make payments with dummy Stripe integration. Includes an admin dashboard for managing orders and food items."
      ghLink="https://github.com/techjmi/food-web"
      demoLink="https://food-application-web-tios.onrender.com/"
    />
  </Col>
          <Col md={4} className="project-card">
    <ProjectCard
      imgPath={recipe} 
      isBlog={false}
      title="Recipe Search Application"
      description="A recipe search application built using Forkify API. Users can search for recipes and view details such as ingredients and instructions."
      ghLink="https://github.com/techjmi/Recipe_Search"
      demoLink="https://brilliant-sprite-34b3f9.netlify.app/"
    />
  </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes App"
              description="A Notes App built with React.js, featuring a responsive user interface. Supports local storage for saving notes and provides options for organizing and managing notes effectively."
              ghLink="https://github.com/techjmi/notes-app"
              demoLink="https://notes-react-sr48.onrender.com/"
            />
          </Col>
      
          <Col md={4} className="project-card">
    <ProjectCard
      imgPath={curd} 
      isBlog={false}
      title="CRUD Application with Redux Thunk"
      description="A CRUD application built with React.js and Redux Thunk middleware. Implements Create, Read, Update, and Delete operations for managing data. Uses Redux for state management with Thunk middleware for asynchronous actions."
      ghLink="https://github.com/techjmi/Redux-toolkit-thunk"
      demoLink="https://redux-toolkit-thunk.onrender.com/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={flipkart} 
      isBlog={false}
      title="Flipkart Clone"
      description="A clone of Flipkart built with React.js. This project replicates the main functionalities of the Flipkart website. Note: The current version is not responsive."
      ghLink="https://github.com/techjmi/flipkart-clone"
      demoLink="https://flipkart-frontend-50y3.onrender.com/"
    />
  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
