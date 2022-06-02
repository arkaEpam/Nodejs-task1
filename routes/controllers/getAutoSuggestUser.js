const User = require("../../db/postGres").User;

const getAutoSuggestUser = (req, res) => {
    const loginSubStr = req.params.loginSubStr;
    const limit = req.params.limit;
    console.log(loginSubStr);
    User.sync().then(async () => {
        const users = await User.findAll();
        let data = JSON.stringify(users, null, 2);
        data = JSON.parse(data);
        let limitUser = data.filter((user) => {
            return user.login === loginSubStr && user.isdeleted === false;
        });
        limitUser = limitUser.slice(0, limit);
        res.send(limitUser);
    });
};

module.exports = {
    getAutoSuggestUser,
};
