import React, { useState, useEffect } from "react";
import axios from "axios";
import parameter from "../data/parameter.json";

export default function Review() {
  let classn = "";
  const [listReview, setListReview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/review/")
      .then((res) => {
        console.log("Data", res.data);
        setListReview(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const listItems = listReview.map((review, i) => {
    if (i === 0) classn = "carousel-item text-center active";
    else classn = "carousel-item text-center";
    return (
      <div className={classn}>
        <div className="img-box p-1 border rounded-circle m-auto">
          <img
            className="d-block w-100 rounded-circle"
            src="images/quotations-button.png"
            alt=""
          />
        </div>
        <h5 className="mt-4 mb-0">
          <strong className="text-warning text-uppercase">{review.name}</strong>
        </h5>
        <h6 className="text-dark m-0">{review.title}</h6>
        <p className="m-0 pt-3">{review.desc}</p>
      </div>
    );
  });

  if (listReview.length > 0)
    return (
      <div className="customer-reviews-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Customer Reviews</h2>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mr-auto ml-auto text-center">
              <div id="reviews" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner mt-4">{listItems}</div>
                <a
                  className="carousel-control-prev"
                  href="#reviews"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#reviews"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <div></div>;
}
