import React from 'react';
import './DisplayCard.css'

const DisplayCard = ({card}) => {


    const {id, name, extension, age, time, img} = card;

    console.log(card)
   

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
            <button className='add-button'>Add to List</button>

        </div>
    );
};

export default DisplayCard;