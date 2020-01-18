import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title , imageUrl , size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    
        <div className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
        />
       
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    
    </div>
);

// By using withRouter(MenuItem) we are giving MenuItem 
// component to have access to those things related to the router
export default withRouter(MenuItem);