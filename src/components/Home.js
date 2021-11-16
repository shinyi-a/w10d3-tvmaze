import React, {useState} from 'react';
import Search from './Search';
import Result from './Results'

export default function Home() {
    const [searchedTitle, setSearchedTitle] = useState("");
    const [hasSearched, setHasSearched] = useState(false);

    return ( 
    <div className='home'>
    <h1 className='title'>TVMaze React</h1>
    <Search setSearchedTitle={setSearchedTitle} setHasSearched={setHasSearched} />
    {hasSearched ? <Result setHasSearched={setHasSearched} searchedTitle={searchedTitle} />: ""}
    
    </div>
    )
}