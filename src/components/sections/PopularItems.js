import { Container, Row, Col } from "react-bootstrap";
import { FOODITEMS } from "../../assets/shared/FOODITEMS";

const PopularItems = () => {
  return (
    <section>
      <Container>
        <Row>
          <h3 className="text-center mb-5 fw-bold fs-1">Popular Items</h3>
        </Row>
        <Row>
          <Col>
            <figure className="figure">
              <img
                src="../assets/images/asianWings.jpg"
                className="figure-img img-fluid rounded"
                alt="asian chicken wings"
              />
              <figcaption className="figure-caption d-none d-md-block">
                Nuoc mam (fish sauce) wings deep fried to perfection.
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PopularItems;
