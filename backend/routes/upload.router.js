const express = require("express");
const fs = require("fs");
const path = require("path");

const route = () => {
  const router = new express.Router();

  //Delete kullanılmıyyor
  router.route("/delete/:file").get((req) => {
    let file = req.params.file;
    let filePath = path.join(path.resolve("../public/uploads/"), file);
    fs.unlinkSync(filePath);
    console.log("Delete");
  });

  //Upload
  router.route("/").post((req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }
    console.log("Upload");
    /*
multi file upload
_.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];
*/

    let targetFile = req.files.photo;
    let extName = path.extname(targetFile.name);
    let baseName = path.basename(targetFile.name, extName);
    let uploadDir = path.join(
      path.resolve("../public/uploads/"),
      targetFile.name
    );

    let imgList = [".png", ".jpg", ".jpeg", ".gif"];
    // Checking the file type
    if (!imgList.includes(extName)) {
      fs.unlinkSync(targetFile.tempFilePath);
      return res.status(422).send("Invalid Image");
    }

    //size control
    if (targetFile.size > 1048576) {
      fs.unlinkSync(targetFile.tempFilePath);
      return res.status(413).send("File is too Large");
    }

    // Renaming the file
    let num = 1;
    while (fs.existsSync(uploadDir)) {
      uploadDir = path.join(
        path.resolve("../public/uploads/"),
        baseName + "-" + num + extName
      );
      num++;
    }

    //photo.mv("./public/uploads/" + photo.name);
    targetFile.mv(uploadDir, (err) => {
      if (err) {
        console.log("Upload", err);
        return res.status(500).send(err);
      }
      res.send("File uploaded!");
    });
  });
  return router;
};

module.exports = {
  route,
  routePrefix: "/upload",
  //routePrefix: `/${config.version}/auth`
};
