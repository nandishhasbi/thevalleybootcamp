var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:name", function(req, res, next) {
  res.render("courses", {
    page: {
      title: req.params.name,
    },
  });
});

module.exports = router;
