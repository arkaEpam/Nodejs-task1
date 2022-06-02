const express = require("express");

// Action for different routes
const getUser = require("./controllers/getUser").getUser;
const saveUser = require("./controllers/saveUser").saveUser;
const updateUser = require("./controllers/updateUser").updateUser;
const deleteUser = require("./controllers/deleteUser").deleteUser;
const getAutoSuggestUser =
    require("./controllers/getAutoSuggestUser").getAutoSuggestUser;

//Middleware
const middleware = require("../middleware");

const router = express.Router();

router.get("/getUser/:id", getUser);
router.get("/getUser/:loginSubStr/:limit", getAutoSuggestUser);
router.post(
    "/saveUser",
    middleware.validation, //check the validation of the data
    saveUser
);
router.put(
    "/updateUser/:id",
    middleware.validation, //check the validation of the data
    updateUser
);
router.delete("/deleteUser/:id", deleteUser);

router.use("/*", (req, res) => {
    res.statusCode = 404;
    res.send({ msg: "You might given a Wrong URL..." });
});

module.exports = {
    router,
};
