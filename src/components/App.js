import React, { useEffect, useState } from 'react';
// import Draggable, {DraggableCore} from 'react-draggable';
import Draft from './Draft';
import HeroCard from './HeroCard';
import Search from './Search';
import { Grid } from '@material-ui/core'

const CardComponent = (hero) => {
  return <HeroCard key={hero.id} hero={hero}/>
}

function App() {
  const [heroes, setHeroes] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState("")

  const handleDrop = () => {

  }

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



  const searchedHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()))
  const heroesArray = searchedHeroes.map( CardComponent )

  if (!isLoaded) return <h1> Loading </h1>
  return (
    <Grid container className="app">
        <Grid container item xs={9} >
          <Draft />
        </Grid>
        <Grid container item xs={3} >
          <Search search={search} setSearch={setSearch}/>
          {heroesArray}
        </Grid>
    </Grid>
  );
}

export default App;
