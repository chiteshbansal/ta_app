import React from 'react';


const SubjectCard = (props) =>{
    return (
        <div className="Subject_Card BoxShadow" onClick ={()=>{props.Participant(props.Card.SubjectName)}}>
            <div className="Left_Section">
                <img alt ={props.Card.SubjectName} src={props.Card.img}></img>
            </div>
            <div className="Right_Section">
                <div className="SubjectName">
                    {props.Card.SubjectName}
                </div>
                <div className="Card_Content">
                    <div>
                        <div className="Card_Content_Heading">Semester:</div>
                        <div>{props.Card.Semester}</div>
                    </div>
                    <div>
                        <div className="Card_Content_Heading">Credits:</div>
                        <div>{props.Card.SubjectCredits}</div>
                    </div>
                    <div>
                        <div className="Card_Content_Heading">Department:</div>
                        <div>{props.Card.Department}</div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default SubjectCard;