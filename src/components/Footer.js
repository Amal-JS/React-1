import React from 'react'
import './Footer.css'



const div_left_margin = {
    marginLeft :'20px'
}

function Footer(){

    return(

        <div className='footer-div'>

       <div style={div_left_margin} >
       <h3 className='footer-head'>
            Project
        </h3>

        <h5 className='footer-text'>
                Name 
            </h5>
            <h5 className='footer-text'>
                District
            </h5>
            <h5 className='footer-text'>
                Class
            </h5>

       </div>

       <div style={div_left_margin}>
       <h3 className='footer-head'>
            Project
        </h3>

        <h5 className='footer-text'>
                Name 
            </h5>
            <h5 className='footer-text'>
                District
            </h5>
            <h5 className='footer-text'>
                Class
            </h5>

       </div>



            
        </div>


    );
}

export default Footer;