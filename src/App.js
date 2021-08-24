// Three step process to grabbing and displaying data from an API, 
/**
 * Create a react state variable to hold the data
 * Make the API request to hold the data 
 * Render the returned data 
 * We will be getting twelve house from the api and displaying them 
 */

/*
TODO
> Add a page loading, when loading, make it a component
> Add pagination > read the documentation of the api below 
> Read the documentation get idead 
FUTURETODO
> Explore the grapql option
*/
import React, { useState, useEffect } from 'react';
import './App.css';

function App(){

    // Creating the state variable 
    const [house, setHouse] = useState(null);


    useEffect(() => {

        fetchData();

        // Fetching the data using fetch api
        async function fetchData(){
            const response = await fetch("https://anapioficeandfire.com/api/houses?pageSize=100");
            const data = await response.json();
            setHouse(data);
        }

    }, [])

    return(
        <div className="container">
            <h1>Game of Thrones houses</h1>

            {house && 
                <div className="houses">
                    {house.map((house, index)=>(
                        <div key={index} className="house-name">
                            <h2>{house.name}</h2>
                            <div className="region-ruled">
                                <p><strong>Region ruled: </strong>{house.region}</p>
                                <p><strong>Coat of Arms: </strong>{house.coatOfArms}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default App;