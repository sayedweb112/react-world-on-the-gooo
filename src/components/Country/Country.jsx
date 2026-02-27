import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country.area.area)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <h3>Capital: {country.capital.capital}</h3>
            <h4>Area:{country.area.area}</h4>
            <h4>Population:{country.population.population}</h4>
        </div>
    );
};

export default Country;