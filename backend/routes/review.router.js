const express = require("express");

const Review = require("../models/review");

const route = () => {
  const router = new express.Router();

  //Get All
  router.route("/").get((req, res) => {
    Review.find(function (err, reviews) {
      if (err) {
        console.log(err);
        res.status(400).json("Error: " + err);
      } else {
        res.status(200).json(reviews);
      }
    });
  });
  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Review.findById(id, function (err, data) {
      res.json(data);
    });
  });

  //Update
  router.route("/update/:id").post((req, res, next) => {
    Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          //console.log('Student updated successfully !')
        }
      }
    );
  });

  //Change Active Status
  router.route("/changeactive/:id").post((req, res, next) => {
    Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          //console.log(data);
        }
      }
    );
  });

  //Delete ID
  router.route("/delete/:id").delete((req, res, next) => {
    Review.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        //return next(error);
        res.status(400).json("Error: " + error);
      } else {
        res.status(200).json(data);
      }
    });
  });

  //Add
  router.route("/add").post((req, res) => {
    //console.log("Data", req.body);
    //res.status(400).json("Error: Hata");

    //return;
    let data = new Review(req.body);
    data
      .save()
      .then((data) => {
        res.status(200).json("Review added successfully");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

  return router;
};

module.exports = {
  route,
  routePrefix: "/review",
  //routePrefix: `/${config.version}/auth`
};
