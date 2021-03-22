import React, { useState} from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'

function DraftBox() {
    const [hero, setHero] = useState(null)

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item) => setHero(item.hero),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <div className="draft-box"  ref={drop} style={{
            backgroundColor: isOver ? 'blue' : 'grey'
        }}>
            <h5>{!!hero ? hero.name : null}</h5>
            <img src={!!hero ? hero.assets.icon : null} />
        </div>
    )
}

export default DraftBox
