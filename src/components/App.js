import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'
import Search from './Search'

function App() {
  const [heroes, setHeroes] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://api.epicsevendb.com/hero")
      .then(resp => resp.json())
      .then(data => {
        // console.log(data.results)
        const dataArray = data.results.map(hero => {
          return {
            name: hero.name, 
            rarity: hero.rarity,
            role: hero.role,
            assets: hero.assets,
          }
        })
        setHeroes(dataArray)
        console.log(dataArray)
        setIsLoaded(true)
      })
  }, [])
  
  const searchedHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
  const heroesArray = searchedHeroes.map(hero => <HeroCard key={hero.name} hero={hero}/>)

  if (!isLoaded) return <h1> Loading </h1>
  return (
    <div className="app">
        <div className="draft-container">
          <p> Draft container</p>
        </div>
        <div className="hero-container">
          <Search search={search} setSearch={setSearch}/>
          {heroesArray}
        </div>
    </div>
  );
}

export default App;
