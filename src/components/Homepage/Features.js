import React from 'react'
import '../styles.css'

function Features() {
    return (
        <section id="specials" style={{background: "#0c0b09"}} className="why-us">
      <div className="container" data-aos="fade-up">

        <div id = "center_wcor" className="section-title">

          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <span>1 - Ambience</span>

              <p>A soon as you enter Dabang Bistro, our environment will make you feel welcomed, comfortable and cozy.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <span>2 - Food</span>

              <p>We promise you that each of our recipe will tingle all your taste buds and will magically make you unseparable  part of our Dabang family.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <span>3 - Service</span>

              <p>We assure you that our staff strive to make your every moment spent at Dabang Bistro precious and treasurable.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Features
