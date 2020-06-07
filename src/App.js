import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from "./Navbar";
import LoginBox from './LoginBox';
import LoginForm from './LoginForm';
import SubjectCard from './SubjectCard';
import DeepLearing from "./deeplearning.jpg";
import Electrical from "./Electrical.jpg";
import PDS from "./PDS.jpg";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.png";
import avatar5 from "./avatar5.jpg";
import avatar6 from "./avatar6.png";
import avatar7 from "./avatar7.png";
import avatar8 from "./avatar8.jpg";
import avatar9 from "./avatar9.jpg";
import NotificationBar from "./NotificationBar";
import TAworkspace from './TAworkspace';
import Footer from './Footer';

import Participant from "./Participant";
class App extends React.Component {

  state={
    TA_login:false,
    Login_status:false,
    UserName:"",
    Subjects:[
      {
        SubjectName:'Algorithm1',
        SubjectCredits:"3",
        Semester:"3",
        Department:"CS",
        Id:"1",
        img:"https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80"
      },{
        SubjectName:'Electrical Technology',
        SubjectCredits:"3",
        Semester:"1",
        Department:"EE",
        Id:"2",
        img:`${Electrical}`
      },{
        SubjectName:'Physics Lab',
        SubjectCredits:"2",
        Semester:"1",
        Department:"PH",
        Id:"3",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjZO3V6zXHPwGcaT8osy93RKkI2lxE8KvilZwyvy3o7EjjkYSx&usqp=CAU"
      },{
        SubjectName:'PDS Lab',
        SubjectCredits:"4",
        Semester:"2",
        Department:"CS",
        Id:"4",
        img :`${PDS}`
      },{
        SubjectName:'Deep Learning',
        SubjectCredits:"4",
        Semester:"5",
        Department:"CS",
        Id:'5',
        img:`${DeepLearing}`
      },{
        SubjectName:'Machine Learning',
        SubjectCredits:"4",
        Semester:"6",
        Department:"CS",
        Id:'6',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxdmX6SV2TYIPmJXZlGBk61mxkn7UTcWpB_F7GDwowVndLVbxE&usqp=CAU"
      }
    ],
    ShowSection:"Subject",
    CurrentParticipantSubject:'',
    Students:[
      {
        name:"Manav",
        RollNo:'19EE30010',
        Email:"manav@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar1}`
      },
      {
        name:"Harsh",
        RollNo:'19ME50030',
        Email:"harsh@example.com",
        PhoneNo:"948979XXXX",
        img:`${avatar2}`
      },
      {
        name:"Aanchal",
        RollNo:'19EC40023',
        Email:"Aanchal@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar3}`
      },
      {
        name:"Chitesh",
        RollNo:'19MA342323',
        Email:"chitesh@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar4}`
      },
      {
        name:"Prateek",
        RollNo:'19GG30010',
        Email:"Prateek@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar5}`
      },
      {
        name:"Manav",
        RollNo:'19EE303010',
        Email:"manav@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar9}`
      },
      {
        name:"Prateek",
        RollNo:'19GG304010',
        Email:"Prateek@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar6}`
      },
      {
        name:"Chitesh",
        RollNo:'19MA3423253',
        Email:"chitesh@example.com",
        PhoneNo:"988979XXXX",
        img:`${avatar7}`
      },
      {
        name:"Harsh",
        RollNo:'19ME500630',
        Email:"harsh@example.com",
        PhoneNo:"948979XXXX",
        img:`${avatar8}`
      }
    ],
    NotificationBar:{
      Class_Name:"alert hide",
      msg:"Warning"
    },
    DarkTheme:false
  }

 
  LoginHandler = () =>{
    const  UpdateLoginStatus = !this.state.Login_status;
    this.setState({
      Login_status:UpdateLoginStatus
    })
  }
  
  UpdateLoginNameHandler= (event) =>{
      let currentUser= event.target.value;
      this.state.UserName=currentUser;

  }

  SectionChangeHandler= (SectionName,currentobj) =>{
      const updateSection = SectionName;
      ;
      this.setState({
        ShowSection:updateSection
      })
  }

  ParticipantPageHandler = (SubjectName )=>{
    const UpdateSection = 'Participants';
    this.setState({
      ShowSection:UpdateSection,
      CurrentParticipantSubject:SubjectName
    })

  }

  DeleteParticipantHandler=(StudentRollNo)=>{
    const {Students}= this.state;
    
    const newClass = Students.filter((student)=>{
      return student.RollNo!=StudentRollNo;
    })

    const removedstudent = Students.filter((student)=>{
      return student.RollNo===StudentRollNo;
    })
    const notif= removedstudent[0].name+"("+removedstudent[0].RollNo+')' +" is Removed from the course!!!";

    setTimeout(()=>{
      this.removeNotificationhandler();
    },5000);
    this.setState({
      Students:newClass,
      NotificationBar:{
        Class_Name:"alert show showAlert",
        msg:notif
      }
    })
  }

