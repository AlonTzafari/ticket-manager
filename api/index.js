const {Router} = require("express");
const tickets = require("./tickets");

const api = Router();

api.use("/tickets", tickets);

api.use((err, req, res, next) => {
    res.status(500).send(err);
});

module.exports = api;