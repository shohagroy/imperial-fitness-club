import React from 'react';
import './Break.css'

const Break = ({breakButton}) => {



    return (
        <div className='break-container'>
            <h2>Add a Break</h2>
            <div className='break-button-container'>
                <div className='button'>
                    <p onClick={()=>breakButton(10)}>10<small>S</small></p>
                </div>
                <div className='button'>
                    <p onClick={()=>breakButton(20)}>20<small>S</small></p>
                </div>
                <div className='button'>
                    <p onClick={()=>breakButton(30)}>30<small>S</small></p>
                </div>
                <div className='button'>
                    <p onClick={()=>breakButton(40)}>40<small>S</small></p>
                </div>
                <div className='button'>
                    <p onClick={()=>breakButton(50)}>50<small>S</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default Break;