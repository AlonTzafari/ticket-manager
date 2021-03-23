const {Router} = require("express");
const Database = require("../Database");

const tickets = Router();
const ticketDB = new Database();

tickets.get("/", async (req, res, next) => {
    try {
        const searchText = req.query.searchText;
        const tickets = searchText ? await ticketDB.getContainsString(searchText) : await ticketDB.getAll();
        res.send(tickets);
    } catch (error) {
        next(error);
    }
});

tickets.patch("/:id/:status", async (req, res, next) => {
    try {
        console.log("change ticket status");
        console.log("id: ", req.params.id);
        console.log("status: ", req.params.status);
        const ticketId = req.params.id;
        const ticketStatus = req.params.status;
        if (ticketStatus !== "done" && ticketStatus !== "undone") throw "Invalid status";
        const updated = await ticketDB.setStatus(ticketId, ticketStatus);
        console.log("updated: ", updated);
        res.status(200).send({updated});
    } catch(error) {
        next(error);
    } 

});

module.exports = tickets;