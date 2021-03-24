import React, { useState} from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { Box, Button, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "15%",
        border: "1px solid black",
        borderRadius: "20px",
        backgroundColor: "rgba(255,255,255, 0.1)"
    }
}))

function DraftBox({ filterDrop }) {
    const [hero, setHero] = useState(null)
    const [isBanned, setIsBanned] = useState(false)
    const classes = useStyles()

    const handleDrop = (unit) => {
        setHero(unit)
        filterDrop(unit)
    }

    const handleRemove = (unit) => {
        console.log(unit)
        setHero(null)
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
            onClick={!!hero ? () => handleRemove(hero) : null}
            ref={drop} 
            style={{
                backgroundColor: isBanned ? 'rgba(173, 56, 56, 0.5)' : null
            }}>
                {!!hero ?
                    <>
                        <h5>{hero.name}</h5>
                        <img src={hero.assets.thumbnail} />
                        <Button onClick={() => setIsBanned(!isBanned)}> BAN </Button>
                    </>
                    

                : null}
        </Box>
    )
}

export default DraftBox
