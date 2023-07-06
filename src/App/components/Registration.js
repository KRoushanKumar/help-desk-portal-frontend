import React from 'react'
import '../../Assets/css/style.css';
import signup from '../../Assets/images/signup-image.jpg'
import {
     FaUsers,FaUser,FaLock,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Axois from 'axios';
function registration() {

    function input()
    {
        console.log('registation ');
        var userName = document.getElementById("userName").value;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var cPassword = document.getElementById("re_pass").value;
        //alert(password);
        // validation start
        if(userName==""){
            document.getElementById('uname').innerHTML="**Please enter your username";
        } else if((userName.length<=2 )|| (userName.length>=20)){
            document.getElementById('uname').innerHTML="**User name length must be between 2-20 characters";
        } else {
            document.getElementById('uname').innerHTML="";
        }
        
        if(firstName==""){
            document.getElementById('fname').innerHTML="**Please enter your first name";
        } else if((firstName.length<=2 )|| (firstName.length>=20)){
            document.getElementById('fname').innerHTML="**Full name length must be between 2-20 characters";
        } else if(!isNaN(firstName)){
            document.getElementById('fname').innerHTML="**Only characters allowed";
        } else {
            document.getElementById('fname').innerHTML="";
        }

        if(lastName==""){
            document.getElementById('lname').innerHTML="**Please enter your last name";
        } else if((lastName.length<=2 )|| (lastName.length>=20)){
            document.getElementById('lname').innerHTML="**Last name length must be between 2-20 characters";
        } else if(!isNaN(lastName)){
            document.getElementById('lname').innerHTML="**Only characters allowed";
        } else {
            document.getElementById('lname').innerHTML="";
        }

        if(email==""){
            document.getElementById('mail').innerHTML="**Please enter your email";
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            document.getElementById('mail').innerHTML="";
          
        } else {
            document.getElementById('mail').innerHTML="**Enter valid email";
        } 
        
        if(password ==""){
            document.getElementById('pass').innerHTML="**Please enter your password.";
        }
        else if (password.length < 8) {
            document.getElementById('pass').innerHTML="Your password must be at least 8 characters.";
        }
        else if (password.search(/[a-z]/i) < 0) {
            document.getElementById('pass').innerHTML="Your password must contain at least one letter."; 
        }
        else if (password.search(/[0-9]/) < 0) {
            document.getElementById('pass').innerHTML="Your password must contain at least one digit.";
        }
        else
        document.getElementById('pass').innerHTML="";

        
        
        if(cPassword==""){
            document.getElementById('cpass').innerHTML="**Please enter your confirm password";
        } else if(password != cPassword){
            document.getElementById('cpass').innerHTML="**Password are not matching";
        } else document.getElementById('cpass').innerHTML="";


        // validation end


        //var id=1;
        console.log(userName+" "+firstName+" "+lastName+" "+email+" "+password);

        //Axois.post('http://localhost:8080/api/show')


        Axois.post('http://localhost:8080/api/registration',{userName:userName,password:password,firstName:firstName,lastName:lastName,email:email})
        .then(()=>{
            alert('registation successful')
        }).catch((error) => { console.log(error) });

    }

    return (
        <>
            <div class="main">

               {/* Sing up  Form  */}
                <div class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <div  class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label mlFor="userName"><FaUser/></label>
                                        <input type="text"  id="userName" placeholder="User name" />
                                    </div>
                                    <span id="uname" class="danger" style={{color: "red"}}></span>
                                    
                                    <div class="form-group">
                                        <label for="firstName"><FaUser/></label>
                                        <input type="text"  id="firstName" placeholder="First name" />
                                    </div>
                                    <span id="fname" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="lastName"><FaUser/></label>
                                        <input type="text"  id="lastName" placeholder="Last name" />
                                    </div>
                                    <span id="lname" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="email"><MdEmail/></label>
                                        <input type="email" id="email" placeholder="Your email" />
                                    </div>
                                    <span id="mail" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="password"><FaLock/></label>
                                        <input type="password"  id="password" placeholder="Password" />
                                    </div>
                                    <span id="pass" class="danger" style={{color: "red"}}></span>
                                    <div class="form-group">
                                        <label for="re-pass"><FaLock/></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <span id="cpass" class="danger" style={{color: "red"}}></span>
                                    {/* <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" class="term-service">Terms of service</Link></label>
                                    </div> */}
                                    <div class="form-group form-button">
                                        <input type="submit"  id="signup" className="form-submit" value="submit" onClick={()=>(input())} />
                                    </div>
                                </div>
                            </div>
                            <div class="signup-image">
                                <figure><img src={signup} alt="sing up"></img></figure>
                                <Link to="/login" class="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>
            
        </>
    )
}

export default registration
