import React from 'react';

const LoginForm = (props) =>{

    return(
        <div id="LoginForm_cnt">
            <form>
                <div>
                    <label>First Name</label>
                    <input id="fname" type='text' placeholder='FirstName..' onChange = {props.LoginName}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input id="lname" type='text' placeholder='LastName..'></input>
                </div>
                <div>
                    <label>Email Address</label>
                    <input id="email" type='email' placeholder='abc@example.com'></input>
                </div>
                <div>
                    <label>Password</label>
                    <input id="password" type='password' placeholder='Password'></input>
                </div>
                <div>
                    <label>TA ID</label>
                    <input id="id" type='text' placeholder='Id..'></input>
                </div>
            </form>
        </div>
    )
}


export default LoginForm;