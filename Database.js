const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

});
const Ticket = mongoose.model("Ticket", ticketSchema, "tickets");

class Database {
    constructor() {
    }

    async getAll() {
        return await Ticket.find({});
    }
}

module.exports = Database;