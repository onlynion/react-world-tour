import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=> {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <h3><small>Code : {cca3}</small></h3>
            <button onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to go'}
        </div>
    );
};

export default Country;