import React, { useState, useEffect } from "react";
import axios from "axios";
import parameter from "../../data/parameter.json";

export default function AddEditMenu(props) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [changePhoto, setChangePhoto] = useState(false);
  const [image, setImage] = useState("");
  const [error, seterror] = useState("");
  const [isAdd, setisAdd] = useState(true);
  const Category = parameter.Category;
  //console.log("Category", Category);

  //console.log("props", props.match.params.id);

  useEffect(() => {
    if (props.match.params.id) {
      axios
        .get("http://localhost:5000/menu/" + props.match.params.id)
        .then((res) => {
          console.log("res.data", res.data);
          setCategory(res.data.category);
          setTitle(res.data.title);
          setPrice(res.data.price.$numberDecimal);
          setDesc(res.data.desc);
          setPhoto(res.data.photo);
          setImage(process.env.PUBLIC_URL + "../../uploads/" + res.data.photo);
        })
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
      setisAdd(false);
    }
  }, []);

  const fileChangedHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    setChangePhoto(true);
  };

  function onRegister(e) {
    e.preventDefault();

    if (photo === "" || title === "" || desc === "" || category === "") {
      seterror("Fill in all fields please...!");
      return;
    }
    const newMenu = {
      category: category,
      title: title,
      desc: desc,
      price: price,
      photo: photo.name,
      //file: photo,
    };
    //console.log("newMenu", newMenu);

    if (isAdd) {
      let formData = new FormData();

      formData.append("photo", photo);

      axios
        .post("http://localhost:5000/upload/", formData)
        .then((res) => {
          console.log(res.data);
          axios
            .post("http://localhost:5000/menu/add/", newMenu)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log("err", err);
            });
        })
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
    } else {
      if (changePhoto) {
        let formData = new FormData();

        formData.append("photo", photo);

        axios
          .post("http://localhost:5000/upload/", formData)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("err", err);
            //seterror(err);
          });
      }
      //update
      axios
        .post(
          "http://localhost:5000/menu/update/" + props.match.params.id,
          newMenu
        )
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log("err", err);
          //seterror(err);
        });
    }
    props.history.push("/admin/listmenu");
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
              Menu - {isAdd ? "Add" : "Update"}
            </h1>
          </div>
          <a className="btn btn-light btn-sm" href={"/admin/listmenu"}>
            <i className="fas fa-backward mr-1"></i>
            Menu List
          </a>
        </div>
        <form onSubmit={onRegister} enctype="multipart/form-data" method="POST">
          <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h5 className="border-bottom pb-2 mb-3">Menu</h5>
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
                  <strong>Category</strong>
                </label>
                <select
                  class="form-select"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option selected value="">
                    All
                  </option>
                  {Category.map((data, i) => {
                    return (
                      <option key={i} value={data._id}>
                        {data.name ? data.name : data.title}
                      </option>
                    );
                  })}
                </select>
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
                  htmlFor="exampleFormControlInput1"
                  className="form-label col-form-label-sm"
                >
                  <strong>Price</strong>
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
              <div className="mb-2">
                <img
                  className="img-thumbnail"
                  style={{ width: "400px" }}
                  src={image}
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
