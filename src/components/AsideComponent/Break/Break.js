import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div className='break-container'>
            <h2>Add a Break</h2>
            <div className='break-button-container'>
                <div className='button'>
                    <p>10<small>S</small></p>
                </div>
                <div className='button'>
                    <p>20<small>S</small></p>
                </div>
                <div className='button'>
                    <p>30<small>S</small></p>
                </div>
                <div className='button'>
                    <p>40<small>S</small></p>
                </div>
                <div className='button'>
                    <p>50<small>S</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default Break;