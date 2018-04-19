var express = require("express");
var router = express.Router();
const getCourses = require("../helpers/getCourses");

/* GET home page. */
router.get("/", function(req, res, next) {
  getCourses((err, courses) => {
    if (err) {
      return res.status(500).send("Internal server error");
    }

    res.render("index", {
      courses,
    });
  });
});

module.exports = router;
