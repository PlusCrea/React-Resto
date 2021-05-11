const express = require("express");
const fs = require("fs");
const path = require("path");

const Gallery = require("../models/gallery");

const route = () => {
  const router = new express.Router();

  router.route("/").get((req, res) => {
    Gallery.find(function (err, Gallerys) {
      if (err) {
        console.log(err);
      } else {
        res.json(Gallerys);
      }
    }).sort({ dateCreated: "desc" });
  });

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Gallery.findById(id, function (err, data) {
      res.json(data);
      //console.log(data);
    });
  });

  router.route("/update/:id").post((req, res, next) => {
    Gallery.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      }
    );
  });

  //Delete

  router.route("/delete/:id").delete((req, res, next) => {
    let id = req.params.id;

    //Delete File
    Gallery.findById(id, function (err, data) {
      console.log("data", data.photo);
      let filePath = path.join(path.resolve("../public/uploads/"), data.photo);
      fs.unlinkSync(filePath, (err) => {
        if (err) return res.status(500).send(err);
      });
    });

    Gallery.findByIdAndRemove(id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  });

  router.route("/add").post((req, res) => {
    let data = new Gallery(req.body);

    data
      .save()
      .then((data) => {
        res.status(200).json({ todo: "Gallery added successfully" });
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

  return router;
};

module.exports = {
  route,
  routePrefix: "/gallery",
  //routePrefix: `/${config.version}/auth`
};
