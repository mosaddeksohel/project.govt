import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import govt from "./../../../Images/download.png";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="container3 f-container">
      <Row className="col-md-9 ">
        <Col className="row d-flex align-items-center justify-content-center">
          <div className="col-md-4 col-5">
            <p>প‌রিকল্পনা ও বাস্তবায়নে: জেলা প্রশাসন, রংপুর</p>
          </div>
          <img className="col-md-4 footer-img" src={govt} alt="" />
          <div className="col-md-4 col-5">
            <p>কা‌রিগ‌রি সহ‌যো‌গিতায়:</p>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
