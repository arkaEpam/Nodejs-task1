const users = require("../../db/data").users;

const updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const index = users.findIndex((e) => e.id == id);
    users[index] = data;
    res.statuscode = 200;
    res.send({ msg: "Updated Sucessfully..." });
};

module.exports = {
    updateUser,
};
