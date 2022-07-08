import React from "react";
import "./register.css";

import { Row, Col, Form, Button } from "react-bootstrap";

function Register() {
  return (
    <>
      <Row>
        <Col lg={6} className="content-yellow">
          <img
            src="https://s3-alpha-sig.figma.com/img/86b2/055d/76c7e3577554580136d5f65222046a21?Expires=1658102400&Signature=DtZnu8gFAcjygeIM-w2ueAsVvIl2URWcrN9PBnQGNWydeawyAojVQlDLFN08OGSmbluZpWY6sKKG0uItP06MBFeffmmW86y~NG3wIoAt2wtBvawhRKS63g2tXkGOQFougEko8Vy6VtP-Psuct4h0fI4J7xmSV4NhOmFz3vOKktVOJ8HVEKxpRUU5QGEktDeKCAJwKIxKwG8TTQJ44pGce6E5nRt9580Sme7hiHPWqdB~ByR9FZxzWfavJ2-FSKkPGA5JBU24~IX31VItMdAGpPeiljh52y~3cqURXV5zIUo2VNokWKy5lTON8HSWxAiaacbpGcbgT4MbfoJUEFHMPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="opening-img"
            className="opening-image"
          />
        </Col>
        <Col lg={6}>
          <h5 className="regis-title">Let's Get Started!</h5>
          <p className="regis-description">
            Create new account to access all features
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-name"
                  type="name"
                  placeholder="name"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address*</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-regis"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-regis"
                  type="email"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label>Create New Password</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-regis"
                  type="password"
                  placeholder="Create New Password"
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3 content-check"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="I agree to terms & conditions"
              />
            </Form.Group>
            <div className="content-center">
              <Button className="btn-regis" variant="warning" type="submit">
                Register Account
              </Button>
            </div>
            <div>
              <p className="text-bottom">
                Already have account?{" "}
                <a className="link-login" href="..">
                  Log in Here
                </a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Register;
