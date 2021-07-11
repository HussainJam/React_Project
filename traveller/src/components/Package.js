import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/khunjrab (1).jpg";
import imgCard2 from "../img/khunjrab (2).jpg";
import imgCard3 from "../img/caro (2).jpg";
import imgCard4 from "../img/caro (4).jpg";
import imgCard5 from "../img/caro (1).jpg";
import imgCard6 from "../img/beach.jpg";
import imgCard7 from "../img/q.jpg";
import imgCard8 from "../img/kp.jpg";
import imgCard9 from "../img/is.jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
const tours = [
  {
    id: 1,
    category: ["mountain", "climbing"],
    img: imgCard1,
    alt: "blah blah",
    title: "Khunjarab",
    subtitle: "Baltistan"
  },
  {
    id: 2,
    category: ["beach", "mountain", "climbing"],
    img: imgCard2,
    alt: "blah blah",
    title: "Kurakuram Highway",
    subtitle: "K2"
  },
  {
    id: 3,
    category: ["mosquee", "tomb"],
    img: imgCard3,
    alt: "blah blah",
    title: "Badshahi Mosque",
    subtitle: "Lahore"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Minar e Pakistan",
    subtitle: "Punjab"
  },
  {
    id: 5,
    category: ["mosquee", "tomb", "beach"],
    img: imgCard5,
    alt: "blah blah",
    title: "Kartarpur",
    subtitle: "Sikh"
  },
  {
    id: 6,
    category: ["beach", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Gawadar",
    subtitle: "CPEC"
  },
  {
    id: 7,
    category: [, "tomb"],
    img: imgCard7,
    alt: "blah blah",
    title: "Quiad e Azam Tomb",
    subtitle: "Karachi"
  },
  {
    id: 8,
    category: ["tomb", "beach", "mosquee"],
    img: imgCard8,
    alt: "blah blah",
    title: "Khyber Pass",
    subtitle: "KPK"
  },
  {
    id: 9,
    category: ["beach", "mosquee"],
    img: imgCard9,
    alt: "blah blah",
    title: "Islamia Collage",
    subtitle: "Peshawer"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: imgBarobaybay,
    alt: "camping in the lake",
    title: "Camping in Gilgit",
    subtitle: "Gilgit"
  }
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "mosquee",
  "climbing",
  "camping",
  "tomb",

];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
