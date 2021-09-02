import React from "react";
import './styles.css'

function ComingSoon() {
  return (
    <section className="gallery" style={{background: "#0c0b09"}}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4 id="orange" className="text-center mb-3" style={{fontSize: "80px"}}>
            Coming Soon...
          </h4>
          <p className="text-center">Join Dabang Bistro Loyalty Program</p>
          <div className="row justify-content-center">
            <div className="col-9">
              <h5 className="text-center text-small text-white">
                By joining our "Loyalty Program" you will automatically get a 3%
                discount on every order placed online or through our Dabang
                Bistro App which is now available for Android and Apple based
                platform.
              </h5>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <div className="col-lg-12">
                <a href="#">
                  <img
                    src="http://dabangbistro.com/assets/img/Loyalty-Program/Andriod Poster.png"
                    className="img-fluid img-fluid-loyalty"
                    width="76%"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-lg-12">
                <a href="#">
                  <img
                    src="http://dabangbistro.com/assets/img/Loyalty-Program/Apple Poster.png"
                    className="img-fluid img-fluid-loyal"
                    width="72%"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
