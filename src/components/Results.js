import React, { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
import Search from './Search';

export default function Results(props) {
    // const [chosenMovie, setChosenMovie] = useContext();
    const [searchedResults, setSearchedResults] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null)
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

    }, [])

    // CLICK EVENT
    const handleClick = () => {
        props.setHasSearched(false);
    }

    const renderResult = searchedResults.map((data, index) => {
        console.log('THIS IS DATA FROM ONE ITEM',data)
        // let imgurl= data.show.image['medium'];
        return ( 
        <div className={"moviePoster"} key={index} 

        >
            {/* // onClick={ 
            //     () => { setChosenMovie(data) }
            // } 
            // > */}
            <div onClick={() => setSelectedMovie(data)}>
                <h3 style={{ textAlign: "center" }}>{data.show.name}</h3>
                <img style={{width: "auto"}} src={data.show.image === null ? "no results" : data.show.image.medium}/>
                {/* <img style={{width: "auto"}} src={imgurl} /> */}
            </div>
        </div >
        )
        // }
    })

    // const selectedMovieHTML = () => {
    //     return <div><h1>Selected Movie Is working</h1></div>
    // }

    return (
        <div className='container'>
            <h1>This is result Page {props.searchedTitle}</h1>
                <button className="searchagain"style={{display:"inline-block", marginBottom: '1rem'}} onClick={handleClick}>Search Again !</button>
                <div className="results">
                    {renderResult === [] ? "Loading" : renderResult}
                    {/* {selectedMovie === null ? "" : selectedMovieHTML} */}
                </div>
        </div>
    )
}

