import {useState} from 'react'
import "../styles/SearchBar.css"

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    
    function onChange(event) {
        const input = event.target.value;
        setSearchText(input);
        props.searchHandler(input);
    }
    
    return (
        <>
            <input id="searchInput" type="text" value={searchText} onChange={onChange} placeholder="Enter search text"></input>
        </>
    )
}

export default SearchBar
