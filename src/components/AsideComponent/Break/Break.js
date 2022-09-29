import React from 'react';
import './Break.css'

const Break = ({breakButton}) => {



    return (
        <div className='break-container'>
            <h2>Add a Break</h2>
            <div className='break-button-container'>
                <Button breakButton={breakButton} time="10"/>
                <Button breakButton={breakButton} time="15"/>
                <Button breakButton={breakButton} time="20"/>
                <Button breakButton={breakButton} time="25"/>
                <Button breakButton={breakButton} time="30"/>
            </div>
            
        </div>
    );
};


// Button component
const Button = ({time, breakButton}) => {
    return(
        <div className='button'
        onClick={()=> breakButton(time)}
        >
            <p >{time}<small>S</small></p>
        </div>
    )
}
export default Break;