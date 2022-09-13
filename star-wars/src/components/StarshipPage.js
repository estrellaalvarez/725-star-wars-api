import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function StarshipsPage() {
let  {index} = useParams();
const [ship, setShip] = useState([])
const url = `https://swapi.dev/api/starships/${index}`

 useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
        setShip(json)
        })
        .catch(console.error)
}, []);

    return (
        <>
        <h1>Starship Page</h1>
        <p>Ship: {ship.name} </p>
        <p>Model: {ship.model} </p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Cost: {ship.cost_in_credits} credits</p>
        <p>Passenger Capacity: {ship.passengers}</p>
        <p>Max speed in atmosphere: {ship.max_atmosphering_speed} mph</p>
        </>
    )
}

export default StarshipsPage;