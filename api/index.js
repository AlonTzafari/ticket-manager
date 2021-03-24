const {Router} = require("express");
const tickets = require("./tickets");

const api = Router();

api.use("/tickets", tickets);

api.use((err, req, res, next) => {
    console.log(err);
    if(err === "Ticket not found") return res.status(404).send(err); 
    res.status(500).send("There was a problem executing your request");
});

module.exports = api;