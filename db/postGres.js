const { user } = require("pg/lib/defaults");
const { Sequelize, DataTypes, Model } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize("postgres", "postgres", "root", {
    host: "localhost",
    dialect: "postgres",
});

const testCon = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testCon();

class nodetask extends Model {}

const User = db.define(
    "nodetask",
    {
        // Model attributes are defined here
        uuid: {
            type: DataTypes.INTEGER,
        },

        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        loginpassword: {
            type: DataTypes.STRING,
            // allowNull defaults to true
        },
        age: {
            type: DataTypes.INTEGER,
        },
        isdeleted: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        // Other model options go here
        db, // We need to pass the connection instance
        modelName: "nodetask", // We need to choose the model name
    }
);

module.exports = {
    User,
};
