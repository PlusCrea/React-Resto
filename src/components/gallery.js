import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const [listGallery, setListGallery] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gallery/")
      .then((res) => {
        console.log("Data", res.data);
        setListGallery(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const listItems = listGallery.map((gallery, i) => {
    return (
      <div className="col-sm-12 col-md-4 col-lg-4">
        <a className="lightbox" data-toggle="modal" data-target={"#" + i}>
          <img
            className="img-fluid"
            src={"../../uploads/" + gallery.photo}
            alt="Gallery Images"
          />
        </a>
      </div>
    );
  });

  const listModals = listGallery.map((gallery, i) => {
    return (
      <div id={i} className="modal fade show" role="modal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <img
                src={"../../uploads/" + gallery.photo}
                alt="Gallery Images"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="gallery-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>Gallery</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>
        <div className="tz-gallery">
          <div className="row">{listItems}</div>
        </div>

        {listModals}
      </div>
    </div>
  );
}
