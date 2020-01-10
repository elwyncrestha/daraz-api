const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

// Register
router.post("/register", (req, res, next) => {
  let password = req.body.password;
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      let err = new Error("Could not hash!");
      err.status = 500;
      return next(err);
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })
      .then(user => {
        res.json({ status: "Signup success!", user: user });
      })
      .catch(next);
  });
});

// Login
router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user == null) {
        let err = new Error("User not found!");
        err.status = 401;
        return next(err);
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              let err = new Error("Password does not match!");
              err.status = 401;
              return next(err);
            }
            res.json({ status: "Login success!" });
          })
          .catch(next);
      }
    })
    .catch(next);
});

module.exports = router;
