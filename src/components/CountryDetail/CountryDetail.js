import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {

 const {name} = useParams()

  const [country, setCountry]= useState({})
  useEffect(()=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => setCountry(data[0]))
  },[])
  return (
    <div>
      <h2 className="text-primary">Detail of {name}</h2>
      <img src={country.flag} alt="" />
      <h3>Name:{country.name}</h3>
      <p>Capital:{country.capital}</p>
      
    </div>
  );
};

export default CountryDetail;