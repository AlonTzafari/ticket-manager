import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import Ticket from "./components/Ticket";

function App() {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    axios.get("/api/tickets")
    .then(({data}) => setTickets(data));
     
  }, []);

  return (
    <div>
      <h1>Ticket Manager</h1>
      {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} labels={ticket.labels}/>)}
    </div>
  );
}

export default App;
