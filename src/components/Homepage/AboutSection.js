import React from "react";
import ImgSlider from "./ImgSlider";

function AboutSection() {
  return (
    <section className="events">
      <div className="container" data-aos="fade-up">
        <div className="row">
        <div
            id="shft_dwn_abt_us"
            className="col-lg-6 content"
          >
            <h1 className="text-white">
              {" "}
              <span id="orange">Dabang Bistro </span>- Where We Strive To Serve
              You the Best
            </h1>

            <p className="mt-5 text-white">
              Come experience delicious Indian Food, along with the exceptional
              service, accompanied by great ambience.
            </p>
            <p className="text-white">
              Our high standards have helped us to grow into what many says the
              best Indian Restaurant for Dine-in, Delivery, Pickup, Corporate
              Events, Parties and Catering / Live Catering in the area.
            </p>
          </div>
            <div className="col-lg-6">
                <ImgSlider/>
            </div>
          {/* <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              className="owl-carousel events-carousel"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/1.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/2.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/3.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/4.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/5.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/6.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/7.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/8.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/9.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div className="row event-item">
                <div className="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/10.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
