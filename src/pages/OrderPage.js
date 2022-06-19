import { Container, Row, Col } from "react-bootstrap";

const OrderPage = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center fw-bold">How to Order</h1>
        <Row>
          <Col>
            <ul className=" px-5 mx-5 pt-5 text-start">
              <li className="mb-3">
                Orders must be placed at least 24 hours before pick up or
                delivery time.
              </li>
              <li className="mb-3">
                To place an order, please text/email either Alex or Kenny. Your
                order will be confirmed when a response has been made to your
                request. Please allow at least 2 hours for a response before
                attempting to call.
              </li>
              <li className="mb-3">
                <strong className="text-danger">
                  If you did not receive a response to your order request, the
                  order was not placed.{" "}
                </strong>
                Please give us a call if you do not receive a response within 2
                hours of your request. We apologize for the inconvenience.
              </li>
              <li className=" text-danger">
                Please note that a 75% deposit is required at the time the order
                is confirmed via text (this is for the cost of ingredients).
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <h1 className="text-center fw-bold" id="about">
          Additonal Info
        </h1>
        <Row>
          <Col>
            <ul className=" px-5 mx-5 pt-5 text-start">
              <li className="mb-3 fst-italic text-danger ">
                All dishes feed 2-3 people. Unfortunately, since this is a small
                and independent business ran mostly by me alone, no
                customizations to any food items can be made at this time
                (portions of food cannot be changed either).
              </li>

              <li>
                <div className="fw-bold">
                  To cancel your order, please call either Alex or Kenny to
                  confirm the cancellation.
                </div>
                <ol>
                  <li className="mb-3">
                    A full refund of the deposit will be made if the ingredients
                    have not yet been purchased - I typically buy the
                    ingredients every morning to ensure the food is ALWAYS
                    fresh.
                  </li>
                  <li className="mb-3">
                    If the cooking has not started when the cancellation is
                    confirmed, you will be refunded what's remaining of the
                    deposit after grocery costs are accounted for.
                  </li>
                  <li className="mb-3">
                    If the cooking has started, you will not be refunded
                    anything
                  </li>
                </ol>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderPage;
