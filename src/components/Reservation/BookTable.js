import React from "react";
import "../styles.css";
import emailjs from "emailjs-com";

function BookTable() {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_ob3jq33", "template_sp47p8a", e.target, "user_YWPkHqBY81GgADU0UTvIf")
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
    <section
      id="book-a-table"
      style={{ background: "#0c0b09" }}
      className="book-a-table"
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>Book a Table</p>
        </div>

        <form
          onSubmit={sendMail}
          role="form"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="form-row">
            <div className="col-lg-4 col-md-6 form-group">
              <label for="Name" style={{ color: "#968e7c" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Example: John Smith"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <label for="Email" style={{ color: "#968e7c" }}>
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Example: john.smith@example.com"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <label for="Phone" style={{ color: "#968e7c" }}>
                Your Phone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Example: 1 905 123 4567"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <label for="Date" style={{ color: "#968e7c" }}>
                Reservations Date
              </label>
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                placeholder="Date"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <label for="time" style={{ color: "#968e7c" }}>
                Reservations Time
              </label>
              <input
                type="time"
                className="form-control"
                name="time"
                id="time"
                placeholder="Time"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <label for="people" style={{ color: "#968e7c" }}>
                Select Number of Peoples
              </label>
              <input
                type="number"
                className="form-control"
                name="people"
                id="people"
                placeholder="# of people"
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <label for="Email" style={{ color: "#968e7c" }}>
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Optional information / message."
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading" style={{ color: "#968e7c" }}>
              Loading
            </div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your booking request was sent. We will call back or send an Email
              to confirm your Reservations. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookTable;
