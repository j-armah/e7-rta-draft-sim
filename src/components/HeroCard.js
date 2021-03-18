import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';


function HeroCard({ hero }) {
    const { name, rarity, role, assets } = hero

    return (
        <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}>
            <div className="hero-card">
                <h5>{name}</h5>
                <img src={assets.thumbnail} />
            </div>
        </Draggable>
        
    )
}

export default HeroCard
