import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'

function App() {
  const [heroes, setHeroes] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

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

  const heroesArray = heroes.map(hero => <HeroCard key={hero.name} hero={hero}/>)

  if (!isLoaded) return <h1> Loading </h1>
  return (
    <div className="App">
        <h1> Epic 7 RTA Draft Simulator</h1>
        <div>
          {heroesArray}
        </div>
    </div>
  );
}

export default App;
