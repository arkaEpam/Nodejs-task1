const users = require("../../db/data").users;
const saveUser = (req, res) => {
    users.push(req.body);
    res.statuscode = 200;
    res.send({ msg: "User updated Sucessfully" });
};

module.exports = {
    saveUser,
};
