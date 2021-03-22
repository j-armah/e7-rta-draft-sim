import React, { useState} from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "15%",
        border: "1px solid black",
        borderRadius: "20px"
    }
}))

function DraftBox() {
    const [hero, setHero] = useState(null)
    const [isBanned, setIsBanned] = useState(false)
    const classes = useStyles()

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => setHero(item.hero),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <Box 
            className={classes.box}
            ref={drop} 
            style={{
                backgroundColor: isBanned ? 'red' : null
            }}>
                {!!hero ?
                    <>
                        <h5>{hero.name}</h5>
                        <img src={hero.assets.thumbnail} />
                        <Button onClick={() => setIsBanned(true)}> BAN </Button>
                    </>
                    

                : null}
        </Box>
    )
}

export default DraftBox
