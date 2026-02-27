import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);

    // console.log(country.area.area)

    const handleVisited = () => {
    
    // basic system

        //     if (visited) {
    //         setVisited(false)
    //     }
    //     else {
    //         setVisited(true)
    //     }

    // second system

    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handleVisitedCountries(country)
     }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h4>Area:{country.area.area} {
                country.area.area > 3000000 ? "Big Country" : "Small Country"
            }</h4>
            <h4>Population:{country.population.population}</h4>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'not visited'
                }
            </button>
        </div>
    );
};

export default Country;