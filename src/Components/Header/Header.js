import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faPersonWalking} className="headerIcon"></FontAwesomeIcon>
            <h1>Fitness Hero</h1>
        </div>
    );
};

export default Header;