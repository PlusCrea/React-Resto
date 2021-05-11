import React from "react";
import Menu from "./menu";
import Review from "./review";
import AltHeader from "../layout/altheader";

export default function PageMenu() {
  return (
    <div>
      <AltHeader title={"Special Menu"} />
      <Menu />
      <div className="qt-box qt-background">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <p className="lead ">
                " If you're not the one cooking, stay out of the way and
                compliment the chef. "
              </p>
              <span className="lead">Michael Strahan</span>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}
