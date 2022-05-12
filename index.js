const express = require("express");
const router = require("./routes/routercontroller").router;

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/users", router);
app.use("/*", (req, res) => {
    res.statusCode = 404;
    res.send({ msg: "You might given a Wrong URL..." });
});

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT}...`);
});
