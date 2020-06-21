import React from "react";

const Navbar = (props) =>{
    const NavbarTabs =[
        {TabName:"Home",Id:"1",img:"https://img.icons8.com/metro/26/000000/home.png"},
        {TabName:"Subject",Id:"2",img:"https://img.icons8.com/pastel-glyph/64/000000/books.png"},
        {TabName:"Participants",Id:"3",img:"https://img.icons8.com/fluent/48/000000/student-male.png"},
    ]
    return (
        <div className=" Navbar">
            {NavbarTabs.map((tab)=>{
                return (
                    <div  className={props.Class} onClick={()=>props.SectionChange(tab.TabName)} key={tab.Id}>
                        {tab.TabName}
                        <img alt="" src={tab.img} height='30' width="30">
                        </img>
                    </div>
                )
            })}
            <div className={props.Class} onClick={props.ChangeTheme}>{props.InactiveTheme} Theme</div> 
        </div>
    )
}


export default  Navbar;