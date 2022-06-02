const User = require("../../db/postGres").User;

const getUser = (req, res) => {
    const id = req.params.id;
    User.sync().then(async () => {
        const users = await User.findAll();
        let data = JSON.stringify(users, null, 2);
        data = JSON.parse(data);
        const index = data.findIndex((e) => e.uuid == id);
        console.log(index);
        if (index != -1 && !data[index].isdeleted) {
            res.send(data[index]);
        } else {
            res.send({ msg: "User Don't exist" });
        }
    });
};

module.exports = {
    getUser,
};
