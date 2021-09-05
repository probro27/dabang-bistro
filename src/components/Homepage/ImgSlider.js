import React from "react";
import Slider from "react-slick";
import "../styles.css";

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/1.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/2.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/3.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/4.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/5.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/6.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/7.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/8.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/9.jpg"
            className="img-fluid"
            alt=""
          />
        </div>

        <div>
          <img
            src="http://dabangbistro.com/assets/img/about/10.jpg"
            className="img-fluid"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;
