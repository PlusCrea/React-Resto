import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListSlider() {
  const [error, seterror] = useState("");
  const [listSlider, setListSlider] = useState();
  const [active, setActive] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/slider/")
      .then((res) => {
        console.log("Data", res.data);
        setListSlider(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        seterror(err);
      });
  }, []);

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("Delete", id);

      axios
        .delete("http://localhost:5000/slider/delete/" + id)
        .then((res) => {
          console.log("Data", res.data);
          for (let [i, review] of listSlider.entries()) {
            if (review._id == id) {
              listSlider.splice(i, 1);
              setListSlider(listSlider);
              setActive(!active);
              break;
            }
          }
        })
        .catch((err) => {
          console.log("err", err);
          seterror(err);
        });
    }
  };

  return (
    <div className="bg-light" style={{ height: "1000px" }}>
      <div className="container bg-light" style={{ marginTop: "60px" }}>
        <div
          className="d-flex align-items-center text-white rounded shadow-sm"
          style={{ backgroundColor: "#6f42c1" }}
        >
          <div className="lh-1">
            <h1 className="h5 mb-0 text-white lh-1 p-3">Slider - List</h1>
          </div>
          <a className="btn btn-light " href={"/admin/addslider/"}>
            <i className="fas fa-plus-circle mr-1"></i>
            ADD NEW SLIDE
          </a>
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Button</th>
                <th scope="col">--</th>
              </tr>
            </thead>
            <tbody>
              {listSlider
                ? listSlider.map((slide, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{slide.title}</td>
                        <td>{slide.buttonText}</td>
                        <td>
                          <a
                            className="btn btn-info btn-sm"
                            href={"/admin/editslider/" + slide._id}
                          >
                            <i className="fas fa-pencil-alt mr-1"></i>
                            Edit
                          </a>
                          <a
                            className="btn btn-danger btn-sm ml-2"
                            href="/"
                            onClick={(e) => {
                              onDeleteClick(e, slide._id);
                            }}
                          >
                            <i className="fas fa-trash mr-1"></i>
                            Delete
                          </a>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
