import { Container, Row, Col, Card } from "react-bootstrap";
import PopularItems from "../components/sections/PopularItems";

const AboutMe = () => {
  <section>
    <Container className="border-top bg-default">
      {" "}
      <h2 class="row justify-content-center pt-5 fw-bold fs-1">About Me</h2>
      <p class="row justify-content-center text-center mt-5 fs-5">
        For the past 30 years, I have been cooking creative and delicous Chinese
        and Vietnamese inspired dishes in the Dallas/Fort-worth area. Being born
        in Vietnam, I was brought up around great Vietnamese food that I've
        attempted to perfect since coming to America in 1986. I hope to bring
        you the joy with my cooking - not only with the delicousiousness of the
        food itself, but also the moments that are created and shared during the
        meal.
      </p>
    </Container>
  </section>;
};

const CateringInfo = () => {
  <section>
    <Container>
      <Row>
        <h3 class="catering-title text-uppercase text-center py-5 mt-5">
          Perfect for every occasion
        </h3>
      </Row>
      <Row>
        <Col className=" border-0 text-center">
          <Card>
            <img
              src="../../assets/images/toastingGlasses.svg"
              class="toasting-glasses"
              alt="..."
            />
            <Card.Body className="bg-default">
              <Card.Title>Event Catering</Card.Title>
              <Card.Text>
                Celebrate life's special moments with a meal everyone will love.
                <ul class="list-group list-group-flush d-none d-md-block">
                  <li class="list-group-item">Birthday</li>
                  <li class="list-group-item">Anniversary</li>
                  <li class="list-group-item">Family & Friends Gathering</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>;
};

const HomePage = (props) => {
  return (
    <div>
      <div className="hero-image" alt="cooking image">
        <Container className="hero-text">
          <Row>
            <h1
              id="about"
              className="hero-text col text-center d-none d-sm-block "
            >
              Authentic Vietnamese Cuisine
            </h1>
          </Row>
        </Container>
        <br />
      </div>
      <PopularItems />
      <AboutMe></AboutMe>
      <CateringInfo />
    </div>
  );
};

export default HomePage;
