import React from "react";
import "./styles.css";
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3 id="orange">DABANG BISTRO</h3>
                <ul className="p-0" style={{ listStyleType: "none" }}>
                  <li className="pb-2">
                    <span style={{ color: "#f9921a" }}>
                      <i className="pr-2 far fa-building"></i>
                    </span>{" "}
                    : G103-85 Montpelier Street,
                    <span style={{ paddingLeft: "10px" }}>
                      Brampton, Ontario,
                    </span>
                    <br />
                    <span style={{ paddingLeft: "30px" }}>L6Y 6H4, Canada</span>
                  </li>
                  <li className="pb-2">
                    <span style={{color:"#f9921a"}}>
                      <i className="pr-2 fas fa-phone-alt"></i>
                    </span>{" "}
                    : 1 905 922 1313
                  </li>
                  <li className="pb-2">
                    <span style={{color:"#f9921a"}}>
                      <i className="pr-2 fab fa-whatsapp"></i>
                    </span>{" "}
                    : 1 905 922 1313
                  </li>
                  <li className="pb-2">
                    <span style={{color:"#f9921a"}}>
                      <i className="pr-2 far fa-envelope"></i>
                    </span>{" "}
                    : info@dabangbistro.com
                  </li>
                </ul>
                <br />
                <div className="social-links">
                  <a href="#" className="twitter">
                    <Icon icon="bx:bxl-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <Icon icon="bx:bxl-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <Icon icon="akar-icons:instagram-fill" />
                  </a>
                  <a href="#" className="google-plus">
                    <Icon icon="ant-design:skype-filled" />
                  </a>
                  <a href="#" className="linkedin">
                    <Icon icon="bx:bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 footer-info footer-links">
              <img
                src="http://dabangbistro.com/assets/img/Footer/DB Delivery Truck Poster.png"
                style={{width: "442px"}}
                className="img-fluid"
              />

              <div className="row mt-4">
                <div className="col-4">
                  <img src="http://dabangbistro.com/assets/img/doordash.jpg" className="img-fluid" />
                </div>
                <div className="col-4 pl-0 text-center">
                  <img
                    src="http://dabangbistro.com/assets/img/skip.jpg"
                    width="60%"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 pl-0">
                  <img src="http://dabangbistro.com/assets/img/uber-eats.jpg" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-info footer-newsletter">
              <h3 id="orange">Hours Of Operation</h3>
              <ul className="p-0" style={{listStyleType: "none"}}>
                <li className="pb-2">
                  Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1:00PM - 10:00PM
                </li>
                <li className="pb-2">
                  Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed
                </li>
                <li className="pb-2">
                  Wednesday&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  1:00PM - 10:00PM
                </li>
                <li className="pb-2">
                  Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1:00PM - 10:00PM
                </li>
                <li className="pb-2">
                  Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:30AM - 11:00PM
                </li>
                <li className="pb-2">
                  Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:30AM - 11:00PM
                </li>
                <li className="pb-2">
                  Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:30AM - 10:00PM
                </li>
                <li className="pb-2">
                  Friday to Sunday kitchen closed from 3:30PM - 4:45PM
                </li>
              </ul>
              {/* <!-- <p>Welcome to Dabang Bistro, a place for the best Indian food in Brampton. We introduced authentic
                   and traditional Indian food to the Brampton area and have grown into what many say is the best
                   Indian Restaurant for Dine-in, Delivery, Pickup, Corporate Events, Parties and Catering in the area.</p> --> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h4 className="text-center mt-4">
              <a href="#" style={{textDecoration: "none", color: "#f9921a;"}}>
                Terms & Conditions
              </a>
            </h4>
            <p className="text-center small mb-0">
              15% Gratuity applied on tables of 7 or more.
            </p>
            <p className="text-center small">
              Please note - cross contamination is always a possibility.
            </p>
            <div className="copyright">
              &copy; Copyright 2021 -{" "}
              <strong>
                <span>Dabang Bistro -</span>
              </strong>{" "}
              All Rights Reserved
            </div>
          </div>
          <div className="col-4">
            <div
              className="footer-top mt-6"
              style={{background: "transparent",
          padding: "0px",
          border: "none",
          margin: "0px auto"}}
            >
              <div className="footer-info footer-newsletter mb-3">
                <form action="" method="post" className="mt-5">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
