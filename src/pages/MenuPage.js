import { Col, Row, Container } from "react-bootstrap";
import { FOODITEMS } from "../assets/shared/FOODITEMS";

const infoParagraph = `All dishes feed 2-3 people. Unfortunately, since this is a small and
independent business ran mostly by me alone, no customizations to any food
items can be made at this time (portions of food cannot be changed
either). However, please inform us of any food allergies you or your guests may have.`;

const MenuItems = ({ foodItem }) => {
  return (
    <Col md={4} lg={4} className="menu-item py-3">
      <div className="d-flex justify-content-between">
        <h3 className="align-self-center">{foodItem.name}</h3>
        <div className="fw-bold">{foodItem.price}</div>
      </div>
      <p className="text-start fst-italic">{foodItem.description}</p>
    </Col>
  );
};

const MenuPageHero = () => {
  return (
    <section className="mb-4 pb-4">
      <div class="menu-hero-image" alt="cooking image">
        <div class="menu-header text-center">
          <h1 class="text-uppercase menu-title">Menu</h1>
        </div>
        <div class="menu-header-text text-center">
          <p class="menu-text">
            The mission is simple: Serve delicious, affordable food that guests
            will want to return to for every gathering.
          </p>
        </div>
      </div>
    </section>
  );
};

const MenuPage = () => {
  return (
    <>
      <MenuPageHero />
      <Container>
        <Row>
          {FOODITEMS.map((item) => (
            <MenuItems foodItem={item} key={item.id} id={item.id} />
          ))}
        </Row>
        <p class="px-5 py-5 text-center fst-italic fw-bold ">{infoParagraph}</p>
      </Container>
    </>
  );
};

export default MenuPage;

// <Row md={3} className="mb-5">
// <Col md={4} lg={4} className="menu-foodItem">
//   <div className="d-flex justify-content-between">
//     <h3 className="align-self-center">{item.name}</h3>
//     <div className="fw-bold">{item.price}</div>
//     <p>{item.description}</p>
//   </div>
// </Col>
// </Row>

// {FOODITEMS.map((item)=>)}
