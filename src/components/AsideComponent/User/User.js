import React from 'react';
import './User.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import image from '../../Images/user-image.png'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';



const User = () => {
    return (
        <div className='user'>
            <div className='user-info'>
            <img src={image} alt="user-image" />
             <div className='info'>
                <h3>Shohag Roy</h3>
                <p> <FontAwesomeIcon className='icon' icon={faLocationPin}/>
                Rangpur, Bangladesh</p>
            </div>
        </div>

            <div className='info-container'>
                <div>
                    <h2>62<samp><small>kg</small></samp></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>24<samp><small>yrs</small></samp></h2>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default User;