import {useState} from 'react'

function SearchBar(props) {
    const [searchText, setSearchText] = useState("");
    
    function onChange(event) {
        const input = event.target.value;
        setSearchText(input);
        props.searchHandler(input);
    }
    
    return (
        <>
            <input id="searchInput" type="text" value={searchText} onChange={onChange}></input>
        </>
    )
}

export default SearchBar
