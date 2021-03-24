import React from 'react'
import "../styles/Label.css"

function Label(props) {
    return (
        <div className={`label ${props.label.replace(" ", "")}`}>
            {props.label}
        </div>
    )
}

export default Label
