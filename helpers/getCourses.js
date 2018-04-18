const fs = require("fs");
const path = require("path");

const dataDirectory = path.join(__dirname, "..", "data");
const courseDataFile = path.join(dataDirectory, "courses.json");

function getCourses(cb) {
  fs.readFile(courseDataFile, (err, data) => {
    if (err) {
      return cb(err);
    }

    try {
      let courses = data.toString("utf8");

      return cb(null, JSON.parse(courses));
    } catch (e) {
      return cb(e);
    }
  });
}

module.exports = getCourses;
