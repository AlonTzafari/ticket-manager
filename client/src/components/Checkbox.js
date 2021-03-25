import "../styles/Checkbox.css";

function Checkbox(props) {
    return (
        <div className="checkbox">
            Check
            <div className="container" onClick={() => props.markDone(!props.done)}>
                <input type="checkbox" name="done" checked={props.done}/>
                <span className="checkmark">✔</span>
            </div>
        </div>
    )
}

export default Checkbox
