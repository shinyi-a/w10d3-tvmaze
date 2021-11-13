import React from "react";

export default function Search() {
    return <div className='search'>
    <input type='text' placeholder='Enter a Movie Title...'/><br />
    <input type='submit' className='submit-button' value='Search'/>
    </div>
}