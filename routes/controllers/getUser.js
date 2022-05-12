const users = require("../../db/data").users;
const getUser = (req, res) => {
    const id = req.params.id;
    res.statuscode = 200;
    const index = users.findIndex((e) => e.id == id);
    res.send(users[index]);
};

module.exports = {
    getUser,
};
