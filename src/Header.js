import React from 'react';

const Header = (props) =>{

    return (
        <div className={props.Class}>
            <div className="App_logo">
                <img alt="WeConnect" src = "https://files.codingninjas.in/0000000000001185.png"/>
            </div>
            <div id="App_name">
               <span>WeConnect</span>
               <img alt = ""src="https://img.icons8.com/nolan/64/handshake.png" style={{height:"30px",width:'30px'}}/>
            </div>
            <div className="App_logo">
                <img alt="WeConnect" src = "https://files.codingninjas.in/0000000000001187.png"/>
            </div>
        </div>
    )
}
export default Header;