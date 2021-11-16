import React, {useState} from "react";
import '../index.css';

export default function Search(props) {
    const [searchBarState, setSearchBarState] = useState("");
    
    const handleSearchChange = (event) => {
        setSearchBarState(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmit = () => {
        //Bring user to result page
        //Transfer Name to result page as well.
        props.setSearchedTitle(searchBarState);
        props.setHasSearched(true);
        setSearchBarState("");
    }
    
    return <div className='search'>
    <input name="searchedText" value={searchBarState} onChange={handleSearchChange} type='text' placeholder='Enter a Movie Title...'/><br />
    <input type='submit' onClick={handleSubmit} className='search-button' value='submit'/>
    </div>
}