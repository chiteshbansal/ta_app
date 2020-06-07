import React from 'react';

const Participant = (props) =>{
    const{Student}=props;
    return (
        <div className={props.StudentCard}>
            <div className="Top_Section">
                <img alt={Student.name} src={Student.img}></img>
            </div>
            <div className="Bottom_Section">
                <div className="Bottom_Left">
                    <div>Name: {Student.name}</div>
                    <div>RollNo: {Student.RollNo}</div>
                    <div>Email: {Student.Email}</div>
                    <div>ContactNo: {Student.PhoneNo}</div>
                    <button className="Profile_Button">Profile</button>
                </div>
                <div className={props.Class}>   
                    <div>
                        <button>
                            Chat
                        </button>
                    </div>
                    <div>
                        <button onClick={()=>props.delete(props.Student.RollNo)}><i class="far fa-trash-alt"></i></button>
                        <button><i class="fas fa-user-plus"></i></button>
                        <button><i class="fas fa-info-circle"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participant;