import React from 'react';

const DisplayCard = ({card}) => {


    const {id, name, extension, age, time, img} = card;

    console.log(card)
   

    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default DisplayCard;