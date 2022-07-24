import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { BASE_URL } from './constants'
import './pokedex.css'

async function fetchPokemonsInBulk() {
  return await axios.get(`${BASE_URL}/`)
}

async function fetchSinglePokemon(pokemon) {
  return await axios.get(`${BASE_URL}/${pokemon}`)
}

export default function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const { data, isLoading, error } = useQuery(['pokemons'], fetchPokemonsInBulk)
  
  const pokemons = data?.data?.results

  if (isLoading) return 'Loading...'

  if (error) return error.message

  async function handleChange(event) {
    const pokemon = await fetchSinglePokemon(event.target.value)
    setSelectedPokemon(pokemon.data)
  }

  return (
    <main className='wrapper'>
      <h1>Pokedex</h1>
      <select name='pokemon' onChange={handleChange}>
        {pokemons.map(pokemon => {
          return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        })}
      </select>
      {!!Object.keys(selectedPokemon).length && <section className='pokemon'>
        <img
          src={selectedPokemon.sprites.other.dream_world.front_default}
          alt={selectedPokemon.name}
          height={100}
          width={100}
          srcSet={`
            ${selectedPokemon.sprites.front_default} 400w,
            ${selectedPokemon.sprites.other.dream_world.front_default} 800w
          `}
          sizes="(max-width: 400px) 400px, 800px"
          loading='lazy'
        />
      </section>}
    </main>
  )
}
