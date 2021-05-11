const express = require("express");
const fs = require("fs");
const path = require("path");

const Menu = require("../models/menu");

const route = () => {
  const router = new express.Router();

  //Id li kaydı buluyor....
  router.route("/:id").get(function (req, res) {
    let id = req.params.id;
    Menu.findById(id, function (err, data) {
      res.json(data);
    });
  });

  //Update
  router.route("/update/:id").post((req, res, next) => {
    Menu.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          //console.log(error);
        } else {
          res.json(data);
          //console.log('Student updated successfully !')
        }
      }
    );
  });

  //Delete ID
  router.route("/delete/:id").delete((req, res, next) => {
    let id = req.params.id;

    //Delete File
    Menu.findById(id, function (err, data) {
      console.log("data", data.photo);
      let filePath = path.join(path.resolve("../public/uploads/"), data.photo);
      fs.unlinkSync(filePath, (err) => {
        if (err) return res.status(500).send(err);
      });
    });

    Menu.findByIdAndRemove(id, (error, data) => {
      if (error) {
        //return next(error);
        res.status(400).json("Error: " + error);
      } else {
        res.status(200).json(data);
      }
    });
  });

  //Get All
  router.route("/").get((req, res) => {
    Menu.find(function (err, menus) {
      if (err) {
        console.log(err);
        res.status(400).json("Error: " + err);
      } else {
        // console.log(menus);
        res.status(200).json(menus);
      }
    });
  });

  //Add

  router.route("/add").post((req, res) => {
    //return;
    let data = new Menu(req.body);
    data
      .save()
      .then((data) => {
        res.status(200).json("Menu added successfully");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });

  return router;
};

module.exports = {
  route,
  routePrefix: "/menu",
  //routePrefix: `/${config.version}/auth`
};
