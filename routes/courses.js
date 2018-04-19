const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const getCourses = require("../helpers/getCourses");

const dataDirectory = path.join(__dirname, "..", "data");
const courseDataFile = path.join(dataDirectory, "courses.json");

router.get("/:name", function(req, res, next) {
  getCourses((err, data) => {
    if (err) {
      // This can be replaced with a call to a logging service
      console.log(err);
      return;
    }

    let courses = data.toString("utf8");
    courses = JSON.parse(courses);

    const course = courses[req.params.name];

    res.render("courses", {
      courses,
      course,
    });
  });
});

module.exports = router;
