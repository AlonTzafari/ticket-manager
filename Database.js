const Ticket = require("./Ticket");

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

    async setStatus(id, ticketStatus) {
        if (ticketStatus !== "done" && ticketStatus !== "undone") throw "Invalid status";
        const status = ticketStatus === "done" ? true : false;
        try {
            const ticket = await Ticket.findByIdAndUpdate(id, {done: status}, {new: true});
            console.log(ticket);
            if (ticket === null) throw "Ticket not found"
            return true;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Database;