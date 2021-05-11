import React, { useState, useEffect } from "react";
import axios from "axios";
import parameter from "../data/parameter.json";

export default function Menu() {
  const [listMenu, setListMenu] = useState([]);
  const Category = parameter.Category;

  useEffect(() => {
    axios
      .get("http://localhost:5000/menu/")
      .then((res) => {
        console.log("Data", res.data);
        setListMenu(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        //seterror(err);
      });
  }, []);

  return (
    <div className="menu-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>Special Menu</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>
        <div className="row inner-menu-box">
          <div className="col-3">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                All
              </a>
              {Category.map((data, i) => {
                return (
                  <a
                    key={i}
                    className="nav-link"
                    id={"v-pills-" + data.name + "-tab"}
                    data-toggle="pill"
                    href={"#v-pills-" + data.name}
                    role="tab"
                    aria-controls={"v-pills-" + data.name}
                    aria-selected="false"
                  >
                    {data.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="row">
                  {listMenu.map((menu, i) => {
                    return (
                      <div
                        className={
                          "col-lg-4 col-md-6 special-grid " + menu.category
                        }
                      >
                        <div className="gallery-single fix">
                          <img
                            src={"../../uploads/" + menu.photo}
                            alt={menu.title}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>{menu.title}</h4>
                            <p>{menu.desc}</p>
                            <h5> ${menu.price.$numberDecimal}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="row">
                  {listMenu.map((menu, i) => {
                    return (
                      <div
                        className={
                          "col-lg-4 col-md-6 special-grid " + menu.category
                        }
                      >
                        <div className="gallery-single fix">
                          <img
                            src={"../../uploads/" + menu.photo}
                            alt={menu.title}
                            className="img-fluid"
                            alt="Image"
                          />
                          <div className="why-text">
                            <h4>{menu.title}</h4>
                            <p>{menu.desc}</p>
                            <h5> ${menu.price.$numberDecimal}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {Category.map((data, i) => {
                return (
                  <div
                    className="tab-pane fade"
                    id={"v-pills-" + data.name}
                    role="tabpanel"
                    aria-labelledby={"v-pills-" + data.name + "-tab"}
                  >
                    <div className="row">
                      {listMenu.map((menu, i) => {
                        if (data.name === menu.category)
                          return (
                            <div
                              className={
                                "col-lg-4 col-md-6 special-grid " +
                                menu.category
                              }
                            >
                              <div className="gallery-single fix">
                                <img
                                  src={"../../uploads/" + menu.photo}
                                  alt={menu.title}
                                  className="img-fluid"
                                  alt="Image"
                                />
                                <div className="why-text">
                                  <h4>{menu.title}</h4>
                                  <p>{menu.desc}</p>
                                  <h5> ${menu.price.$numberDecimal}</h5>
                                </div>
                              </div>
                            </div>
                          );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
