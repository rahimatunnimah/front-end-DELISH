import React from "react";
import "./login.css";
import { Row, Col, Form, Button } from "react-bootstrap";
function Login() {
  return (
    <div className="App">
      <Row>
        <Col lg={6} className="content-yellow">
          <img
            src="https://s3-alpha-sig.figma.com/img/86b2/055d/76c7e3577554580136d5f65222046a21?Expires=1658102400&Signature=DtZnu8gFAcjygeIM-w2ueAsVvIl2URWcrN9PBnQGNWydeawyAojVQlDLFN08OGSmbluZpWY6sKKG0uItP06MBFeffmmW86y~NG3wIoAt2wtBvawhRKS63g2tXkGOQFougEko8Vy6VtP-Psuct4h0fI4J7xmSV4NhOmFz3vOKktVOJ8HVEKxpRUU5QGEktDeKCAJwKIxKwG8TTQJ44pGce6E5nRt9580Sme7hiHPWqdB~ByR9FZxzWfavJ2-FSKkPGA5JBU24~IX31VItMdAGpPeiljh52y~3cqURXV5zIUo2VNokWKy5lTON8HSWxAiaacbpGcbgT4MbfoJUEFHMPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="opening-img"
            className="opening-image"
          />
        </Col>
        <Col lg={6}>
          <div className="content-center">
            <h5 className="login-title">WELCOME</h5>
          </div>
          <div className="content-center">
            <p className="login-description">
              Log in into your exiting account
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form-label">E-mail</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-email"
                  type="email"
                  placeholder="examplexxx@gmail.com"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <div className="content-center">
                <Form.Control
                  className="form-pswd"
                  type="password"
                  placeholder="Password"
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
              <Button className="btn-login" variant="warning" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="link-forgot">
            <a className="link" href="...">
              Forgot Password?
            </a>
          </div>
          <div>
            <p className="text-bottom">
              Don't have an account?{" "}
              <a className="link-signup" href="..">
                Sign Up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
