import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeInformation = () => {
  return (
    <div>
      <Row>
        <Container>
          <h3>অনলাইন সেবা</h3>
          <Row className="col-md-6 list-1">
            <Col>
              <h5>করদাতার তথ্য</h5>
              <h5>কর পরিষোধ </h5>
              <h5>করদাতার তথ্য ‌ ‌</h5>
            </Col>
            <Col>
              <h5>ট্রেড লাই‌সেন্স যাচাই ‌</h5>
              <h5>সনদ যাচাই</h5>
              <h5>আ‌বেদ‌নের অবস্থা যাচাই</h5>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3>আমা‌দের অনলাইন সেবা সমূহ</h3>
          <Row className="justify-content-left">
            <Col>
              <h5>উত্তরাধিকার সনদ</h5>
              <h5> মৃত্যু সনদ</h5>
              <h5>জাতীয়তা সনদ </h5>
              <h5>ভূমিহীন সনদ </h5>
              <h5>উপজাতি সনদ </h5>
              <h5> চারিত্রিক সনদ</h5>
              <h5> মুক্তিযোদ্ধা সনদ</h5>
              <h5> বার্ষিক আয়ের সনদ</h5>
              <h5> ট্রেড লাই‌সেন্স</h5>
              <h5>ভাতার আ‌বেদন </h5>
              <h5> ভিসা যাচাই</h5>
            </Col>
            <Col>
              <h5>এতিম সনদ </h5>
              <h5>বিবাহিত সনদ </h5>
              <h5> মাসিক আয়ের সনদ </h5>
              <h5>অবিবাহিত সনদ</h5>
              <h5>পুনঃবিবাহ সনদ</h5>
              <h5>বেকারত্ব সনদ</h5>
              <h5>বিবিধ সনদ</h5>
              <h5>ভূ‌মিহীন সনদ</h5>
              <h5>একই না‌মের প্রত‌্যয়ন</h5>
              <h5>জন্ম নিবন্ধন আ‌বেদন</h5>
              <h5>ইউ.পি প্রদত্ত সকল নাগ‌রিক সেবা</h5>
            </Col>
          </Row>
        </Container>
        <h3>ইউ‌নিয়ন প‌রিষদ তথ‌্য</h3>
      </Row>
    </div>
  );
};

export default HomeInformation;
