import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
   const countries = countriesData.countries;
  
    return (
        <div className='countries'>
            <h1>In the Countries:{countries.length}</h1>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}></Country>)
            }
        </div>
    );
};

export default countries;