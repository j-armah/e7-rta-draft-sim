import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100px",
        border: "1px solid black",
        borderRadius: "20px",
        // backgroundColor: "rgba(255,255,255, 0.1)"
    }
}))

function Preban({ filterDrop, add, addAndFilter }) {
    const [hero, setHero] = useState(null)
    const [isBanned, setIsBanned] = useState(false)
    const classes = useStyles()

    const handleDrop = (unit) => {
        if (!!hero) {
            console.log('dropped on occupied box', hero)
            addAndFilter(hero, unit)
            setHero(unit)
        } else {
            setHero(unit)   
            filterDrop(unit)
        }
        
    }

    const handleRemove = (unit) => {
        console.log(unit)
        setHero(null)
        setIsBanned(false)
        add(unit)
    }

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => handleDrop(item.hero),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <Box 
            className={classes.box}
            ref={drop} 
            style={{
                backgroundColor: !!hero ? 'rgba(173, 56, 56, 0.5)' : null
            }}
            >
            <Box>
                {!!hero ?
                    <>
                        {/* <h5>{hero.name}</h5> */}
                        <img src={hero.assets?.thumbnail} alt={hero.name} onClick={!!hero ? () => handleRemove(hero) : null}/>
                    </>
                : null}
            </Box>
                
        </Box>
    )
}

export default Preban
