import React from 'react';
import './AsideComponent.css'
import Break from './Break/Break';
import Exercise from './Exercise/Exercise';
import User from './User/User';


const AsideComponent = () => {
    return (
        <div className='aside'>
            <User/>
            <Break/>
            <Exercise/>
        </div>
    );
};

export default AsideComponent;