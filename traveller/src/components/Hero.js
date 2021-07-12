import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Pakistan Tourism</h1>
          <h3>Tours | Travel | Enjoy</h3>
          <Button outline color="warning" href="/RoomReservation"> Hotel Room Reservation </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
