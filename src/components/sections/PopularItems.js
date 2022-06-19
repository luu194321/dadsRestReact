import { Container, Row, Col } from "react-bootstrap";
import { FOODITEMS } from "../../assets/shared/FOODITEMS";

const FoodItem = () => {
  return FOODITEMS.map(
    (item) =>
      item.popular && (
        <Col key={item.id}>
          <figure>
            <img src={item.src} className="img-fluid rounded figure-img" />
            <figcaption className="figure-caption d-none d-md-block">
              {item.description}
            </figcaption>
          </figure>
        </Col>
      )
  );
};

const PopularItems = () => {
  return (
    <section>
      <Container fluid className="py-5">
        <Row>
          <h3 className="text-center mb-5 fw-bold fs-1">Popular Items</h3>
        </Row>

        <Row>
          <FoodItem />
        </Row>
      </Container>
    </section>
  );
};

export default PopularItems;
