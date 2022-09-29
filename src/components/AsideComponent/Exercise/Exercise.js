import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div className='exercise-details-container'>
            <h2>Exercise Details</h2>
            <div className='exercise-container'>
                <h3>Exercise Time</h3>
                <p>30 Minute</p>
                
            </div>
            <div className='exercise-container'>
                <h3>Break time</h3>
                <p>10 Minute</p>
            </div>

            <button>Activity Completed</button>
            
        </div>
    );
};

export default Exercise;