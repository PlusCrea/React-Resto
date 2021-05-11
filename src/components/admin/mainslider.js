import React, { useState, useEffect } from "react";

export default function MainSlider(props) {
  const [listSlider, setListSlider] = useState(props.listSlider);
  console.log("Slider", props.listSlider);

  return (
    <div id="slides" className="cover-slides">
      <ul className="slides-container">
        {listSlider.map((slide, i) => {
          return (
            <li className="text-left" key={slide._id}>
              <img src={"../../uploads/" + slide.photo} alt={slide.title} />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20">
                      <strong>
                        Welcome To <br /> {slide.title}
                      </strong>
                    </h1>
                    <p className="m-b-40">{slide.desc}</p>
                    <p>
                      <a
                        className="btn btn-lg btn-circle btn-outline-new-white"
                        href={slide.buttonLink}
                      >
                        {slide.buttonText}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