  removeNotificationhandler = ()=>{

    this.setState({
      NotificationBar:{
        Class_Name:"alert hide"
      }
    })
  }

  ChangeThemeHandler = () =>{
    var newtheme = !this.state.DarkTheme;
    this.setState({
      DarkTheme:newtheme
    })
  }

  AddParticipantsHandler = () =>{

    setTimeout(()=>{
      this.removeNotificationhandler();
    },5000);

    this.setState({
      NotificationBar:{
        Class_Name:"alert show showAlert",
        msg:"All the Participants are added to the course"
      }
    })
  }

  render(){ 

    let InactiveTheme = 'Dark';
    let AppClass = ['App'];
    let LoginBtnClass = ['LoginBtn']
    let LoginBoxHeadingClass = ['Login_box_heading'];
    let SubjectCardClass = ['Subject_Card BoxShadow'];
    let TaWorkspaceClass = ['ta_workspace BoxShadow'];
    let AddParticipantBtnClass  = ['AddParticipantBtn']
    let FooterClass = ['Footer'];
    let NavbarTabClass = ['NavbarTab','BoxShadow']
    let StudentCardClass=['Bottom_Right'];
    let TaWorkSpaceHeadingClass=['workspace_heading'];

    if(this.state.DarkTheme===true)
    {
      InactiveTheme="Light";
    }

    const HeaderClass = ['Header'];

    if(this.state.DarkTheme==true)
    {
      HeaderClass.push('HeaderDarkTheme ');
      LoginBoxHeadingClass.push('LoginBoxHeadingDarkTheme');
      LoginBtnClass.push('LoginBtnDarkTheme');
      SubjectCardClass.push('SubjectCardDarkTheme');
      AppClass.push('AppDarkTheme')
      TaWorkspaceClass.push('TaWorkspaceDarkTheme');
      AddParticipantBtnClass.push('AddParticipantBtnDarkTheme');
      FooterClass.push('FooterDarkTheme');
      NavbarTabClass.push('NavbarTabDarkTheme');
      StudentCardClass.push('Bottom_RightDarkTheme');
      TaWorkSpaceHeadingClass.push('workspace_headingDarkTheme');
    }
    let LoginF=null;
    if(this.state.ShowSection==="Home")
    {
       LoginF =(
        <div className="Complete_login_container BoxShadow">
          <LoginBox Class={LoginBoxHeadingClass.join(" ")}/>
          <LoginForm status = {this.state.TA_login} LoginName={this.UpdateLoginNameHandler} />
          <button className={LoginBtnClass.join(" ")} onClick={this.LoginHandler}> Login</button>
        </div>
      )
      if(this.state.Login_status)
      {
        LoginF =(
          <div className="Welcome_cnt">
            <div>Welcome !!{this.state.UserName} </div>
          </div>
        )
      }
    }
    let SubjectSection=null;

    if(this.state.ShowSection==="Subject"){
      SubjectSection=(
        <div className="Subject_Section">
          {
            this.state.Subjects.map((subject)=>{
              return (
                <SubjectCard Card = {subject} Participant={(SubjectName)=>this.ParticipantPageHandler(SubjectName)} key={subject.Id} Class={SubjectCardClass.join(' ')}/>
              )
            })
          }
        </div>
      )
    }
    let ParticipantSection=null

    if(this.state.ShowSection==="Participants" && this.state.CurrentParticipantSubject!==''){
      const subject = this.state.Subjects.filter((subject)=>{
        return subject.SubjectName===this.state.CurrentParticipantSubject;
      })
      const {Students}=this.state;
      ParticipantSection=(
        <div className="Participant_Section" >
          
          <NotificationBar CurrentClass={this.state.NotificationBar} remove={this.removeNotificationhandler} />
          <SubjectCard Card = {subject[0]} Participant={()=>{}} Class={SubjectCardClass.join(' ')} />
          <TAworkspace Class={TaWorkspaceClass.join(' ')} HeadingClass={TaWorkSpaceHeadingClass.join(' ')}/>
          <div className="Student_Section">
           {
             Students.map((student)=>{
               return(
                 <Participant Student={student} delete={(StudentRollNo)=>this.DeleteParticipantHandler(StudentRollNo)} Class = {StudentCardClass.join(" ")}/>
               )
             })
           }
           </div>
           <div className={AddParticipantBtnClass.join(' ')}><button onClick={this.AddParticipantsHandler}>Add All Participants</button></div>
        </div>
      )
    }
      
    
    return (
      <div className={AppClass.join(' ')}>
        <Header Class={HeaderClass.join(" ")}/>
        <Navbar Class={NavbarTabClass.join(' ')} SectionChange={(SectionName)=>{this.SectionChangeHandler(SectionName,this)}} ChangeTheme={this.ChangeThemeHandler} InactiveTheme={InactiveTheme}/> 
        
        {LoginF}
        {SubjectSection}
        {ParticipantSection}
        <Footer  Class = {FooterClass.join(" ")}/>
      </div>
    );
  }
}



export default App;

