const {Router} = require("express");

const tickets = Router();

tickets.get("/", (req, res, next) => {
    res.send("hello tickets");
});

module.exports = tickets;