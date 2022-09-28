import React from 'react';

const DisplayCard = ({card}) => {


    const {id, name, extension, age, time, img} = card;

    console.log(card)
   

    return (
        <div className='card'>
            <img src={img} alt="" />
        </div>
    );
};

export default DisplayCard;