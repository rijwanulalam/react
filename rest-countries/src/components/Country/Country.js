import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props)
    const {name, population, flags} = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;