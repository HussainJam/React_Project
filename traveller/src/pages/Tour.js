import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import NavbarMain from "../components/Navbar";
import khunjrab from "../img/khunjrab (1).jpg"
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";

const Tour = () => (
  <div>
  <NavbarMain></NavbarMain>
  <div className="subComponent">
  <Container>
    <section className="tour-cover item-center">
      <img src={khunjrab} alt="" />
      <h1>Khunjarab</h1>
      <h4>Baltistan</h4>
    </section>
    <section className="tour-info">
      <Row>
        <Col sm="8">
          <div className="tour-desc">
            <p>
            Khunjerab Pass is the famous mountain of Pakistan. Khunjerab Pass is sometimes called “Khunerjab Pass”. It is located in the Karakoram 
            Mountains on the northern border of Pakistan with China. The height of the Khunjerab Pass is 4693m. Khunjerab Pass is the 
            border between Pakistan and China through the Karakoram Highway. The word Khunjerab Pass is derived from “Wakhi language”.
             Chinese Ambassador Mr.Yao Jingsaid visit visa of Pakistan to Chinese citizens will be issued through Khunjerab Pass.
            </p>
            <p>
            July is the peak season for tourists to visit Khunjerab Pass. The weather of Khunjerab Pass is too chilly. It’s a marvelous 
            place with striking mountains and sceneries. There is no tea and food stalls at Khunjerab pass so take your eatables with you.
             Khunjerab Pass has a very beautiful scenic view.There are many hotels and resorts in Khunjerab Pass for tourists. Bus service 
             is available dai between Gilgit and Kashgar through the Karakorum highway. Many international tourists visit this place and relish the striking view. 
            </p>
          </div>
        </Col>
        <Col sm="4">
          <div className="tour-gallery">
            <a href={khunjrab}>
              <img src={khunjrab} alt="" />
            </a>
            <a href={imgCard2}>
              <img src={imgCard2} alt="" />
            </a>
            <a href={imgCard3}>
              <img src={imgCard3} alt="" />
            </a>
            <a href={imgCard4}>
              <img src={imgCard4} alt="" />
            </a>
          </div>
        </Col>
      </Row>
    </section>
  </Container>
  <section className="reviews">
    <Container>
      <section className="tour-msg text-center">
        <h1>Reviews and Suggestions</h1>
        <p>We're glad to hear something from you.</p>
        <form action="">
          <Row>
            <Col sm="6">
              <input
                type="text"
                name="Name"
                id="reviewer-name"
                placeholder="Your Name"
                required
              />
              <br />
              <input
                type="email"
                name="Email"
                id="reviewer-email"
                placeholder="Your email"
                required
              />
            </Col>
            <Col>
              <textarea
                name="Message"
                id="reviewer-message"
                rows="4"
                placeholder="Your Message"
              />
            </Col>
          </Row>
          <Button outline color="secondary" className="float-right">
            Submit
          </Button>
        </form>
      </section>
    </Container>
  </section>
</div>

  </div>
);

export default Tour;
