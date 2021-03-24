import React, { useEffect, useState } from 'react';
// import Draggable, {DraggableCore} from 'react-draggable';
import Draft from './Draft';
import HeroCard from './HeroCard';
import Search from './Search';
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const CardComponent = (hero) => {
  return <HeroCard key={hero.id} hero={hero}/>
}

const useStyles = makeStyles((theme) => ({
  heroBox: {
    width: "100%",
    height: "93vh",
    overflow: "auto"
  },
  draftBox: {
    padding: "20px",
  }
}))

function App() {
  const [heroes, setHeroes] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState("")
  const classes = useStyles()

  

  useEffect(() => {
    fetch("https://api.epicsevendb.com/hero")
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        const dataArray = data.results.map((hero, index) => {
          return {
            id: index,
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
  

  const filterDrop = (unit) => {
    // console.log(unit)
    setHeroes(heroes.filter(hero => hero.name !== unit.name))
  }

  const add = (unit) => {
    console.log(unit)
    let newArr = [...heroes, unit]

    console.log(newArr.length)

    for (let i=0; i < newArr.length; i++) {
      let index = i

      while (index > 0 && newArr[index - 1].id >= newArr[index].id) {
        const tmp = newArr[index - 1]
        newArr[index - 1] = newArr[index]
        newArr[index] = tmp
        index -= 1
      }
    }

    setHeroes(newArr)
  }

  const addAndFilter = (unit, removedUnit) => {
    console.log(unit, removedUnit)
    let newArr = [...heroes, unit]

    console.log(newArr.length)

    for (let i=0; i < newArr.length; i++) {
      let index = i

      while (index > 0 && newArr[index - 1].id >= newArr[index].id) {
        const tmp = newArr[index - 1]
        newArr[index - 1] = newArr[index]
        newArr[index] = tmp
        index -= 1
      }
    }

    newArr = newArr.filter(hero => hero.name !== removedUnit.name)

    setHeroes(newArr)
  }

  // iSort(heroes)
  console.log(heroes.length)

  if (!isLoaded) return <h1> Loading </h1>
  return (
    <Grid container className="app">
        <Grid container item xs={9} className={classes.draftBox}>
          <Draft filterDrop={filterDrop} add={add} addAndFilter={addAndFilter}/>
        </Grid>
        <Grid container item xs={3} >
          <Search search={search} setSearch={setSearch}/>
          <Box className={classes.heroBox} id="hero-container">
            {heroesArray}
          </Box>
        </Grid>
    </Grid>
  );
}

export default App;
