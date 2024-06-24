import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import StarParticle from './Particle';

const ContactMe = () => (
  <Container className="pb-5" style={{marginTop:"90px"}}>
    <StarParticle />
    <Row className="justify-content-center pb-3">
      <Col md={6} sm={10} className='my-5'>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Form>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={8} placeholder="Enter your message" />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Send
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default ContactMe;
