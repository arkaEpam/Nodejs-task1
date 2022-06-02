// For validation
const Joi = require("joi");

// schema for validation of data which is parsed
const schema = Joi.object({
    uuid: Joi.number().integer().required(),

    login: Joi.string().required(),

    loginpassword: Joi.string()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[0-9])"))
        .required(),

    age: Joi.number().integer().min(4).max(130).required(),

    isdeleted: Joi.boolean().required(),
});

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
    validation,
};
