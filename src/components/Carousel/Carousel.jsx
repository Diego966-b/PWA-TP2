import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
    <Carousel autoPlay>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="" src="/imgcarousel/infoauto1.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="" src="/imgcarousel/infoauto2.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="" src="/imgcarousel/infoauto3.png" />
        </div>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <img alt="" src="/imgcarousel/infoauto4.png" />
        </div>
    </Carousel>
);