import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable';


function HeroCard({ hero }) {
    const { name, rarity, role, assets } = hero

    return (
        <div className="hero-card">
            <h5>{name}</h5>
            <img src={assets.thumbnail} />
        </div>
    )
}

export default HeroCard
