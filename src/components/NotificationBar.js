import React from 'react';

const NotificationBar = (props) =>{
    return (
        <div className={props.CurrentClass.Class_Name}>
            <span className="msg">{props.CurrentClass.msg}</span>
            <div className="close-btn">
                <span  className="fas fa-times" onClick={props.remove}></span>
            </div>
         </div>
    )
}


export default NotificationBar;