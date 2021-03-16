import React from 'react'

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
