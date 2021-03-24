import React from 'react';
import Label from "./Label";

function Ticket(props) {
    return (
        <div className="ticket">
            <h2>{props.ticket.title}</h2>
            <p>{props.ticket.content}</p>
            {props.labels?.map((label, i) => <Label key={i} label={label} />)}
            <p>
                <span>{props.ticket.userEmail}</span> | <span>{formatDate( Date(props.ticket.creationTime) )}</span>
            </p>
        </div>
    );
}

export default Ticket;

function formatDate(date) {
    const ndate = new Date()
    const dd = ndate.getDate();
    const mm = ndate.getMonth() + 1;
    const yyyy = ndate.getFullYear();
    const {hr, ampm} = ndate.getHours() >= 12
        ? {hr: ndate.getHours() - 12, ampm:"PM"}
        :{hr: ndate.getHours(), ampm:"AM"};
    const min = ndate.getMinutes();
    const sec = ndate.getSeconds();
    return `${dd}/${mm}/${yyyy}, ${hr}:${min}:${sec} ${ampm}`;
}
