import React from 'react';

const Footer = (props) =>{

    return (
        <div className={props.Class}>
           <div className='Footer_heading'>WeConnect</div>
           <div>&copy; CopyRights Weconnect Inc. ltd</div>
           <div className='contact_section'>
               <span>Contact Us</span>
               <span>Address: SCO - 4 Shubham Enclave , South Delhi , Near Rose Garden
                   
               </span>
               <div >
               <i class="fab fa-facebook-f"></i>
               <i class="fab fa-instagram"></i>
               <i class="fab fa-twitter"></i>
               <i class="fab fa-linkedin"></i>
               </div>
           </div>
        </div>
    )
}

export default Footer;