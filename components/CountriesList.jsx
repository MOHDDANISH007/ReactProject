import React from 'react';
import CountryCard from './CountryCard.jsx';
import countriesData from '../countriesData.js';

const CountriesList = () => {
    console.log(countriesData);

    // Create a variable to store the mapped array of CountryCard components
    // const mapArray = countriesData.map((country) => (
    //     <CountryCard
    //         key={country.name.common} // Unique key for React
    //         name={country.name.common}
    //         flag={country.flags.png}
    //         population={country.population}
    //         region={country.region}
    //         capital={country.capital}
    //     />
    // ));

    // return (
    //     <div className="countries-container">
    //         {mapArray}
    //     </div>
    // );

    return (
        <div className="countries-container">

            {countriesData.map((country) => (
                <CountryCard
                    key={country.name.common} // Unique key for React
                    name={country.name.common}
                    flag={country.flags.png}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />
            ))}
        </div>
    )
};

export default CountriesList;
