import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
  const {name, flag ,altSpellings, capital,borders} = props.country
 
  return (
    <div className="container text-center">
      <div className="row border mt-3 py-3 ">
        <div className="col-md-6">
        <div className="countryStyle  p-1 shadow">
            <img src={flag}  alt=""/>
            
      </div>
        </div>
      
      <div className="com-md-6">
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Alt Spellings: {altSpellings}</p>
        <p>Borders: {borders}</p>
        <Link to ={`country/${name}`} className="btn btn-primary">Detail of {name}
        </Link>
        
      </div>
      </div>
    </div>
   
  );
};

export default Country;