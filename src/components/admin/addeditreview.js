import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddEditReview(props) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, seterror] = useState("");
  const [isAdd, setisAdd] = useState(true);

  //console.log("props", props.match.params.id);

  useEffect(() => {
    if (props.match.params.id) {
      axios
        .get("http://localhost:5000/review/" + props.match.params.id)
        .then((res) => {
          //console.log("res.data", res.data);
          setName(res.data.name);
          setTitle(res.data.title);
          setDesc(res.data.desc);
        })
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
      setisAdd(false);
    }
  }, []);

  function onRegister(e) {
    e.preventDefault();

    if (name === "" || title === "" || desc === "") {
      seterror("Fill in all fields please...!");
      return;
    }
    const newReview = {
      name: name,
      title: title,
      desc: desc,
      active: false,
    };
    //console.log("newReview", newReview);
    if (isAdd) {
      axios
        .post("http://localhost:5000/review/add", newReview)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
    } else {
      //update
      axios
        .post(
          "http://localhost:5000/review/update/" + props.match.params.id,
          newReview
        )
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
    }
    props.history.push("/admin/listreview");
  }
  return (
    <div className="bg-light" style={{ height: "1000px" }}>
      <div className="container bg-light" style={{ marginTop: "60px" }}>
        <div
          className="d-flex align-items-center text-white rounded shadow-sm"
          style={{ backgroundColor: "#6f42c1" }}
        >
          <div className="lh-1">
            <h1 className="h5 mb-0 text-white lh-1 p-3">
              Review - {isAdd ? "Add" : "Update"}
            </h1>
          </div>
          <a className="btn btn-light btn-sm" href={"/admin/listreview"}>
            <i className="fas fa-backward mr-1"></i>
            Review List
          </a>
        </div>
        <form onSubmit={onRegister}>
          <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h5 className="border-bottom pb-2 mb-3">Review</h5>
            {error !== "" ? (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              ""
            )}
            <div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-form-label-sm"
                >
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-form-label-sm"
                >
                  <strong>Title</strong>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label col-form-label-sm"
                >
                  <strong>Description</strong>
                </label>
                <textarea
                  className="form-control form-control-sm"
                  name="desc"
                  value={desc}
                  rows={4}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <button type="submit" class="btn btn-primary">
                  {isAdd ? "Add" : "Update"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
