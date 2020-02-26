const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/", (req, res) => {
  // --- ADD YOUR APIXU API KEY ----- //
  request({
    uri: "http://api.weatherstack.com/current",
    qs: {
      access_key: "08d013450f3a8e9e30ba45217b7bf8de",
      query: req.query.city
    }
  }).pipe(res);
});

module.exports = router;
