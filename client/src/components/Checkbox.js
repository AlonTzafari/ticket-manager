import React from 'react'

function Checkbox(props) {
    return (
        <label for="done">
            Check<input type="checkbox" name="done" onClick={() => props.markDone(!props.done)} checked={props.done}></input>
        </label>
    )
}

export default Checkbox
