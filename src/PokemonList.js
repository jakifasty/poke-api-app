import React from 'react'

export default function PokemonList({ pokemon }) {

    return (
        <div>
            {pokemon.map(pok => (
                <div key={pok}>
                    {pok}
                </div>
            ))}
        </div>
  )
}
