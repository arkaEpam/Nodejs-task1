const users = require("../../db/data").users;

const deleteUser = (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((e) => e.id == id);
    users[index].isDeleted = true;
    res.statuscode = 200;
    res.send({ msg: "Deleted Sucessfully..." });
};

module.exports = {
    deleteUser,
};
