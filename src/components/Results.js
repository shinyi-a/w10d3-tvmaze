import React, { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
import Search from './Search';

export default function Results(props) {
    // const [chosenMovie, setChosenMovie] = useContext();
    const [searchedResults, setSearchedResults] = useState([]);
    // const movieData = createContext();

    // API CALL
    useEffect(() => {
        async function fetchedData() {
            try {
                let respond = await fetch(`https://api.tvmaze.com/search/shows?q=${props.searchedTitle}`);
                let data = await respond.json();
                setSearchedResults(data);
                console.log("THIS IS THE API", searchedResults)
            }
            catch (error) {
                console.log(error);
            }
        }
        
        fetchedData();

    }, [props.searchedTitle])

    // CLICK EVENT
    const handleClick = () => {
        props.setHasSearched(false);
    }

    const renderResult = searchedResults.map((data, index) => {
        return ( 
        <div className={"moviePoster"} key={index}><a href="#" >
            {/* // onClick={ 
            //     () => { setChosenMovie(data) }
            // } 
            // > */}
                <h3 style={{ textAlign: "center" }}>{data.show.name}</h3>
                <img style={{width: "auto"}} src={data.show.image === null ? "https://t4.ftcdn.net/jpg/03/10/99/43/360_F_310994319_2UDbmr1UT6oncu4Mid7Ezmp5Mz1qvEso.jpg" : data.show.image.medium} alt="No Image" />
                </a>
        </div >
        )
        // }
    })

    return (
        <div className='container'>
            <h1>This is result Page {props.searchedTitle}</h1>
                <button className="searchagain"style={{display:"inline-block", marginBottom: '1rem'}} onClick={handleClick}>Search Again !</button>
                <div className="results">
                    {renderResult === [] ? "Loading" : renderResult}
                </div>
        </div>
    )
}