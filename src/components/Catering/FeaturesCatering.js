import React from "react";

function FeaturesCatering() {
  return (
    <section className="why-us" style={{background: "#0c0b09"}}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4 id="orange">
            Dabang Bistro entertain all your special occasions such as Birthday,
            Corporate and Weddings parties, etc. Be a guest at your own party
            and leave all the planning and execution to us. We do catering for
            groups of 10+ guests.
          </h4>
        </div>

        <div className="row">
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box-2" data-aos="zoom-in" data-aos-delay="200">
              <span>Dabang Bistro:</span>
              <span>Private Dining Room</span>

              <p>
                Celebrate your special occasion in Dabang Bistro's luxurious
                private dining rooms or at its stunning patios, with the
                exceptional staff.
              </p>
              <p>Room 1 -For up to 50 people</p>
              <p>
                Room 2 - For up to 20 people & opens to patio with capacity of
                50 people
              </p>
              <p>
                Room 3 - For up to 100 people & opens to patio with capacity of
                25 people
              </p>
              <p>
                Patio 1 (outdoors) - For up to 25 people & Patio 2 (outdoors) -
                For up to 50 people
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row justify-content-center">
              <img
                className="img-fluid"
                src="http://dabangbistro.com/assets/img/logoicon.png"
                width="40%"
              />
            </div>
            <div className="box-2" data-aos="zoom-in" data-aos-delay="100">
              <span>Dabang Bistro:</span>
              <span>Delivery & Takeout</span>
              <p>
                We have takeout packages as well as facility to customize the
                orders by tray for a group of 10 + guests to make your gathering
                a perfect experience.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box-2 mb-5" data-aos="zoom-in" data-aos-delay="300">
              <span style={{fontSize: "26px"}}>Dabang Bistro:</span>
              <span style={{fontSize: "26px"}}>Live On Site Catering</span>

              <p>
                Experience the best by opting for Dabang Bistro's Live On Site
                Catering with a multi course menu, interactive cooking stations,
                amicable staff and with the drinks made to drool for. Whether at
                the convenience of your own home's backyard or pool side party,
                or enjoying breeze on a cruise, in a banquet hall party or in a
                greenery of any park, we promise you, the beautiful memories of
                the event will stay close to your heart with our Live On Site
                Catering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesCatering;
