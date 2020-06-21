import React from 'react';

const TAworkspace = (props) =>{

    return (
        <div className={props.Class}>
            <div className={props.HeadingClass}>
               <div className='headingContent'>TA's Workspace</div>
            </div>
            <div className='workspacetabs'>
                <span>Upload Assignments</span>
                <span>Make Announcments</span>
                <span>Video Lectures</span>
                <span>Online Class</span>
                <input type='search' placeholder='search...'></input>
            </div>
        </div>
    )
}

export default TAworkspace;