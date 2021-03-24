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
    if(typeof(text) !== "string") throw "search input must be of type String";
    axios.get("/api/tickets?searchText=" + text)
    .then(({data}) => setTickets(data));
  }

  return (
    <div>
      <h1>Ticket Manager</h1>
      <SearchBar searchHandler={searchHandler}/>
      <span>showing {tickets.length} results</span>
      {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} labels={ticket.labels}/>)}
    </div>
  );
}

export default App;
