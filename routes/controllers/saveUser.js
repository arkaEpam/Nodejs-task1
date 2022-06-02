const User = require("../../db/postGres").User;

const saveUser = (req, res) => {
    User.sync().then(async () => {
        const id = req.body.uuid;
        const users = await User.findAll();
        let data = JSON.stringify(users, null, 2);
        data = JSON.parse(data);
        const index = data.findIndex((e) => e.uuid == id);
        console.log(index);
        if (index === -1) {
            const dataStored = await User.create(req.body);
            res.statuscode = 200;
            res.send({ msg: "User updated Sucessfully" });
        } else {
            res.send({ msg: "User Already exists" });
        }
    });
};

module.exports = {
    saveUser,
};
