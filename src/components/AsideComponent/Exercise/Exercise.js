import React from 'react';
import './Exercise.css'

import swal from 'sweetalert';




const Exercise = ({excTime, restTime}) => {


    const sweetAlert = ()=>{
        swal({
            title: "Congratulations!",
            text: "You Daily Activity Completed!",
            icon: "success",
          });
    }

        if(!restTime){
            restTime = 0;
        }


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


            <button onClick={sweetAlert}>Activity Completed</button>
            
        </div>
    );
};

export default Exercise;