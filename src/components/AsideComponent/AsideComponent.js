import React from 'react';
import './AsideComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import image from '../Images/user-image.png'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';



const AsideComponent = () => {
    return (
        <div className='aside'>
            <div className='user-info'>
                <img src={image} alt="user-image" />
                <div className='info'>
                    <h3>Shohag Roy</h3>
                    <p> <FontAwesomeIcon className='icon' icon={faLocationPin}/>
                        Rangpur, Bangladesh</p>
                </div>

            </div>
            
        </div>
    );
};

export default AsideComponent;