import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carusel = () => (
    <Carousel autoPlay>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="imgCarusel1" src="/imgcarousel/infoauto1.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="imgCarusel2" src="/imgcarousel/infoauto2.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="imgCarusel3" src="/imgcarousel/infoauto3.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="imgCarusel4" src="/imgcarousel/infoauto4.png" />
        </div>
    </Carousel>
);
export default Carusel;