const router = require("express").Router();


//Rota dos usuarios
const usersRouter = require("./users");

router.use("/", usersRouter);


module.exports = router;