import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewList() {
  const [error, seterror] = useState("");
  const [listReview, setListReview] = useState();
  const [active, setActive] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/review/")
      .then((res) => {
        console.log("Data", res.data);
        setListReview(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        seterror(err);
      });
  }, []);

  const onChangeActiveStatus = (e, id, status) => {
    e.preventDefault();
    const newReview = {
      active: !status,
    };
    console.log("Status", id, status);
    axios
      .post("http://localhost:5000/review/changeactive/" + id, newReview)
      .then((res) => {
        console.log("Data", res.data);
        for (let [i, review] of listReview.entries()) {
          if (review._id == id) {
            //listReview.splice(i, 1);
            listReview[i].active = !status;
            //console.log("listReview", listReview);
            setListReview(listReview);
            setActive(!active);
            break;
          }
        }
      })
      .catch((err) => {
        console.log("err", err);
        seterror(err);
      });
  };
  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("Delete", id);

      axios
        .delete("http://localhost:5000/review/delete/" + id)
        .then((res) => {
          console.log("Data", res.data);
          for (let [i, review] of listReview.entries()) {
            if (review._id == id) {
              listReview.splice(i, 1);
              setListReview(listReview);
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
            <h1 className="h5 mb-0 text-white lh-1 p-3">Review - List</h1>
          </div>
          <a className="btn btn-light " href={"/admin/addreview"}>
            <i className="fas fa-plus-circle mr-1"></i>
            ADD NEW REVIEW
          </a>
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Title</th>
                <th scope="col">Active</th>
                <th scope="col">--</th>
              </tr>
            </thead>
            <tbody>
              {listReview
                ? listReview.map((review, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{review.name}</td>
                        <td>{review.title}</td>
                        <td>
                          <div className="form-check form-switch ml-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked={review.active}
                              onChange={(e) =>
                                onChangeActiveStatus(
                                  e,
                                  review._id,
                                  review.active
                                )
                              }
                            />
                          </div>
                        </td>
                        <td>
                          <a
                            className="btn btn-info btn-sm"
                            href={"/admin/editreview/" + review._id}
                          >
                            <i className="fas fa-pencil-alt mr-1"></i>
                            Edit
                          </a>
                          <a
                            className="btn btn-danger btn-sm ml-2"
                            href="/"
                            onClick={(e) => {
                              onDeleteClick(e, review._id);
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
