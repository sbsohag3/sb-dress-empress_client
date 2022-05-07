import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/bunner/bunner  (1).png";
import banner2 from "../../../images/bunner/bunner  (2).png";
import banner3 from "../../../images/bunner/bunner  (3).png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" mt-2 lg-h-700">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // style={{ height: "650px" }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-info">Expressions Panjabi</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // style={{ height: "650px" }}
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-info">Expressions Panjabi</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            // style={{ height: "650px" }}
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-info">Expressions Panjabi</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
