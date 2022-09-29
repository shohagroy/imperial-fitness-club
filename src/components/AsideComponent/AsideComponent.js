import React from 'react';
import './AsideComponent.css'
import Break from './Break/Break';
import User from './User/User';


const AsideComponent = () => {
    return (
        <div className='aside'>
            <User/>
            <Break/>
            
            
        </div>
    );
};

export default AsideComponent;