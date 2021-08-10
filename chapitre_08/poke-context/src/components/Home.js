import { useState, useEffect } from "react";

const Home = () => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/1")
            .then((res) => res.json())
            .then((res) => {
                setPokemon(res);
            })
    })

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])

    setPokemon((pokemon) => {
        return pokemon;
    })
    
    function randomNumber() {
        return Math.floor (Math.random() * 100) + 1;
    }

    return (
        <div>
            {pokemon.map((poke) => ( 
                <p key={poke.id}>{poke.name}</p>
            ))}

            <button onClick={randomNumber}>Random</button>
        </div>
    )
}

export default Home;