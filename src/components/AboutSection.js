import React from "react";

function AboutSection() {
  return (
    <section class="events">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {/* <!-- <div class="about-img">
                  <img src="assets/img/about.jpg" alt="" />
                </div> --> */}
            <div
              class="owl-carousel events-carousel"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/1.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/2.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/3.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/4.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/5.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/6.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/7.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/8.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/9.jpg" class="img-fluid" alt="" />
                </div>
              </div>

              <div class="row event-item">
                <div class="col-lg-12">
                  <img src="http://dabangbistro.com/assets/img/about/10.jpg" class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            id="shft_dwn_abt_us"
            class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
          >
            <h1 class="text-white">
              {" "}
              <span id="orange">Dabang Bistro </span>- Where We Strive To Serve
              You the Best
            </h1>

            <p class="mt-5 text-white">
              Come experience delicious Indian Food, along with the exceptional
              service, accompanied by great ambience.
            </p>
            <p class="text-white">
              Our high standards have helped us to grow into what many says the
              best Indian Restaurant for Dine-in, Delivery, Pickup, Corporate
              Events, Parties and Catering / Live Catering in the area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
