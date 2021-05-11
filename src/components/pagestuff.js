import React from "react";
import AltHeader from "../layout/altheader";
import Review from "./review";

export default function PageStuff() {
  return (
    <div>
      <AltHeader title={"Stuff"} />
      <div className="stuff-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center">
                <h2>Stuff</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-01.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Williamson</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-02.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Kristiana</h3>
                  <span className="post">Web Designer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-03.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Steve Thomas</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-04.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Williamson</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-05.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Kristiana</h3>
                  <span className="post">Web Designer</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="our-team">
                <div className="pic">
                  <img src="images/stuff-img-06.jpg" />
                  <ul className="social">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-google-plus" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-linkedin" />
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Steve Thomas</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Review />
    </div>
  );
}
