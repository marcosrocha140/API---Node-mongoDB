const router = require("express").Router();

const usersController = require("../controllers/usersController");

router.route("/users").post((req, res) => usersController.create(req, res));

router.route("/users").get((req, res) => usersController.getAll(req, res));


module.exports = router;