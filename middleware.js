const users = require("./db/data").users;

// For validation
const Joi = require("joi");

// schema for validation of data which is parsed
const schema = Joi.object({
    id: Joi.string().required(),

    login: Joi.string().required(),

    password: Joi.string()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])"))
        .required(),

    age: Joi.number().integer().min(4).max(130).required(),

    isDeleted: Joi.boolean().required(),
});

// TO cheack if userExists with given id if it's there don't proceed.
const isUserExist = (req, res, next) => {
    const userData = req.body;
    const id = userData.id;
    let index = users.findIndex((user) => user.id == id);
    console.log(index);
    // It will take deleted id as valid id
    if (index !== -1) {
        res.statuscode = 500;
        return res.send({ msg: "User already exists with given id" });
    }
    //If user don't exist then...
    next();
};

// if the id exists or not and also visible or not
const validId = (req, res, next) => {
    const id = req.params.id;
    const index = users.findIndex((e) => e.id == id);
    // Checks the valid id and also if it's not deleted
    if (index === -1 || (index !== -1 && users[index].isDeleted === true)) {
        res.statuscode = 404;
        return res.send({ msg: "User doesn't exist with given id" });
    }
    next();
};

// for the data which need to be parsed
const validation = (req, res, next) => {
    const data = req.body;
    const { error, value } = schema.validate(data);
    if (error) {
        res.statuscode = 400;
        return res.send({ msg: error.details[0].message });
    }
    next();
};

// Exports of the page
module.exports = {
    isUserExist,
    validId,
    validation,
};
