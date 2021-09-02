import React from "react";
import './styles.css'

function Parallax() {
  return (
    <section className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p
              className="text-center p-2"
              style={{color: "#f9921a", fontSize: "large"}}
            >
              <b>
                Preorder the items online and get the benefits of the Loyality
                Program
              </b>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-12 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <p className="text-center text-white p-5">
                Please note that you will be notified when your Reservations is
                confirmed.
                <br />
                During rush hours, all reaservation are for a time period of
                maximum 2.5 Hours.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
