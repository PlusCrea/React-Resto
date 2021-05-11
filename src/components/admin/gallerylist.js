import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddEditSlider(props) {
  const [listGallery, setListGallery] = useState();
  const [photo, setPhoto] = useState("");
  const [error, seterror] = useState("");
  const [active, setActive] = useState(true);

  //console.log("props", props.match.params.id);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [photo]);

  function loadData() {
    axios
      .get("http://localhost:5000/gallery/")
      .then((res) => {
        console.log("Data", res.data);
        setListGallery(res.data);
        console.log(listGallery);
        console.log(process.env.PUBLIC_URL);
      })
      .catch((err) => {
        console.log("err", err);
        seterror(err);
      });
  }

  const fileChangedHandler = (e) => {
    setPhoto(e.target.files[0]);

    let formData = new FormData();

    formData.append("photo", e.target.files[0]);

    const newPhoto = {
      photo: e.target.files[0].name,
      //file: photo,
    };

    console.log("Photo", newPhoto);
    //return;
    axios
      .post("http://localhost:5000/upload/", formData)
      .then((res) => {
        console.log(res.data);
        axios
          .post("http://localhost:5000/gallery/add/", newPhoto)
          .then((res) => {
            console.log(res.data);
            listGallery.unshift(newPhoto);
            setListGallery(listGallery);
            setActive(!active);
            console.log("New", listGallery);
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log("err", err);
        //seterror(err);
      });
    setPhoto("");
  };

  const onDeleteClick = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      console.log("Delete", id);
      axios
        .delete("http://localhost:5000/gallery/delete/" + id)
        .then((res) => {
          console.log("Data", res.data);
          for (let [i, review] of listGallery.entries()) {
            if (review._id == id) {
              listGallery.splice(i, 1);
              setListGallery(listGallery);
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
            <h1 className="h5 mb-0 text-white lh-1 p-3">Gallery</h1>
          </div>
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h5 className="border-bottom pb-2 mb-3">Gallery</h5>
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
                <strong>Photo</strong>
              </label>
              <input
                type="file"
                className="form-control form-control-lg"
                name="photo"
                // onChange={(e) => setPhoto(e.target.files[0])}
                onChange={fileChangedHandler}
              />
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {listGallery
                ? listGallery.map((gallery, i) => {
                    return (
                      <div class="col">
                        <div class="card shadow-sm">
                          <img
                            className="img-thumbnail"
                            src={"../../uploads/" + gallery.photo}
                          />

                          <div class="card-body">
                            <button
                              type="button"
                              class="btn btn-sm btn-outline-secondary"
                              onClick={(e) => {
                                onDeleteClick(e, gallery._id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
