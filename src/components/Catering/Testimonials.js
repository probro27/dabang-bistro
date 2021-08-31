import React from "react";
import './styles.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-9"></div>
        </div>
      </div>

      <div className="section-title">
        <p style={{fontSize: "25px"}}>
          Dabang Bistro - Take Out Large Gathering Deals.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="testimonial-item">
              <div className="section-title"></div>

              <p className="text-white">
                Dabang Bistro Catering Deals: Please note - all our catering is
                served in heavy duty aluminium trays with double wrap to protect
                spillage. Starting at as low as $10.85 per person...
              </p>
              <img
                src="http://dabangbistro.com/assets/img/catering/Catering Setup Picture.jpg"
                className="testimonial-img"
                alt=""
                style={{width: "90px", height: "90px"}}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="testimonial-item">
              <div className="section-title"></div>
              <p className="text-white">
                Dabang Bistro Tray Deals: Please note - all our catering is
                served in heavy duty aluminium trays with double wrap to protect
                spillage. Starting at as low as $34.85...
              </p>
              <img
                src="http://dabangbistro.com/assets/img/catering/ImageComingSoon.jpg"
                className="testimonial-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
