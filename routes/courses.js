const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const dataDirectory = path.join(__dirname, "..", "data");
const courseDataFile = path.join(dataDirectory, "courses.json");

/* GET home page. */
router.get("/:name", function(req, res, next) {
  fs.readFile(courseDataFile, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Something went wrong.");
    }

    let courses = data.toString("utf8");
    courses = JSON.parse(courses);

    const course = courses[req.params.name];

    if (!course) {
      return res.redirect("/");
    }

    res.render("courses", {
      courses,
      course,
      page: {
        title: req.params.name,
      },
    });
  });
});

module.exports = router;
