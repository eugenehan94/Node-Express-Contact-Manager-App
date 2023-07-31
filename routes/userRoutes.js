const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// NOTE: validateToken protects this path - if no active JWT, then no access
router.get("/current", validateToken, currentUser);

module.exports = router;
