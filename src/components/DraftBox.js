import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'

function DraftBox() {

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    return (
        <div className="draft-box" >
            
        </div>
    )
}

export default DraftBox
