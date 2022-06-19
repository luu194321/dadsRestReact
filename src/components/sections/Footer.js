import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col sm="3">
            <h3>Hours</h3>
            <h5>Sunday -- Saturday</h5>
            <h6>11am -- 10pm</h6>
          </Col>
          <Col sm="5" className="text-center">
            <h3>Contacts</h3>
            <p>Kenny's Cell: 817-888-8888</p>
            <p>Alex's Cell: 817-888-8888</p>
            <p>Email: KennyLuuCatering@gmail.com</p>
          </Col>
          <Col sm="4">
            <h3>Location</h3>
            <p>Arlington, Texas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
