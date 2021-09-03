import React from "react";
import './styles.css'

function Map() {
  return (
    <div className="container">
      <div className="section-title mt-5"></div>
      <div className="row mt-5" data-aos="fade-up">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="section-title" style={{marginTop: "140px"}}>
            <p style={{marginBottom: "1.5rem"}}>Dabang Bistro</p>
            <p style={{marginBottom: "0.5rem", fontSize: "1.4rem", color:"white"}}>
              G103-85 Montpelier Street
            </p>
            <p style={{marginBottom: "0.5rem", fontSize: "1.4rem", color:"white"}}>
              Brampton, Ontario
            </p>
            <p style={{marginBottom: "0.5rem", fontSize: "1.4rem", color:"white"}}>
              L6Y 6H4, Canada
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11550.643810910597!2d-79.78711!3d43.6344152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xafcafc5a780337e!2sDabang%20Bistro!5e0!3m2!1sen!2sca!4v1611600628190!5m2!1sen!2sca"
            width="100%"
            height="500"
            frameborder="0"
            style={{border:"0"}}
            allowfullscreen="1"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;
