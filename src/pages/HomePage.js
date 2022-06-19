import { Container, Row } from "react-bootstrap";
import PopularItems from "../components/sections/PopularItems";


const HomePage = (props) => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
