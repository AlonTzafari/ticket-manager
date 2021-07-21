import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import Ticket from "./components/Ticket";
import SearchBar from "./components/SearchBar";

function App() {
  const [tickets, setTickets] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);
  
  useEffect(() => {
    axios.get("/api/tickets")
    .then(({data}) => setTickets(data));
     
  }, []);

  function searchHandler(text) {
    if(typeof(text) !== "string") throw new Error("search input must be of type String");
    axios.get("/api/tickets?searchText=" + text)
    .then(({data}) => setTickets(data));
  }

  function hideTicket(key) {
    if(hiddenTickets.includes(key)) return;
    setHiddenTickets( hiddenTickets.concat([key]) );
  }

  function restoreTickets() {
    setHiddenTickets([]);
  }

  return (
    <div className="app">
      <h1>Ticket Manager</h1>
      <SearchBar searchHandler={searchHandler}/>
      <div className="ticketList">
        <span className="ticketListDetails">
          showing {tickets.length} results
          (<span id="hideTicketsCounter" className="hideTicketsCounter">{hiddenTickets.length}</span>{" hidden - "} 
          <span id="restoreHideTickets" onClick={restoreTickets}>restore</span>)
        </span>
        {tickets.map( (ticket, i) => 
          hiddenTickets.includes(i)
            ? null
            : <Ticket key={i} ticket={ticket} labels={ticket.labels} hideTicket={() => hideTicket(i)}/>
        )}
      </div>
    </div>
  );
}

export default App;
