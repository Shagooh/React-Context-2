import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Pokemones = () => {

  const [pokemones, setPokemones] = useState([])
  const [optionSelected, setOptionSelected] = useState("bulbasaur")

  async function peticionApi() {
    try {
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
      const res = await fetch(apiUrl)
      const { results } = await res.json()
      setPokemones(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    peticionApi()
  }, [])

  const handleSelect = ({ target: { value } }) => setOptionSelected(value)

  const navigate = useNavigate()

  const goToDetails = () => {
    if (!optionSelected) {
      alert("Debes seleccionar un pokemon")
    } else {
      navigate(`/pokemones/${optionSelected}`)
    }
  }

  return (
    <>
      <section className="buscador">
        <h1>Pokémones</h1>
        <h2>Selecciona tu pokemon</h2>
        <select onChange={(value) => handleSelect(value)}>
          {pokemones && pokemones.map(({ id, name }) =>
            <option value={id} key={name}>{name}</option>
          )}
        </select>
        <button onClick={goToDetails}>Detalles</button>
      </section>
    </>
  )
}

export default Pokemones