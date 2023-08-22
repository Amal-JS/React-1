import React from 'react';
import './header.css';


class Header extends React.Component{

    render(){
        return(

            <div className='header-div'>
                <h3 className='nav-elements'>Home</h3>
                <h3 className='nav-elements'>About</h3>
                <h3 className='nav-elements'>Contact</h3>
                <h3 className='nav-elements'>Sign In</h3>
            </div>

        );
    };
}

export default Header;