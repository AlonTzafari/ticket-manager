import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import Ticket from "./components/Ticket";
import SearchBar from "./components/SearchBar";

function App() {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    axios.get("/api/tickets")
    .then(({data}) => setTickets(data));
     
  }, []);

  function searchHandler(text) {
    if(typeof(text) !== "string") throw new Error("search input must be of type String");
    axios.get("/api/tickets?searchText=" + text)
    .then(({data}) => setTickets(data));
  }

  return (
    <div className="app">
      <h1>Ticket Manager</h1>
      <SearchBar searchHandler={searchHandler}/>
      <span>showing {tickets.length} results</span>
      <div className="ticketList">
        {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} labels={ticket.labels}/>)}
      </div>
    </div>
  );
}

export default App;
