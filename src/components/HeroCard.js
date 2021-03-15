import React from 'react'

function HeroCard({ hero }) {
    const { name, rarity, role, assets } = hero

    return (
        <div>
            <h5>{name}</h5>
            <img src={assets.icon} />
        </div>
    )
}

export default HeroCard
