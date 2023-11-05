import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
function Header()
{
    return(
        <>
        <header>
            <div className='Header'>
            <Link id='Link1' to="*"> <p id='naming'> The Car Shop </p> </Link>
            </div>
        </header>
        </>
    )
}

export default Header;