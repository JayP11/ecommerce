import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Hero.css";

const Hero = ({ homeData }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    pauseOnHover: false,
    arrows: false,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {homeData.map((item) => {
          return (
            <div className="hero_img_main" key="">
              <img
                src={item.image_full_path}
                alt={item.name}
                className="hero_img"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
