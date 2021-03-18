import React, { useEffect, useState } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import Draft from './Draft';
import HeroCard from './HeroCard';
import Search from './Search';

const CardComponent = (hero) => {
  return <HeroCard key={hero.id.toString()} hero={hero}/>
}

function App() {
  const [heroes, setHeroes] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://api.epicsevendb.com/hero")
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        const dataArray = data.results.map(hero => {
          return {
            id: hero.id,
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



  // const searchedHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
  // const heroesArray = searchedHeroes.map( CardComponent )

  if (!isLoaded) return <h1> Loading </h1>
  return (
    <div className="app">
        <div className="draft-container">
          <Draft />
        </div>
        <div className="hero-container">
          <Search search={search} setSearch={setSearch}/>
          {heroes.map( CardComponent )}
        </div>
    </div>
  );
}

export default App;
