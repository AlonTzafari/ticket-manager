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

    async getContainsString(text) {
        const regex =  new RegExp(text, "i");
        return await Ticket.find({title: {$regex: regex}});
    }
}

module.exports = Database;