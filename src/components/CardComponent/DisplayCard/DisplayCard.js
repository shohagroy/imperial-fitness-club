import React from 'react';
import './DisplayCard.css'

const DisplayCard = ({card, addHandelar}) => {


    const {id, name, extension, age, time, img} = card;

   

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <h3>{name}</h3>
                <p>{extension.slice(0,250)}...</p>
                <div >
                    <h4>For Age: {age}</h4>
                    <h4>Fot Time: {time}</h4>
                </div>
            </div>
            <button className='add-button' onClick={()=>addHandelar(card.time)}>Add to List</button>

        </div>
    );
};

export default DisplayCard;