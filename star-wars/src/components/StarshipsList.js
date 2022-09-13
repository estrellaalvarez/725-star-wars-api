import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function StarshipsList () {

const [ships, setShips] = useState([])
const url = 'https://swapi.dev/api/starships'

 useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setShips(json)
        })
        .catch(console.error)
}, []);

    return (
        <>
        {ships.results?.map((ship)=> {
        let str = ship.url.slice(0,ship.url.length -1)
        let index = str.substring(str.lastIndexOf('/') + 1, str.length);

        return (
            <Link to={`/starships/${index}`} key={index}>
            <h1>{ship.name}</h1>
            </Link>)
    })}
        </>
)}

export default StarshipsList;