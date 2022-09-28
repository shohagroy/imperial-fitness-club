import React, { useEffect, useState } from 'react';
import './CardComponent.css'
import DisplayCard from './DisplayCard/DisplayCard';
import Header from './Header/Header';




const CardComponent = () => {

        
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='main-card-container'>
            <Header/>
            <div className='card-container'>
            {
                cards.map(card => <DisplayCard 
                    card={card}
                    /> )
            }

            </div>
            
            
        </div>
    );
};

export default CardComponent;