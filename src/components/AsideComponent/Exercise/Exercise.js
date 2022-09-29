import React from 'react';
import './Exercise.css'



const Exercise = ({excTime, restTime}) => {


    return (
        <div className='exercise-details-container'>
            <h2>Exercise Details</h2>
            <div className='exercise-container'>
                <h3>Exercise Time</h3>
                <p>{excTime} Minute</p>
                
            </div>
            <div className='exercise-container'>
                <h3>Break time</h3>
                <p>{restTime} Minute</p>
            </div>

            <button>Activity Completed</button>
            
        </div>
    );
};

export default Exercise;