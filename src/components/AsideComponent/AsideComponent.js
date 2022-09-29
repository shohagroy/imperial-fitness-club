import React, { useEffect, useState } from 'react';
import './AsideComponent.css'
import Break from './Break/Break';
import Exercise from './Exercise/Exercise';
import User from './User/User';


const AsideComponent = ({time}) => {

    const [breakTime, setBreakTime] = useState(0);
    const [displayTime, setDisplayTime] = useState(0)
    
    useEffect(()=>{

        const restBreakTime = localStorage.getItem('breakTime');
        setDisplayTime(restBreakTime);
        
    }, [breakTime])
    
    const breakButton = (currentBreak) => {
        setBreakTime(currentBreak)
        localStorage.setItem('breakTime', currentBreak)
    }
    
    return (
        <div className='aside'>
            <User/>
            <Break breakButton={breakButton}>
            </Break>
            <Exercise excTime={time} restTime={displayTime}/>
        </div>
    );
};

export default AsideComponent;