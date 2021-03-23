const {Router} = require("express");
const Database = require("../Database");

const tickets = Router();
const ticketDB = new Database();

tickets.get("/", async (req, res, next) => {
    try {
        const tickets = await ticketDB.getAll();
        res.send(tickets);
    } catch (error) {
        next(error);
    }
});

module.exports = tickets;