import React from "react";
import "./TrendingProducts.css";
import Slider from "react-slick";
import { useHomeContext } from "../../context/home_context";
import styled from "styled-components";

const TrendingProducts = () => {
  const { homeData } = useHomeContext();
  // console.log("homeProducts", homeData);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      {
        breakpoint: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      {
        breakpoint: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
      {
        breakpoint: 1800,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      {
        breakpoint: 2600,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    ],
  };
  return (
    <Wrapper>
      <div>
        <div>
          <h1 className="heading">Trending Products</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="section-center featured" style={{ height: "250px" }}>
        <Slider {...settings}>
          {homeData.map((item) => {
            return (
              <div>
                <img
                  src={item.image_full_path}
                  style={{ height: "12rem", width: "100%" }}
                  alt=""
                  className="trending_pro_img"
                />
                <h5 className="trendingProName">{item.name}</h5>
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default TrendingProducts;

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    max-width: 80%;
    img {
      object-fit: cover;
      height: 200px;
    }
  }

  .slick-slide {
    padding: 0 25px;
  }

  .trending_pro_img {
    width: 100% !important;
    height: 100%;
    object-fit: cover !important;
    border-radius: 3px;
  }

  .trendingProName {
    padding: 0.5rem 0;
    text-transform: uppercase;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      overflow: hidden;
    }
  }
`;
