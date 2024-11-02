import React from 'react';
import CountryCard from './CountryCard.jsx';
import countriesData from '../countriesData.js';

const CountriesList = ({query}) => {
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
    const filterData = countriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
    })

    const mapArray = filterData.map((country) => (
        <CountryCard
            key={country.name.common} // Unique key for React
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
        />
    ));


    return (
        <div className="countries-container">
            {mapArray}
        </div>
        
    )
};

export default CountriesList;
