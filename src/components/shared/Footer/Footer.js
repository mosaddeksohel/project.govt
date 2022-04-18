import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import govt from "./../../../Images/download.png";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>প‌রিকল্পনা ও বাস্তবায়নে:‌ জেলা প্রশাসন, রংপুর</h1>
          <img className=" fluid w-30% h-40%" src={govt} />
          <h5>কা‌রিগ‌রি সহ‌যো‌গিতায়: </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
