const express = require("express");
const router = express.Router();
const accessCountController = require ("../controllers/access.count.controller")
const usersController = require ("../controllers/users.controller")

router.post("/api/v1/user", usersController.createUser)
router.get("/api/v1/user/:userId", usersController.getUser)
router.post("/api/v1/access-count", accessCountController.incrementAccessCount);
router.get("/api/v1/access-count", accessCountController.getAccessCount);

module.exports = router;