import React from "react";
import emailjs from "emailjs-com";
import "../styles.css";

function ContactUs() {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ob3jq33",
        "template_4jnwfwz",
        e.target,
        "user_YWPkHqBY81GgADU0UTvIf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div className="book-a-table contact">
      <div className="pt-5"></div>
      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <p id="orange" style={{ fontSize: "50px", padding: "0px" }}>
                Contact Us
              </p>

              <div className="email">
                <i className="fas fa-envelope"></i>
                <h4>Email:</h4>
                <p>info@dabangbistro.com</p>
                <p>social@dabangbistro.com</p>
              </div>

              <div className="phone">
                <i className="fas fa-phone-square-alt"></i>
                <h4>Call:</h4>
                <p>1 905 922 1313</p>
              </div>

              <div className="phone">
                <i className="fab fa-whatsapp"></i>
                <h4>WhatsApp:</h4>
                <p>1 905 922 1313</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form role="form" className="php-email-form" onSubmit={sendMail}>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 10 digits"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="8"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-5"></div>
    </div>
  );
}

export default ContactUs;
