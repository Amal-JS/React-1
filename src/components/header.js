import React from 'react';
import './header.css';


class Header extends React.Component{

    

    render(){



        const {
            switch_components
        } = this.props;


        return(

            <div className='header-div'>
                <h3 className='nav-elements' onClick={()=>{
                    switch_components('home')
                }}>Home</h3>

                <h3 className='nav-elements' onClick={()=>{
                    switch_components('about')
                }}>About</h3>

                <h3 className='nav-elements' onClick={()=>{
                    switch_components('contact')
                }}>Contact</h3>

                <h3 className='nav-elements' onClick={()=>{
                    switch_components('sign in')
                }}>Sign In</h3>
            </div>

        );
    };
}

export default Header;