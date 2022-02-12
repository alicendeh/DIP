import React from "react";
import { Carousel } from "react-bootstrap";
function Team() {
  return (
    <div>
      <h2 className="text-center">Our Team</h2>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="slot" style={{ width: "100vw", height: "80vh" }}>
            <img className="d-block w-100" src="/dip1.jpg" alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slot2" style={{ width: "100vw", height: "80vh" }}>
            <img className="d-block w-100" src="/dip2.jpg" alt="Second slide" />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slot3" style={{ width: "100vw", height: "80vh" }}>
            {" "}
            <img
              className="d-block w-100"
              src="/cld-sample.jpg"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Team;
