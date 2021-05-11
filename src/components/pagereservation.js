import React from "react";
import AltHeader from "../layout/altheader";
import Review from "./review";

export default function PageReservation() {
  return (
    <div>
      <AltHeader title={"Reservation"} />
      <div className="reservation-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Reservation</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="contact-block">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Book a table</h3>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="input_date"
                            className="datepicker picker__input form-control"
                            name="date"
                            type="text"
                            defaultValue
                            equired
                            data-error="Please enter Date"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="input_time"
                            className="time form-control picker__input"
                            required
                            data-error="Please enter time"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            className="custom-select d-block form-control"
                            id="person"
                            required
                            data-error="Please select Person"
                          >
                            <option disabled selected>
                              Select Person*
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                          </select>
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3>Contact Details</h3>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Your Email"
                            id="email"
                            className="form-control"
                            name="email"
                            required
                            data-error="Please enter your email"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Your Numbar"
                            id="phone"
                            className="form-control"
                            name="phone"
                            required
                            data-error="Please enter your Numbar"
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="submit-button text-center">
                        <button
                          className="btn btn-common"
                          id="submit"
                          type="submit"
                        >
                          Book Table
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </div>
  );
}
