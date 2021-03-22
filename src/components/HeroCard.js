import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/items'
// import Draggable, {DraggableCore} from 'react-draggable';


function HeroCard({ hero }) {
    const { name, rarity, role, assets } = hero
    
    const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CARD,
		id: hero.id,
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});
    return (

            <div className="hero-card" ref={drag}>
                <h5>{name}</h5>
                <img src={assets.thumbnail} />
            </div>
        
    )
}

export default HeroCard
