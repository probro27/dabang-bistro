import React from "react";

function Gallery() {
  return (
    <div>
      <section className="gallery" style={{background: "#0c0b09"}}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p>Dabang Bistro Take Out Special</p>
          </div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row no-gutters justify-content-center">
            <div className="col-lg-10 col-md-6 pb-3 text-center">
              <div className="gallery-item">
                <a
                  href="http://dabangbistro.com/assets/img/specials/DB_15_Off_take_Out_Poster.png"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="http://dabangbistro.com/assets/img/specials/DB_15_Off_take_Out_Poster.png"
                    width="80%"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="container mt-5" data-aos="fade-up">
              <div className="row justify-content-center">
                <div className="section-title">
                  <p>Dabang Bistro Birthday Specials</p>
                </div>
                <div className="col-lg-10 col-md-6 pb-3 text-center">
                  <div className="gallery-item">
                    <a
                      href="http://dabangbistro.com/assets/img/DB Free Birthday Dessert Poster.png"
                      className="venobox"
                      data-gall="gallery-item"
                    >
                      <img
                        src="http://dabangbistro.com/assets/img/specials/DB Free Birthday Dessert Poster.png"
                        width="80%"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h1 id="orange" className="mt-5">
              {" "}
              <span style={{fontSize: "45px"}}>
                Dabang Bistro Free Delivery{" "}
              </span>{" "}
            </h1>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                  <div className="gallery-item">
                    <a
                      href="http://dabangbistro.com/assets/img/DB Delivery Truck Poster.png"
                      className="venobox"
                      data-gall="gallery-item"
                    >
                      <img
                        src="http://dabangbistro.com/assets/img/specials/DB Delivery Truck Poster.png"
                        width="80%"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <h5 className="free-delivery1 mt-3">
                    {" "}
                    Minimum order requirements: $25 within 5 Km, $50 within 10
                    Km, $75 within <br />
                    15 Km, $100 within 20 Km. &nbsp; For further distances or
                    additional <br />
                    information - please contact us @ 905 922 1313
                  </h5>
                </div>
              </div>
            </div>

            <div className="container mt-5" data-aos="fade-up">
              <div className="section-title">
                <p>Dabang Bistro Curb-Side Pick-Up</p>
              </div>
            </div>

            <div className="col-lg-10 col-md-6 pb-3 text-center">
              <div className="gallery-item">
                <a
                  href="http://dabangbistro.com/assets/img/DB Free Birthday Dessert Poster.png"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="http://dabangbistro.com/assets/img/specials/DB Contact-Free Curb-Side Pick-Up.png"
                    width="80%"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="container mt-5" data-aos="fade-up">
              <div className="section-title">
                <h4
                  id="orange"
                  className="text-center mb-3"
                  style={{fontSize: "80px"}}
                >
                  Coming Soon...
                </h4>
                <p>Dabang Bistro Loyalty Program</p>
              </div>
            </div>

            <div className="col-lg-11 col-md-6 pb-3 text-center">
              <div className="gallery-item mobile">
                <a
                  href="http://dabangbistro.com/assets/img/specials/DB Loyalty Program Poster.png"
                  className="venobox"
                  data-gall="gallery-item"
                >
                  <img
                    src="http://dabangbistro.com/assets/img/specials/DB Loyalty Program Poster.png"
                    width="80%"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
