import {useState} from 'react';
import Label from "./Label";
import Checkbox from "./Checkbox";
import axios from "axios";
import "../styles/Ticket.css";

function Ticket(props) {

    const [done, setDone] = useState(props.ticket.done);

    function markDone(isDone) {
        const status = isDone ? "done" : "undone";
        axios.patch(`/api/tickets/${props.ticket._id}/${status}`)
        .then(({data}) => {
            if (data.updated) setDone(isDone);
        });
    }
    return (
        <div className={`ticket ${done ? "done" : null}`}>
            <div className="hideTicketButton" onClick={props.hideTicket}>Hide</div>
            <h2>{props.ticket.title}</h2>
            <p>{props.ticket.content}</p>
            <div className="labelList">
                {props.labels?.map((label, i) => <Label key={i} label={label} />)}
            </div>
            <p className="details">
                <span>{props.ticket.userEmail}</span> | <span>{formatDate( new Date(props.ticket.creationTime) )}</span>
            </p>
            <Checkbox done={done} markDone={markDone}/>
        </div>
    );
}

export default Ticket;

function formatDate(date) {
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const {hr, ampm} = date.getHours() > 12
        ? {hr: date.getHours() - 12, ampm:"PM"}
        :{hr: date.getHours(), ampm:"AM"};
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${dd}/${mm}/${yyyy}, ${hr}:${min}:${sec} ${ampm}`;
}
